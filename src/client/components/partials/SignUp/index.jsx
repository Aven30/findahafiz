import React from 'react'
import Entry from './Entry'
import Identity from './Identity'
import SignUpForm from './SignUpForm'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.state = {step: 0}
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1
        })
    }

    render() {
        const steps = [
            Entry,
            Identity,
            SignUpForm
        ];

        const Display = steps[this.state.step];

        return <Display nextStep = {this.nextStep}/>
    }
}

export default SignUp