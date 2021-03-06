import React, { useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import UserRepo from "../UserRepoData/UserRepo";
import { Link } from "react-router-dom";

const UserData = (props) => {
	useEffect(() => {
		props.getUser(props.match.params.login);
		props.getUserRepos(props.match.params.login);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//console.log(props.user);
	const {
		name,
		avatar_url,
		location,
		company,
		bio,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = props.user;

	const { loading } = props;
	if (loading === true) {
		return <Spinner />;
	} else {
		return (
			<React.Fragment>
				<Link to="/" className="btn btn-light">
					back to home
				</Link>
				Open to opportunities: {""}
				{hireable ? (
					<i className="fas fa-check" style={{ color: "green" }} />
				) : (
					<i className="fas fa-times-circle" style={{ color: "red" }} />
				)}
				<card className="card grid-2">
					<div className="all-center">
						<img
							src={avatar_url}
							className="round-img"
							alt={name}
							style={{ width: "180px" }}
						/>
						<h1>{name !== null && name !== undefined ? name : login}</h1>
						<p>Location : {location === null ? "Not Provided" : location}</p>
					</div>
					<div>
						<h3>Bio:</h3>
						{bio === null ? (
							<>
								<span>Not Provided</span>
								<br />
							</>
						) : (
							<React.Fragment>
								<p>{bio}</p>
							</React.Fragment>
						)}

						<a
							href={html_url}
							className="btn btn-dark my"
							target="_blank"
							rel="noreferrer"
						>
							visit{" "}
							{name !== null && name !== undefined ? name.split(" ")[0] : login}
							's github
						</a>
						<li>
							<strong>USERNAME : </strong>
							{login !== null ? (
								<React.Fragment>
									<strong>{login}</strong>
								</React.Fragment>
							) : (
								"No username"
							)}
						</li>
						<li>
							<strong>COMPANY : </strong>
							{company !== null ? (
								<React.Fragment>
									<strong>{company}</strong>
								</React.Fragment>
							) : (
								"doesn't work currently."
							)}
						</li>
					</div>
				</card>
				<div className="card text-center">
					<badge className="badge badge-primary">Followers : {followers}</badge>
					<badge className="badge badge-primary">Following : {following}</badge>
					<badge className="badge badge-primary">
						Public repos : {public_repos}
					</badge>
					<badge className="badge badge-primary">
						Public gists : {public_gists}
					</badge>
				</div>
				<UserRepo repos={props.repos} />
			</React.Fragment>
		);
	}
};

export default UserData;
