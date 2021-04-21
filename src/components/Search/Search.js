import React from "react";

class Search extends React.Component {
	state = {
		text: "",
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();

		// if user searches for empty string
		if (this.state.text === "") {
			this.props.setAlert("Please enter something in the search field . . .");
		} else {
			// console.log(this.state.text);
			// passing the props up to the app component to centralize data
			this.props.searchUsers(this.state.text);
			this.setState({ text: "" });
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						onChange={this.onChange}
						value={this.state.text}
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
							onClick={this.props.clearUsers}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
