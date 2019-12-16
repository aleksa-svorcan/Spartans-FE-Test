import React from 'react';
import UserListItem from '../user-list-item/UserListItem.jsx'
import PropTypes from 'prop-types'; 

function Messages(props) {
  const isLoading = props.isLoading
  const success = props.searchSuccess
  const valid = props.validSearch
  const name = props.userName 
  const reposUsername = props.reposUserName 
  const hasRepos = props.hasRepos 
  const errorMessage = props.errorMessage
  let text = ''

  if(errorMessage) {
    text = errorMessage
  }

  if(isLoading) {
    text='Loading...'
  } 
  
  if(name) {
    text = `Search results for ${name}...`
  }

  if(success && valid > 0) {
    text = `Search results for ${name}...`
  }

  if(success && valid === 0) {
    text = 'No users found...'
  }

  if(hasRepos && hasRepos > 0) {
    text = `${reposUsername}'s repositories...`
  }

  if(hasRepos && hasRepos === 0) {
    text = `${reposUsername} has no repositories...`
  }

  return (
    <div className="messages-container">
    <h1 className="messages-title">{text}</h1>
    </div>
  );
}

Messages.propTypes = {
  isLoading: PropTypes.bool,
  searchSuccess: PropTypes.bool,
  validSearch: PropTypes.number,
  userName: PropTypes.string,
  reposUserName: PropTypes.string,
  hasRepos:PropTypes.number,
  errorMessage: PropTypes.string,
};

export default Messages;

