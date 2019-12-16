import React, { Component } from "react";
import UserReposItem from '../user-repos-item/UserReposItem.jsx'
import Messages from '../messages/Messages.jsx'
import { Link } from "react-router-dom";

class UserRepos extends Component {
  constructor(props) {
    super();
    this.state = {
      username: props.match.params.id,
      reposSearchResults: [],
      isLoading: false,
      apiError: ''

    }
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("https://api.github.com/users/" + this.state.username + "/repos")
      .then( response => {
        if (!response.ok) {  
          throw response
        }
          return response.json()
      })
      .then(
        (result) => {
          this.setState({
            reposSearchResults: result,
            isLoading: false
          });
        },
        (error) => {
         this.setState({
            apiError: error.status + ' - ' + error.statusText,
            isLoading: false
          })
        }
      )
      .catch( error => {
         this.setState({
            apiError: error.status + ' - ' + error.statusText,
            isLoading: false
          })
      })
  }

  render() {
    return (
      <div>
        <div className="user-repos-header">
          <Link className="user-repos-back" to="/">Back</Link>
          <h1 className="navbar-title">GitHub API Project</h1>
        </div>
        <Messages 
          isLoading={this.state.isLoading} 
          reposUserName={this.state.username}
          hasRepos={this.state.reposSearchResults.length}
          errorMessage={this.state.apiError}
          /> 
        <div className="user-repos">
        
        {
          this.state.reposSearchResults.map(
            (repo,index) => (
              <div key={index} className="user-repo-item-container">
                <UserReposItem  repo={repo}/>
              </div>
            )
          )
        }
        </div>
      </div>
    )
  }
}

export default UserRepos;