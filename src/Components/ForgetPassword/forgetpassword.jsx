import React from 'react';
import "./forgetpassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Registration extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="forgetMainContainer" >
				<div className="forgetContainer" >
					<div className="forgetfundoofont" align="center">
                            <span class="f">F</span>
                            <span class="u">u</span>
                            <span class="n">n</span>
                            <span class="d">d</span>
                            <span class="o">o</span>
                            <span class="o1">o</span>
                    </div>
					<p className="forgettitle" align="center">
						Find your Email
					</p>
					<p className="forgetSubTitle" align="center">
						Enter your phone number or recovery email
					</p>
					<div className="textField1">
						<TextField
                            fullWidth
                            type="email"
                            name="Username"
                            label="Phone number or email"
                            id="outlined-size-small"
                            variant="outlined"
                            size="medium"
                            required
                            text-align="right"
                        />
					</div>
					
                    <div className="buttonContainer">
                    
                    	<div className="Lbutton2">
                    		<Button
                                variant="contained"
                                color="primary"
                                className="btn">
                                Next
                            </Button>
                    	</div>
                    </div>		
				</div>
			</div>	
			);
	}
}