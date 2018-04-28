import React from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import SignUp from './SignUp/index'
import LoginForm from './Login/LoginForm'

class UserHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.props.showLoginModal} toggle={this.props.toggleLogin}
                       className={this.props.className}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <LoginForm/>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.props.showSignUpModal} toggle={this.props.toggleSignUp}
                       className={this.props.className}>
                    <ModalHeader>Create An Account</ModalHeader>
                    <ModalBody>
                        <SignUp/>
                    </ModalBody>
                </Modal>
            </React.Fragment>)

    }

}

module.exports = UserHeader;