import React, { Component } from "react";
import UserReposItem from '../user-repos-item/UserReposItem.jsx'

class UserRepos extends Component {
  constructor(props) {
    super();
    this.state = {
      username: props.match.params.id,
      reposSearchResults: []

    }
  }
  componentDidMount() {
    fetch("https://api.github.com/users/" + this.state.username + "/repos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            reposSearchResults: result
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
          <a className="user-repos-back" href="/">Back</a>
        </div>
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