import React from 'react';
import "./resetpassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => {val.length > 0 && (valid = false);});
    return valid;
};


export default class Registration extends React.Component {

	constructor(props) {
		super(props);
        this.state = {

             password : null ,
             passwordConfirm : null,

             errors : {

                password : "",
                passwordConfirm : "",

             }
        }
	}

    handleSubmit = event => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {

        }
    }

    handleChange = event => {
        event.preventDefault();
        const { name , value } = event.target;
        let errors = this.state.errors;

        switch(name) {
            case "passwordConfirm":
                errors.passwordConfirm = value.length < 8 ? "Confirm Password not valid" : "" ;
                break;
            case "password":
                errors.password = value.length < 8 ? "Password Not valid" : "" ;
                break;
            default:
                break;
        }

            this.setState( { errors , [name] : value }, ()=> console.log(this.state));
    }

	render() {
        const { errors } = this.state;
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
                            name="password"
                            label="Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            required
                            text-align="right"
                            value = {this.state.password}
                            onChange = {this.handleChange}
                        />
                        <div className="error">
                            { errors.password.length > 0 && (<span className="errorMessage">{errors.password}</span>)}
                        </div>
					</div>
					<div className="textField2">
                        <TextField
                            name="passwordConfirm"
                            label="Confirm Password"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use 8 or more characters with a mix of letters, numbers & symbols"
                            required
                            value = {this.state.passwordConfirm}
                            onChange = {this.handleChange}
                        />
                        <div className="error">
                            { errors.passwordConfirm.length > 0 && (<span className="errorMessage">{errors.passwordConfirm}</span>)}
                        </div>
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