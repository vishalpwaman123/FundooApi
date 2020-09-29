import React from 'react';
import "./login.scss";

export default class Registration extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="loginMainContainer">
				<div className="loginContainer">
					<p class="title" align="center">
						Sign in
					</p>
				</div>
			</div>	
			);
	}
}