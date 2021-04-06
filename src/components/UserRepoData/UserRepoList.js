import React from "react";

const UserRepoList = ({ repo }) => {
	return (
		<div
			className="card"
			style={{ display: "flex", justifyContent: "space-between" }}
		>
			<h6 className="repo-name">
				<a style={{ fontSize: "1.1rem" }} href={repo.html_url}>
					{repo.name}
				</a>
			</h6>

			<div>
				<badge
					style={{ padding: "0px 5px" }}
					className="badge badge-light badge-github"
				>
					<i className="fas fa-star"></i> {repo.stargazers_count}
				</badge>
				<badge
					style={{ padding: "0px 5px" }}
					className="badge badge-light badge-github"
				>
					<i className="fas fa-eye"></i> {repo.watchers}
				</badge>
				<badge
					style={{ padding: "0px 5px" }}
					className="badge badge-light badge-github"
				>
					<i className="fas fa-utensils"></i> {repo.forks_count}
				</badge>
			</div>
		</div>
	);
};

export default UserRepoList;
