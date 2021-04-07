import React from "react";

const About = () => {
	return (
		<div>
			<h1>About this app</h1>
			<br />
			<p>
				A web app that lets users search their Github profile and check their
				entire profile data as well as their top 5 recent repositories and its
				details.
			</p>
			<br />
			<p>
				This webapp is built with Github API for fetching user details and the
				repository details of the user. If you want to contribute to this
				project or suggest me some feature, you want find the link to the
				repository here =>
				<a
					href="https://github.com/skcshubham/Github-Search"
					target="_blank"
					rel="noreferrer"
					className="p"
				>
					Github repository link
				</a>
			</p>
		</div>
	);
};

export default About;
