import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className="fab fa-github-alt p" />
				GITHUB SEARCH ENGINE
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
