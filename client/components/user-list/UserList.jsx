import React from 'react';
import UserListItem from '../user-list-item/UserListItem.jsx'

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
export default UserList;

