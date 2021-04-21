import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/Users/UserList";
import Search from "./components/Search/Search";
import Alert from "./components/Alert/Alert";
import About from "./components/About/About";
import UserData from "./components/UserData/UserData";
import axios from "axios";
import "./App.css";

class App extends React.Component {
	state = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: null,
	};

	// loading default github user data on screen load
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
				// updates state after 2 secs to show loader spinner
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

	// get single user data
	getUser = (username) => {
		this.setState({ loading: true });
		axios
			.get(
				`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				const updateState = () => {
					this.setState({ user: response.data, loading: false });
				};
				setTimeout(function () {
					updateState();
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// get user's repository details
	getUserRepos = (username) => {
		axios
			.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				this.setState({ repos: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<div className="container">
					<Alert alert={this.state.alert} />
					<Switch>
						<Route exact path="/">
							<Search
								searchUsers={this.searchUsers}
								clearUsers={this.clearUsers}
								showClearButton={this.state.users.length > 0 ? true : false}
								setAlert={this.setAlert}
							/>
							<UserList loading={this.state.loading} users={this.state.users} />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route
							exact
							path="/user/:login"
							render={(props) => (
								<UserData
									{...props}
									getUser={this.getUser}
									getUserRepos={this.getUserRepos}
									user={this.state.user}
									repos={this.state.repos}
									loading={this.state.loading}
								/>
							)}
						></Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
