import React, { Component } from "react";

class Search extends Component {
	state = {
		text: "",
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.text);
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
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Search;
