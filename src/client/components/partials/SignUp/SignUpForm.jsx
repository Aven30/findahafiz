import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return <Form>
            <FormGroup>
                <Label for="signup-email" className="mb-0">Email</Label>
                <Input type="email" name="email" id="signup-email"/>
            </FormGroup>
            <FormGroup>
                <Label for="signup-password" className="mb-0">Password</Label>
                <Input type="password" name="password" id="signup-password"/>
            </FormGroup>
            <FormGroup className="row">
                <div className="col-md-6">
                    <Label for="signup-email" className="mb-0">First name</Label>
                    <Input type="email" name="email" id="signup-email"/>
                </div>
                <div className="col-md-6">
                    <Label for="signup-email" className="mb-0">Last name</Label>
                    <Input type="email" name="email" id="signup-email"/>
                </div>
            </FormGroup>
            <Button block>Submit</Button>
        </Form>
    }
}

export default SignUpForm