import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {validateEmail, validateRequired} from '../../../utilities/validations'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputErrors: {
                emailError: false,
                firstNameError: false,
                lastNameError: false,
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkEmailValidation = this.checkEmailValidation.bind(this)
        this.clearErrors = this.clearErrors.bind(this)
    }

    handleSubmit(e) {
        console.log(this.props);
    }

    checkEmailValidation(e) {
        console.log(!validateEmail(e.target.value));
        this.setState({
            inputErrors: {
                emailError: !validateEmail(e.target.value)
            }
        })
    }

    checkFirstNameRequired() {

    }

    checkLastNameRequired() {

    }

    clearErrors() {
        this.setState({
            inputErrors: {
                emailError: false,
            }
        })
    }

    render() {

        let emailError = this.state.inputErrors.emailError;
        let firstNameError = this.state.inputErrors.firstNameError;
        let lastNameError = this.state.inputErrors.lastNameError;

        return <Form>
            <FormGroup>
                <Label for="signup-email" className="mb-0">Email</Label>
                <Input type="email" name="email" id="signup-email"
                       className={emailError ? 'is-invalid' : ''}
                       onBlur={this.checkEmailValidation} onChange={this.clearErrors}/>
                <span id="emailErrMsg" class="invalid-feedback">Invalid Email</span>
            </FormGroup>
            <FormGroup>
                <Label for="signup-password" className="mb-0">Password</Label>
                <Input type="password" name="password" id="signup-password"/>
            </FormGroup>
            <FormGroup className="row">
                <div className="col-md-6">
                    <Label for="signup-email" className="mb-0">First name</Label>
                    <Input type="text" className={emailError ? 'is-invalid' : ''} name="text" id="signup-email"/>
                </div>
                <div className="col-md-6">
                    <Label for="signup-email" className="mb-0">Last name</Label>
                    <Input type="text" className={emailError ? 'is-invalid' : ''} name="text" id="signup-email"/>
                </div>
            </FormGroup>
            <Button block onClick={this.handleSubmit}>Submit</Button>
        </Form>
    }
}

export default SignUpForm