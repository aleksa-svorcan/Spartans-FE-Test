import React from 'react';
import PropTypes from 'prop-types'; 

function Navbar(props) {
  return (
    <nav id="navbar">
    <form className="navbar-form" onSubmit={props.submit}>
      <input id="search" onChange={props.searchChange}  type="text" placeholder="Enter GitHub username..."></input>
      <div className="search-icon-container" onClick={props.submit}>
        <img className="search-icon" src="src/search-icon.svg"/>
      </div>
    </form>
      <h1 className="navbar-title">GitHub API Project</h1>
    </nav>
  );
}

Navbar.propTypes = {
  submit: PropTypes.func,
  searchChange: PropTypes.func
};

export default Navbar;