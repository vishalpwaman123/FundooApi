import React from 'react';
import "./resetpassword.scss";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import userService from '../../Services/userServices';

const User_service = new userService();

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => { val.length > 0 && (valid = false); });
    return valid;
};


export default class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            password: null,
            passwordConfirm: null,

            errors: {

                password: "",
                passwordConfirm: "",

            },

            flags: {
                success: "",
                failed: "",
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        let flags = this.state.flags;
        let errors = this.state.errors;

        if (this.state.password == null) {
            errors.password = "Password required";
        }
        if (this.state.passwordConfirm == null) {
            errors.passwordConfirm = "Confirm Password required";
        }

        let token = this.props.match.params.token;
        localStorage.setItem('token', token);

        const user = {
            newPassword : this.state.password
        }

        console.log("Calling Api");
        User_service.resetPassword(user)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })


        if (validateForm(this.state.errors)) {

            flags.failed = "";
            flags.success = "Success";
            console.info('Valid Form')

        } else {
            flags.success = "";
            flags.failed = "Failed";
            console.error('Invalid Form')

        }

        this.setState({ flags }, () => console.log(this.state));
    }


    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "passwordConfirm":
                errors.passwordConfirm = value.length < 8 ? "Confirm Password not valid" : "";
                break;
            case "password":
                errors.password = value.length < 8 ? "Password Not valid" : "";
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value }, () => console.log(this.state));
    }

    render() {
        const { errors } = this.state;
        const { flags } = this.state;
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
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <div className="error">
                            {errors.password.length > 0 && (<span className="errorMessage">{errors.password}</span>)}
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
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                        />
                        <div className="error">
                            {errors.passwordConfirm.length > 0 && (<span className="errorMessage">{errors.passwordConfirm}</span>)}
                        </div>
                    </div>
                    <div className="buttonContainer">


                        <div className="Lbutton2">
                            <Button
                                variant="contained"
                                color="primary"
                                className="btn"
                                onClick={this.handleSubmit}>
                                Reset
                            </Button>
                        </div>
                    </div>

                    <div className="AlertMessage">
                        <div className="successAlert">
                            {flags.success.length > 0 && this.state.password != null && (
                                <Alert severity="success">
                                    <AlertTitle><strong>SuccessFull</strong></AlertTitle>
                                </Alert>
                            )}
                        </div>
                        <div className="failedAlert">
                            {flags.failed.length > 0 && (
                                <Alert severity="error">
                                    <AlertTitle><strong>Failed</strong></AlertTitle>
                                </Alert>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}