import React from 'react';
import { Alert } from 'reactstrap';
import axios from 'axios'
import FormDetails from './FormDetails';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {showSuccess: false, serverMessage: ''};
        this.submit = this.submit.bind(this);
    }


    submit(formData) {
        let data = {...formData, is_hafiz: this.props.accountType};

        axios.post('/api/users', {'data': data}).then(res => {
            this.setState({showSuccess: true,serverMessage: ''});
        }).catch(err => {
            this.setState({serverMessage: err.response.data});
        });
    }

    render() {

        if (this.state.showSuccess) {
            return <Alert color="success">
                You have successfully registered!
            </Alert>
        } else {
            return <FormDetails serverMessage={this.state.serverMessage} submit={this.submit}/>
        }
    }
}

export default SignUpForm;