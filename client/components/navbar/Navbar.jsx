import React from 'react';
function Navbar() {
  
  const greeting = 'Hello Function Component!';
  
  return (
    <div id="navbar">
      <input id="search" type="text" placeholder="Enter GitHub username..."></input>
      <h1 className="navbar-title">GitHub Database</h1>
    </div>
  );
}
export default Navbar;