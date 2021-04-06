import React from "react";
import UserRepoList from "./UserRepoList";

const UserRepo = ({ repos }) => {
	return (
		<div>
			{repos.map((repo) => (
				<UserRepoList key={repo.id} repo={repo} />
			))}
		</div>
	);
};

export default UserRepo;
