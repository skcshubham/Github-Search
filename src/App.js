import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/Users/UserList";
import Search from "./components/Search/Search";
import Alert from "./components/Alert/Alert";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
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

	// search Github Users
	searchUsers = (text) => {
		// console.log(text);
		this.setState({ loading: true });
		axios
			.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				const updateState = () => {
					this.setState({ users: response.data.items, loading: false });
				};
				setTimeout(function () {
					updateState();
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// clear users from state
	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	// error checking for empty string search
	setAlert = (msg) => {
		this.setState({ alert: msg });
		setTimeout(() => this.setState({ alert: null }), 2000);
	};

	render() {
		return (
			<div>
				<Navbar />

				<div className="container">
					<Alert alert={this.state.alert} />
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClearButton={this.state.users.length > 0 ? true : false}
						setAlert={this.setAlert}
					/>
					<UserList loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
