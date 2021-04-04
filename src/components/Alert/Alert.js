import React from "react";

const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className="alert alert-danger">
				<i className="fas fa-info-circle m" />
				{alert}
			</div>
		)
	);
};

export default Alert;
