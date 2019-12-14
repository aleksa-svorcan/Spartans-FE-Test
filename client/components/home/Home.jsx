import React, { Component } from "react";
import Navbar from '../navbar/Navbar.jsx'
import UserList from '../user-list/UserList.jsx'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      gitHubSearchResults: [],
      isLoading: false
    };
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
        <UserList users={this.state.gitHubSearchResults}/>
      </div>
      
    );
  }
}

export default Home