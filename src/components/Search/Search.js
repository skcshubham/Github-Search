import React, { useState } from "react";

const Search = (props) => {
	const [text, setText] = useState("");

	const onChange = (event) => {
		setText(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		// if user searches for empty string
		if (text === "") {
			props.setAlert("Please enter something in the search field . . .");
		} else {
			// console.log(text);
			// passing the props up to the app component to centralize data
			props.searchUsers(text);
			setText("");
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					onChange={onChange}
					value={text}
				/>
				<div style={{ display: "flex" }}>
					<input
						type="submit"
						value="Search"
						className="btn btn-dark btn-block"
					/>
					<input
						type="button"
						value="Clear results"
						className="btn btn-light btn-block"
						onClick={props.clearUsers}
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
