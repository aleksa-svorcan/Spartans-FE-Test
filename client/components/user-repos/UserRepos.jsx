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
      isLoading: false

    }
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("https://api.github.com/users/" + this.state.username + "/repos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            reposSearchResults: result,
            isLoading: false
          });
        },
        (error) => {
         console.log('error', error)
        }
      )
  }

  //"https://api.github.com/users/aleksa/repos"
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