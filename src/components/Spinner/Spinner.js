import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
	return (
		<React.Fragment>
			<img
				src={spinner}
				alt="Loading..."
				style={{
					width: "200px",
					position: "absolute",
					top: "45%",
					left: "50%",
					marginTop: "-50px",
					marginLeft: "-100px",
				}}
			/>
		</React.Fragment>
	);
};

export default Spinner;
