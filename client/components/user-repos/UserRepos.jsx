import React, { Component } from "react";
class UserRepos extends Component {
  constructor(props) {
    super();
    this.state = {
    	username: props.match.params.id

    }
  }
  render() {
    return (

  		<p>{this.state.username}</p>
      
    );
  }
}
export default UserRepos;