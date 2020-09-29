import React from 'react';
import "./resetpassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Registration extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="resetMainContainer" >
				<div className="resetContainer" >
					<div className="resetfundoofont" align="center">
                            <span class="f">F</span>
                            <span class="u">u</span>
                            <span class="n">n</span>
                            <span class="d">d</span>
                            <span class="o">o</span>
                            <span class="o1">o</span>
                    </div>
					<p className="resettitle" align="center">
						Account recovery
					</p>
					<p className="resetSubTitle" align="center">
						Use your Google Account
					</p>
					<div className="textField1">
						<TextField
                            fullWidth
                            type="email"
                            name="Username"
                            label="Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="medium"
                            required
                            text-align="right"
                        />
					</div>
					<div className="textField2">
                        <TextField
                            name="password"
                            label="Confirm Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="medium"
                            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                            required
                        />
                    </div>
                    <div className="buttonContainer">
                
                    	
                    	<div className="Lbutton2">
                    		<Button
                                variant="contained"
                                color="primary"
                                className="btn">
                                Reset
                            </Button>
                    	</div>
                    </div>		
				</div>
			</div>	
			);
	}
}