import React from 'react';
import { Link } from 'react-router-dom'
function UserListItem(props) {

	return (
		<Link to={`/repos/${props.user.login}`}>
			<div className="user-list-item">
				<div className="user-image-container">
					<img className="user-image" src={props.user.avatar_url}/>
				</div>
				<div className="user-text-container">
					<h3 className="user-username">{props.user.login}</h3>
				</div>
			</div>
		</Link>
		);
}
export default UserListItem;

/*
avatar_url: "https://avatars0.githubusercontent.com/u/84758?v=4"
events_url: "https://api.github.com/users/aleksa/events{/privacy}"
followers_url: "https://api.github.com/users/aleksa/followers"
following_url: "https://api.github.com/users/aleksa/following{/other_user}"
gists_url: "https://api.github.com/users/aleksa/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/aleksa"
id: 84758
login: "aleksa"
node_id: "MDQ6VXNlcjg0NzU4"
organizations_url: "https://api.github.com/users/aleksa/orgs"
received_events_url: "https://api.github.com/users/aleksa/received_events"
repos_url: "https://api.github.com/users/aleksa/repos"
score: 423.64783
site_admin: false
starred_url: "https://api.github.com/users/aleksa/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/aleksa/subscriptions"
type: "User"
url: "https://api.github.com/users/aleksa"
*/