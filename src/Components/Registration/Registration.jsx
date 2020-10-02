import React from 'react';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import logo from "../../Asserts/logoRegister.svg";
import "./Registration.scss";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Snackbar from '@material-ui/core/Snackbar';
//import Alert from '@material-ui/lab/Alert';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import userService from '../../Services/userServices';

const User_service = new userService();

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => { val.length > 0 && (valid = false);});
    return valid;
};

export default class Registration extends React.Component {

	constructor(props){
		super(props);
		this.state = {

            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirmPassword: null,
            
            errors: {

                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            },

            flags : {
                success : "",
                failed : "",
            }
		}
	}

    handleSubmit = event => {
        event.preventDefault();
        let flags = this.state.flags;
        if (validateForm(this.state.errors)) {
            
            flags.failed = "";
            flags.success = "Success";
            console.info('Valid Form')

            if(this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.email.length === 0 || this.state.password.length === 0 || this.state.confirmPassword.length === 0) {
                return null;
            }else
            {
                const user = {
                    firstName : this.state.firstName,
                    lastName :this.state.lastName,
                    email : this.state.email,
                    password : this.state.password,
                    /*confirmPassword : this.state.confirmPassword,*/
                    service : "Advance",
                };

                if (this.state.password === this.state.confirmPassword) {
                    console.log("Calling Api");
                    User_service.registration(user)
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
            }

        }else
        {
            flags.success = "";
            flags.failed = "Failed";
            console.error('Invalid Form')
        }

        this.setState( { flags }, ()=> console.log(this.state));
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "firstName":
                errors.firstName = value.length < 3 ? "First Name is not valid" : "" ;
                break;
            case "lastName":
                errors.lastName = value.length < 3 ? "Last Name is not valid" : "" ;
                break;
            case "email":
                errors.email = validEmailRegex.test(value) ? "" : "Email Id not valid" ;
                break;    
            case "password":
                errors.password = value.length < 8 ? "Password Not valid" : "" ;
                break;
            case "confirmPassword":
                errors.confirmPassword = value.length < 8 ? "Confirm password not valid" : "" ;
                break;

            default:
                break;        
        }

            this.setState( { errors, [name]: value}, ()=> console.log(this.state));
    }

	render(){
        const { errors } = this.state;
        const { flags } = this.state;
		return(
			<div className="mainContainer">
                <div className="bodyContainer">
                    <div className="registrationContainer">
                        <div className="fundoofont">
                            <span class="f">F</span>
                            <span class="u">u</span>
                            <span class="n">n</span>
                            <span class="d">d</span>
                            <span class="o">o</span>
                            <span class="o1">o</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
            				<div className="textFieldBody">
                                <p className="p1">Create your Fundoo Account</p> <br />
                                    <div className="text">
                                        <div className="text1">
                                            <div className="textRow1">
                                                <TextField
                                                    name="firstName"
                                                    label="First name"
                                                    id="outlined-size-small"
                                                    variant="outlined"
                                                    size="small"
                                                    value={this.state.firstName}
                                                    onChange = {this.handleChange}
                                                    required
                                                />
                                                <div className='error'>
                                                    { errors.firstName.length > 0 && (<span className='errorMessage'>{errors.firstName}</span>)}
                                                </div>
                                            </div>
                                            <div className="textRow2">
                                                <TextField
                                                  	name="lastName"
                                                    label="Last name"
                                                    id="outlined-size-small"
                                                    variant="outlined"
                                                    size="small"
                                                    value={this.state.lastName}
                                                    onChange = {this.handleChange}
                                                    required

                                                />
                                                <div className='error'>
                                                    { errors.lastName.length > 0 && <span className='errorMessage'>{errors.lastName}</span>}
                                                </div>
                                            </div>
                                        </div>
                                            <div className="textColumn2">
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
                                                    placeholder="@gmail.com"
                                                    text-align="right"
                                                    value={this.state.email}
                                                    onChange = {this.handleChange}
                                                />
                                                <div className='error'>
                                                    { errors.email.length > 0 && <span className='errorMessage'>{errors.email}</span>}
                                                </div>
                                          	</div>
                                            <div className="text3">
                                                <div className="textRow1">
                                                    <TextField
                                                        label="Password"
                                                        name="password"
                                                        type="password"
                                                        id="outlined-size-small"
                                                        variant="outlined"
                                                        size="small"
                                                        value={this.state.password}
                                                        onChange = {this.handleChange}
                                                        required
                                             		/>
                                                    <div className='error'>
                                                    { errors.password.length > 0 && <span className='errorMessage'>{errors.password}</span>}
                                                </div>
                                                </div>
                                                <div className="textRow2">
                                                    <TextField
                                                        label="Confirm Password"
                                                        type="password"
                                                        name="confirmPassword"
                                                        id="outlined-size-small"
                                                        variant="outlined"
                                                        size="small"
                                                        value={this.state.confirmPassword}
                                                        onChange = {this.handleChange}
                                                        required
                                                    />
                                                    <div className='error'>
                                                    { errors.confirmPassword.length > 0 && <span className='errorMessage'>{errors.confirmPassword}</span>}
                                                </div>
                                                </div>
                                            </div>
                                            <p className="passwordHint">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                                                <div className="button">
                                                    <div className="button1">
                                                        <Button variant="link">Sign in instead</Button>
                                                        
                                                    </div>

                                                    <div className="button2">
                                                        <Button variant="primary" onClick={this.handleSubmit}>Register</Button>{' '}
                                                        
                                                    </div>
                                                </div>
                                    </div>
                            </div>
                        </form>    
                    </div>    
                    <div className="sideImageBox">
                        <div className="figureBox">
                            <div className="image">
                                <img src={logo} class="tempimage" alt="Temperature"/>   
                                <figcaption className="figCaption">
                                    One account. All of Fundoo working for you.
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="AlertMessage">
                        <div className="successAlert">
                                { flags.success.length > 0 && flags.success.length === 0 && (
                                    <Alert severity="success">
                                    <AlertTitle>Success</AlertTitle>
                                        This is a success alert — <strong>check it out!</strong>
                                    </Alert>
                                    )}
                        </div>
                        <div className="failedAlert">
                                { flags.failed.length > 0 && (
                                    <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                        This is a error alert — <strong>check it out!</strong>
                                    </Alert>

                                    )}
                        </div>
                    </div>  
            </div>
			);
	}
}