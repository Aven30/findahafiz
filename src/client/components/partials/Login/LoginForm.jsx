import React from 'react';
import {Form, FormGroup, Input, Label, Button, Alert} from 'reactstrap';
import validator from 'validator';
import axios from 'axios'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            },
            errors: {
                email: false,
                password: false
            },
            serverMessage: '',
            showSuccess: false
        };

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setEmail(e) {
        let formState = this.state.form;
        formState.email = e.target.value;
        this.setState({form: formState});
    }

    setPassword(e) {
        let formState = this.state.form;
        formState.password = e.target.value;
        this.setState({form: formState});
    }

    handleSubmit(e) {

        console.log(this.state.form);
        let errors = {email: false, password: false};
        errors.email = !validator.isEmail(this.state.form.email);
        errors.password = validator.isEmpty(this.state.form.password);

        this.setState({
            errors: {...errors}
        });

        if (!errors.email && !errors.password) {
            this.submit();
        }
    }

    submit() {
        let data = {email: this.state.form.email, password: this.state.form.password};
        axios.post('/api/users/login', {data: data}).then(res => {
            this.setState({ showSuccess: true });
        }).catch(err => {
            console.log(err);
            this.setState({ serverMessage: err.response.data });
        });
    }

    render() {

        const dangerAlert = this.state.serverMessage.length > 0 ? (
            <Alert color="danger">
                {this.state.serverMessage}
            </Alert>
        ) : '';

        if (this.state.showSuccess) {
            return <Alert color="success">
                Thank you for signing in!
            </Alert>
        } else {
            return <Form>
                {dangerAlert}
                <FormGroup>
                    <Label for="signin-email" className="mb-0">Email</Label>
                    <Input type="email" name="email" id="signin-email"
                           className={this.state.errors.email ? 'is-invalid' : ''}
                           onChange={this.setEmail}/>
                    <span className="invalid-feedback">Invalid Email</span>
                </FormGroup>
                <FormGroup>
                    <Label for="signin-password" className="mb-0">Password</Label>
                    <Input type="password" name="password" id="signin-password"
                           className={this.state.errors.password ? 'is-invalid' : ''}
                           onChange={this.setPassword}/>
                    <span class="invalid-feedback">Invalid Password</span>
                </FormGroup>
                <Button block onClick={this.handleSubmit}>Submit</Button>
            </Form>
        }
    }
}

export default LoginForm;