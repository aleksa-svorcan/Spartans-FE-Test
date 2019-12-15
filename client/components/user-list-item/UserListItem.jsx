import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function UserListItem(props) {

	return (
		<Link className="user-list-item" to={`/repos/${props.user.login}`}>
			<h3 className="user-username">{props.user.login}</h3>
			<div className="user-list-item-lower">
				<div className="user-image-container">
					<img className="user-image" src={props.user.avatar_url}/>
				</div>
				<div className="user-text-container">
					<p>Couldn't find a way to retrieve user description so here is some random text</p>
				</div>
			</div>
		</Link>
		);
}

UserListItem.propTypes = {
  user: PropTypes.object
};

export default UserListItem;
