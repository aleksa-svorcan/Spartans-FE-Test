import React, { Component } from "react";
import Navbar from '../navbar/Navbar.jsx'
import UserList from '../user-list/UserList.jsx'
import { connect } from "react-redux";
import { addUsers } from "../../store/actions.js";

//<UserList users={this.state.gitHubSearchResults}/>


const mapStateToProps = state => {
  return { users: state.users };
}

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      searchValue: '',
      gitHubSearchResults: [],
      isLoading: false
    };

    console.log('user', props.users)
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
      .then(res => res.json())
      .then(
        (result) => {
          this.props.addUsers(result.items);
          this.setState({
            isLoading: false,
            gitHubSearchResults: result.items
          });
        },
        (error) => {
         //error handling to do
        }
      )
  }
  
  render() {
    return (
      <div className="main">
        <Navbar searchChange={this.seachInputChange.bind(this)} submit={this.searchSubmit.bind(this)}/>
          <div className="test">{
            this.props.users && this.props.users.length  && this.props.users !== undefined ? this.props.users.map(
              (user,index) => ( user ? <p key={index}>{user.name}</p> : <p key={index}>undefined</p>)) : <p>Nope!</p> }</div>
      </div>
      
    );
  }
}



export default connect( mapStateToProps, mapDispatchToProps )(Home)

