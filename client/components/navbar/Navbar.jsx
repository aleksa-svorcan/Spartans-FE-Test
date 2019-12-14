import React from 'react';
function Navbar(props) {
  
  const greeting = 'Hello Function Component!';
  
  return (
    <nav id="navbar">
    <form onSubmit={props.submit}>
      <input id="search" onChange={props.searchChange}  type="text" placeholder="Enter GitHub username..."></input>
    </form>
      <h1 className="navbar-title">GitHub Database</h1>
    </nav>
  );
}
export default Navbar;