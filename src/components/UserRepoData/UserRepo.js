import React from "react";
import UserRepoList from "./UserRepoList";

const UserRepo = ({ repos }) => {
	return (
		<div>
			{repos.length === 0 ? "" : <h1>Recent 5 Repositories : </h1>}
			{repos.map((repo) => (
				<UserRepoList key={repo.id} repo={repo} />
			))}
		</div>
	);
};

export default UserRepo;
