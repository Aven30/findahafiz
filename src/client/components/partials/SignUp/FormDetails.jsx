import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
var validator = require('validator');

class FormDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                email: '', password: '', firstName: '', lastName: ''
            },
            errors: {}
        };

        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateFields = this.validateFields.bind(this);
    }

    setEmail(e) {
        this.state.form.email = e.target.value;
    }

    setPassword(e) {
        this.state.form.password = e.target.value;
    }

    setFirstName(e) {
        this.state.form.firstName = e.target.value;
    }

    setLastName(e) {
        this.state.form.lastName = e.target.value;
    }

    checkEmail(e) {
        this.state.errors.email = !validator.isEmail(this.state.form.email);
        this.forceUpdate()
    }

    handleSubmit(e) {

        if (this.validateFields()) {
            this.props.submit({...this.state.form});
        }
    }

    validateFields() {

        let emailValid = validator.isEmail(this.state.form.email);
        let firstNameValid = !validator.isEmpty(this.state.form.firstName) && validator.isAlpha(this.state.form.firstName);
        let lastNameValid = !validator.isEmpty(this.state.form.lastName) && validator.isAlpha(this.state.form.lastName);
        let passwordValid = this.state.form.password.length >= 7;

        this.setState({
            errors: {
                email: !emailValid,
                firstName: !firstNameValid,
                lastName: !lastNameValid,
                password: !passwordValid
            }
        });

        return firstNameValid && lastNameValid && emailValid && passwordValid;
    }

    render() {

        const dangerAlert = this.props.serverMessage.length > 0 ? (
            <Alert color="danger">
                {this.props.serverMessage}
            </Alert>
        ) : '';


        return <Form>
            {dangerAlert}
            <FormGroup>
                <Label for="signup-email" className="mb-0">Email</Label>
                <Input type="email" name="email" id="signup-email"
                       onBlur={(e) => this.checkEmail(e)}
                       className={this.state.errors.email ? 'is-invalid' : ''}
                       onChange={this.setEmail}/>
                <span class="invalid-feedback">Invalid Email</span>
            </FormGroup>
            <FormGroup>
                <Label for="signup-password" className="mb-0">Password</Label>
                <Input type="password" name="password" className={this.state.errors.password ? 'is-invalid' : ''}
                       onChange={this.setPassword}
                       id="signup-password"/>
                <span class="invalid-feedback">Minimum 7 Characters Required</span>
            </FormGroup>
            <FormGroup className="row">
                <div className="col-md-6">
                    <Label for="signup-firstname" className="mb-0">First name</Label>
                    <Input type="text"
                           onChange={this.setFirstName}
                           className={this.state.errors.firstName ? 'is-invalid' : ''}
                           name="firstName" id="signup-email"/>
                    <span class="invalid-feedback">Required</span>
                </div>
                <div className="col-md-6">
                    <Label for="signup-lastname" className="mb-0">Last name</Label>
                    <Input type="text"
                           onChange={this.setLastName}
                           className={this.state.errors.lastName ? 'is-invalid' : ''}
                           name="lastName" id="signup-lastname"/>
                    <span class="invalid-feedback">Required</span>
                </div>
            </FormGroup>
            <Button block onClick={this.handleSubmit}>Submit</Button>
        </Form>
    }
}

export default FormDetails;