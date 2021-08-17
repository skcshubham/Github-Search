import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/Users/UserList";
import Search from "./components/Search/Search";
import Alert from "./components/Alert/Alert";
import About from "./components/About/About";
import UserData from "./components/UserData/UserData";
import axios from "axios";
import "./App.css";

const App = (props) => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	/* state = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: null,
	}; */

	// loading default github user data on screen load
	useEffect(() => {
		// setState({ loading: true });
		setLoading(true);
		axios
			.get(
				`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				const updateState = () => {
					// setState({ users: response.data, loading: false });
					setUsers(response.data);
					setLoading(false);
				};
				// updates state after 2 secs to show loader spinner
				setTimeout(function () {
					updateState();
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// search Github Users
	const searchUsers = (text) => {
		// console.log(text);
		// setState({ loading: true });
		setLoading(true);
		axios
			.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				const updateState = () => {
					// setState({ users: response.data.items, loading: false });
					setUsers(response.data.items);
					setLoading(false);
				};
				setTimeout(function () {
					updateState();
				}, 2000);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// clear users from state when clear button is pressed
	const clearUsers = () => {
		// setState({ users: [], loading: false });
		setUsers([]);
		setLoading(false);
	};

	// error checking for empty string search
	const showAlert = (msg) => {
		// setState({ alert: msg });
		setAlert(msg);
		// remove alert after 2 secs
		setTimeout(() => setAlert(null), 2000);
	};

	// get single user data
	const getUser = (username) => {
		// setState({ loading: true });
		setLoading(true);
		axios
			.get(
				`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				const updateState = () => {
					// setState({ user: response.data, loading: false });
					setUser(response.data);
					setLoading(false);
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
	const getUserRepos = (username) => {
		axios
			.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((response) => {
				// console.log(response.data);
				// setState({ repos: response.data });
				setRepos(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Alert alert={alert} />
				<Switch>
					<Route exact path="/">
						<Search
							searchUsers={searchUsers}
							clearUsers={clearUsers}
							setAlert={showAlert}
						/>
						<UserList loading={loading} users={users} />
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
								getUser={getUser}
								getUserRepos={getUserRepos}
								user={user}
								repos={repos}
								loading={loading}
							/>
						)}
					></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
