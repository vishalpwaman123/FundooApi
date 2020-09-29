import React from 'react';
import "./login.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Registration extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="loginMainContainer" >
				<div className="loginContainer" >
					<div className="loginfundoofont" align="center">
                            <span class="f">F</span>
                            <span class="u">u</span>
                            <span class="n">n</span>
                            <span class="d">d</span>
                            <span class="o">o</span>
                            <span class="o1">o</span>
                    </div>
					<p className="logintitle" align="center">
						Sign in
					</p>
					<p className="loginSubTitle" align="center">
						Use your Google Account
					</p>
					<div className="textField1">
						<TextField
                            fullWidth
                            type="email"
                            name="Username"
                            label="Username"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use EmailID or Mobile Number"
                            required
                            text-align="right"
                        />
					</div>
					<div className="textField2">
                        <TextField
                            name="password"
                            label="Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                            required
                        />
                    </div>
                    <div className="buttonContainer">
                    	<div className="Lbutton1">
                    		<Button color="primary"><span class="CreateAccount">Create account</span></Button>
                    	</div>
                    	
                    	<div className="Lbutton2">
                    		<Button
                                variant="contained"
                                color="primary"
                                className="btn">
                                Sign in
                            </Button>
                    	</div>
                    </div>		
				</div>
			</div>	
			);
	}
}