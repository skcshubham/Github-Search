import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";

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
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_reps,
			public_gists,
			hireable,
		} = this.props.user;

		const { loading } = this.props;
		if (loading === true) {
			return <Spinner />;
		} else {
			return (
				<div>
					<h1>{name}</h1>
				</div>
			);
		}
	}
}

export default UserData;
