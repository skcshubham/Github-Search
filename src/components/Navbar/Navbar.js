import React from "react";

const Navbar = (props) => {
	// destructuring the props object
	const { title } = props.title;

	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className="fab fa-github-alt p" />
				{title}
			</h1>
		</nav>
	);
};

export default Navbar;
