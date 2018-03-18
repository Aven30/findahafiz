import React from 'react'
import SignUp from './partials/SignUp'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    DropdownItem } from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleMobileLinks = this.toggleMobileLinks.bind(this);
        this.toggleSignUp = this.toggleSignUp.bind(this);

        this.state = {
            showSignUpModal: false,
            showMobileLinks: false
        };
    }
    toggleSignUp() {
        this.setState({
            showSignUpModal: !this.state.showSignUpModal
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
                    <NavbarToggler onClick={this.toggleMobileLinks} />
                    <Collapse isOpen={this.state.showMobileLinks} navbar>
                        <Nav className="m-auto col-md-8" navbar>
                            <NavItem className="col-md-3">
                                <NavLink href="/find-a-hafiz/">Find A Hafiz</NavLink>
                            </NavItem>
                            <NavItem className="col-md-3">
                                <NavLink href="how-it-works">How It Works</NavLink>
                            </NavItem>
                            <NavItem className="col-md-3">
                                <NavLink href="faq">FAQ</NavLink>
                            </NavItem>
                            <NavItem className="col-md-1">
                                <NavLink href="Login">Login</NavLink>
                            </NavItem>
                            <NavItem className="col-md-2">
                                <NavLink onClick={this.toggleSignUp}>Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.showSignUpModal} toggle={this.toggleSignUp} className={this.props.className}>
                    <ModalHeader>Create An Account</ModalHeader>
                    <ModalBody>
                        <SignUp/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
// const Header = () => (
//     <header id="topHeader">
//         <nav>
//             <ul>
//                 <li><Link to='/find-a-hafiz'>Find A Hafiz</Link></li>
//                 <li><Link to='/how-it-works'>How It Works</Link></li>
//                 <li><Link to='/faq'>FAQ</Link></li>
//             </ul>
//         </nav>
//     </header>
// )
