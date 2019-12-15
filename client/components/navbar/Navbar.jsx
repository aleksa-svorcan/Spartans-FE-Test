import React from 'react';
import PropTypes from 'prop-types'; 

function Navbar(props) {
  
  const greeting = 'Hello Function Component!';
  
  return (
    <nav id="navbar">
    <form className="navbar-form" onSubmit={props.submit}>
      <input id="search" onChange={props.searchChange}  type="text" placeholder="Enter GitHub username..."></input>
    </form>
      <h1 className="navbar-title">GitHub Database</h1>
    </nav>
  );
}

Navbar.propTypes = {
  submit: PropTypes.func,
  searchChange: PropTypes.func
};

export default Navbar;