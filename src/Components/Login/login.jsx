import React from 'react';
import "./login.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => {val.length > 0 && (valid = false);});
    return valid;
};

export default class Registration extends React.Component {

	constructor(props) {
		super(props);
        this.state = {

             email : null , 
             password : null ,

             errors : {
                email : "",
                password : "",
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
            case "email":
                errors.email = validEmailRegex.test(value) ? "" : "Email Id not valid" ;
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
                            name="email"
                            label="Username"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            helperText="Use EmailID or Mobile Number"
                            required
                            text-align="right"
                            value = {this.state.email}
                            onChange = {this.handleChange}
                        />
                        <div className="error">
                            { errors.email.length > 0 && (<span className="errorMessage">{errors.email}</span>)}
                        </div>
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
                            value = {this.state.password}
                            onChange ={this.handleChange}
                        />
                        <div className="error">
                            { errors.password.length > 0 && (<span className="errorMessage">{errors.password}</span>)}
                        </div>
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