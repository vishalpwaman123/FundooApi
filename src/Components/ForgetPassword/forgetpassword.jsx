import React from 'react';
import "./forgetpassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

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
        if (validateForm(this.state.errors)) {
            
            flags.failed = "";
            flags.success = "Success";
            console.info('Valid Form')

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
                        
                        <div className="Lbutton3">
                            <Button color="primary" href="/resetPassword"><span class="Forgetpassword">Forget password?</span></Button>
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
			</div>	
			);
	}
}