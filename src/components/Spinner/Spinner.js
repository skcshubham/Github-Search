import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
	return (
		<React.Fragment>
			<img
				src={spinner}
				alt="Loading..."
				style={{
					width: "75px",
					position: "absolute",
					top: "50%",
					left: "49%",
					marginLeft: "-25px",
				}}
			/>
		</React.Fragment>
	);
};

export default Spinner;
