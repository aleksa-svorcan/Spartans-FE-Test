import React from 'react';
import UserListItem from '../user-list-item/UserListItem.jsx'
import PropTypes from 'prop-types'; 

function UserList(props) {
	console.log(props)
  return (

    <div className="user-list">
    	{
    		props.users.map(
    			(user,index) => (
    				<div key={index} className="user-list-item-container">
    					<UserListItem  user={user}/>
    				</div>
    			)
  			)
    	}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array
};


export default UserList;

