import React from "react";

const UserCard = (props) => {
	// destructure the attributes of the object for redundancy reduction
	const { login, avatar_url, html_url } = props.user;
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				alt={login}
				className="round-img"
				style={{ width: "80px" }}
			/>
			<h3>{login}</h3>
			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1" alt={login}>
					More here
				</a>
			</div>
		</div>
	);
};

export default UserCard;
