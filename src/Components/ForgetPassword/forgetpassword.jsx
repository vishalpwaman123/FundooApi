import React from 'react';
import "./forgetpassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import userService from '../../Services/userServices';

const User_service = new userService();

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);

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

            errors : {

                email : "",
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
        let errors= this.state.errors;
        if ( this.state.email === null ) {
            errors.email = "Email Id Requred";
        }

        if (validateForm(this.state.errors)) {
            
            flags.failed = "";
            flags.success = "Success";
            console.info('Valid Form')
            if (this.state.email == null) {
                flags.success = "";
                flags.failed = "Failed";
                console.error("Invalid Form");
            }else {
                const user = {
                    email : this.state.email,
                }

                console.log("Calling Api");
                User_service.forget(user)
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                })
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
        const { name , value } = event.target;
        let errors = this.state.errors;

        if (validEmailRegex.test(value))
        {
            errors.email = "";
        }else
        {
            errors.email = "Email Id not valid";
        }

        this.setState( { errors , [name] : value }, ()=> console.log(this.state));
    }

	render() {
        const { errors } = this.state;
        const { flags } = this.state;
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
					
                    <form onSubmit={this.handleSubmit} >

                        <div className="textField1">
    						<TextField
                                fullWidth
                                type="email"
                                name="email"
                                label="Phone number or email"
                                id="outlined-size-small"
                                variant="outlined"
                                size="medium"
                                required
                                helperText="Use EmailID or Mobile Number"
                                text-align="right"
                                value = {this.state.email}
                                onChange = {this.handleChange}
                            />
                            <div className="error">
                                { errors.email.length > 0 && (<span className="errorMessage">{errors.email}</span>)}
                            </div>
    					</div>

                    </form>
					
                    <div className="buttonContainer">
                        
                        <div className="Fbutton1">
                            <Button
                                variant="contained"
                                color="primary"
                                href = "/login"
                                className="btn">
                                Back
                            </Button>
                        </div>
                        

                    	<div className="Lbutton2">
                    		<Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                                className="btn">
                                Next
                            </Button>
                       	</div>
                    </div>	
                    <div className="AlertMessage">
                        <div className="successAlert">
                                { flags.success.length > 0 &&  (
                                    <Alert severity="success">
                                    <AlertTitle><strong>Successfull</strong></AlertTitle>
                                    </Alert>
                                    )}
                        </div>
                        <div className="failedAlert">
                                { flags.failed.length > 0 && (
                                    <Alert severity="error">
                                    <AlertTitle><strong>Failed!</strong></AlertTitle>
                                    </Alert>
                                    )}
                        </div>
                    </div>	
				</div>
			</div>	
			);
	}
}