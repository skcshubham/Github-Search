import React from "react";
import spinner from "./oldSpinner.gif";

const Spinner = () => {
	return (
		<React.Fragment>
			<img
				src={spinner}
				alt="Loading..."
				style={{
					width: "50px",
					position: "absolute",
					top: "50%",
					left: "50%",
					marginLeft: "-25px",
				}}
			/>
		</React.Fragment>
	);
};

export default Spinner;
