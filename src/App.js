import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/Users/UserList";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get(
				`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				const updateState = () => {
					this.setState({ users: response.data, loading: false });
				};
				setTimeout(function () {
					updateState();
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				Search will go here
				<div className="container">
					<UserList loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
