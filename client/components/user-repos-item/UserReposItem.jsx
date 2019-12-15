import React from 'react';
import { Link } from 'react-router-dom'

function UserReposItem(props) {
	console.log('props',props.repo)
	
	return (
		<a href={props.repo.html_url} target="_blank" className="user-repo-item">
			<div className="user-repo-header">
				<p>Stargazers: {props.repo.stargazers_count}</p>
				<p>Watchers: {props.repo.watchers_count}</p>
				<p>Forks count: {props.repo.forks_count}</p>
			</div>
			<div className="user-repo-upper">
				<h3 className="user-repo-title">{props.repo.name}</h3>
				<p>{props.repo.description}</p>
			</div>
			<div className="user-repo-lower">
				<p>Licence: {props.repo.license ? props.repo.license.name : 'no license'}</p>
			</div>		
		</a>	
	);
}
export default UserReposItem;