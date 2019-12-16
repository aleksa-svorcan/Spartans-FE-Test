import React, { Component } from "react";
import Navbar from '../navbar/Navbar.jsx'
import UserList from '../user-list/UserList.jsx'
import Messages from '../messages/Messages.jsx'
import { connect } from "react-redux";
import { addUsers, searchValue } from "../../store/actions.js";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      isLoading: false,
      searchSuccess: false,
      apiError: ''
    }
  }

  seachInputChange(event) {
    this.setState({
      searchValue: event.target.value
    })
  }
  searchSubmit(event) {
    event.preventDefault()
    this.setState({
      isLoading: true,
    });
    this.searchGitHubApi(this.state.searchValue)  
  }
  searchGitHubApi(username) {
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then( response => {
        if (!response.ok) { console.log('response',response.statusText) }
          return response.json()
      })
      .then( result => {
        this.props.dispatch({
            type: "ADD_USERS", 
            users: result.items
          })
          this.props.dispatch({
            type: "SEARCH_VALUE", 
            searchValue: this.state.searchValue
          })
          this.setState({
            isLoading: false,
            searchSuccess: true
          });
      })
      .catch( error => {
        console.log('error api', error) 
      })
  }
  render() {
    const searchSuccess = this.props.users && this.props.users.length > 0 ? true : false 
    return (
      <div className="main">
        <Navbar 
          searchChange={this.seachInputChange.bind(this)} 
          submit={this.searchSubmit.bind(this)} />
        <Messages 
          searchSuccess={this.state.searchSuccess} 
          validSearch={this.props.users.length} 
          userName={this.props.searchValue}
          isLoading={this.state.isLoading}
          />    
        <UserList users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    searchValue: state.searchValue
  }
}

Home.propTypes = {
  users: PropTypes.array,
  searchValue: PropTypes.string
};

export default connect(mapStateToProps)(Home)

