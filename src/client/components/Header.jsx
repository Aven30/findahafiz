import React from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';
import {SessionProvider, SessionContext} from './context/SessionContext'
import UserHeader from './partials/UserHeader';
import NavBar from './partials/NavBar';
import axios from 'axios'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleMobileLinks = this.toggleMobileLinks.bind(this);
        this.toggleSignUp = this.toggleSignUp.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            showSignUpModal: false,
            showLoginModal: false,
            showMobileLinks: false
        };
    }

    logout() {
        axios.post('/api/users/logout', null).then((msg) => {
            console.log('Logged out '+msg);
        }).catch(console.warn);
    }

    toggleSignUp() {
        this.setState({
            showSignUpModal: !this.state.showSignUpModal
        });
    }


    toggleLogin() {
        this.setState({
            showLoginModal: !this.state.showLoginModal
        });
    }

    toggleMobileLinks() {
        this.setState({
            showMobileLinks: !this.state.showMobileLinks
        })
    }

    render() {
        return (
            <div id="topHeader">
                <Navbar color="faded" dark expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggleMobileLinks}/>
                    <Collapse isOpen={this.state.showMobileLinks} navbar>
                        <SessionContext.Consumer>
                            {context => (<NavBar context={context} showLoginModal={this.state.showLoginModal}
                                                 showSignUpModal={this.state.showSignUpModal} logout={this.logout}
                                                 toggleSignUp={this.toggleSignUp} toggleLogin={this.toggleLogin}/>)}
                        </SessionContext.Consumer>
                    </Collapse>
                </Navbar>
                <SessionContext.Consumer>
                    {context => (<UserHeader showLoginModal={this.state.showLoginModal}
                                             showSignUpModal={this.state.showSignUpModal}
                                             toggleSignUp={this.toggleSignUp} toggleLogin={this.toggleLogin}/>)}
                </SessionContext.Consumer>
            </div>
        );
    }
}