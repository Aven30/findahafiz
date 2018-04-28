import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const commonLinks = (<React.Fragment>
                <NavItem className="col-md-3">
                    <NavLink href="/find-a-hafiz/">Find A Hafiz</NavLink>
                </NavItem>
                <NavItem className="col-md-3">
                    <NavLink href="how-it-works">How It Works</NavLink>
                </NavItem>
                <NavItem className="col-md-3">
                    <NavLink href="faq">FAQ</NavLink>
                </NavItem>
            </React.Fragment>
        );

        if (this.props.context.state.user) {
            return (
                <Nav className="m-auto col-md-8" navbar>
                    {commonLinks}
                    <NavItem className="col-md-1">
                        <NavLink onClick={this.props.toggleLogin}>Hi {this.props.context.state.user.firstName}</NavLink>
                    </NavItem>
                    <NavItem className="col-md-2">
                        <NavLink onClick={this.props.logout}>Logout</NavLink>
                    </NavItem>
                </Nav>
            )
        }
        else {
            return (
                <Nav className="m-auto col-md-8" navbar>
                    {commonLinks}
                    <NavItem className="col-md-1">
                        <NavLink onClick={this.props.toggleLogin}>Login</NavLink>
                    </NavItem>
                    <NavItem className="col-md-2">
                        <NavLink onClick={this.props.toggleSignUp}>Sign Up</NavLink>
                    </NavItem>
                </Nav>)
        }
    }
}

module.exports = NavBar;