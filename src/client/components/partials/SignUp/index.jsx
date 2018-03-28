import React from 'react'
import Entry from './Entry'
import Identity from './Identity'
import SignUpForm from './SignUpForm'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.state = {step: 0, childProps: {}}
    }

    nextStep(props) {
        this.setState({
            step: this.state.step + 1,
            childProps: props
        })
    }

    render() {
        const steps = [
            Entry,
            Identity,
            SignUpForm
        ];

        const Display = steps[this.state.step];
        const childProps = this.state.childProps;

        return <Display {...childProps} nextStep = {this.nextStep}/>
    }
}

export default SignUp