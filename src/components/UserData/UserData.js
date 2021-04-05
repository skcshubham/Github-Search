import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

class UserData extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	render() {
		//console.log(this.props.user);
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
		} = this.props.user;

		const { loading } = this.props;
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
						<i className="fas fa-check text-success" />
					) : (
						<i className="fas fa-times-circle text-danger" />
					)}
					<card className="card grid-2">
						<div className="all-center">
							<img
								src={avatar_url}
								className="round-img"
								alt={name}
								style={{ width: "180px" }}
							/>
							<h1>{name}</h1>
							<p>Location : {location === null ? "Not Provided" : location}</p>
						</div>
						<div>
							<h3>Bio:</h3>
							{bio === null ? (
								"Not Provided"
							) : (
								<React.Fragment>
									<p>{bio}</p>
								</React.Fragment>
							)}
							<a
								href={html_url}
								className="btn btn-dark m-1"
								target="_blank"
								rel="noreferrer"
							>
								visit {name}'s github
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
									"doesn't work at any company"
								)}
							</li>
						</div>
					</card>
					<div className="card text-center">
						<badge className="badge badge-primary">
							Followers : {followers}
						</badge>
						<badge className="badge badge-primary">
							Following : {following}
						</badge>
						<badge className="badge badge-primary">
							Public repos : {public_repos}
						</badge>
						<badge className="badge badge-primary">
							Public gists : {public_gists}
						</badge>
					</div>
				</React.Fragment>
			);
		}
	}
}

export default UserData;
