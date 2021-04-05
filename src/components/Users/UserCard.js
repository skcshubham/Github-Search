import React from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
	// destructure the attributes of the object for redundancy reduction
	const { login, avatar_url } = props.user;
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
				<Link
					to={`/user/${login}`}
					className="btn btn-primary btn-sm my-1"
					alt={login}
				>
					Details
				</Link>
			</div>
		</div>
	);
};

export default UserCard;
