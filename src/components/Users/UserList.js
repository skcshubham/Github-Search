import React from "react";
import UserCard from "./UserCard";
import Spinner from "../Spinner/Spinner";

const UserList = (props) => {
	if (props.loading === true) {
		return <Spinner />;
	} else {
		return (
			<div className="grid-4">
				{props.users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		);
	}
};

export default UserList;
