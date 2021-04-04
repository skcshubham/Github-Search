import React from "react";
import UserCard from "./UserCard";
import Spinner from "../Spinner/Spinner";

const UserList = (props) => {
	if (props.loading === true) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{props.users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		);
	}
};

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem",
};

export default UserList;
