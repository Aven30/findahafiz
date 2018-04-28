import React from 'react'
import axios from 'axios'

const SessionContext = React.createContext();

class SessionProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentWillMount() {
        axios.get('/api/users/current').then(user => {
            this.setState({
                user: user.data
            });
        });
    }

    render() {
        return (
            <SessionContext.Provider value={{state: this.state}}>
                {this.props.children}
            </SessionContext.Provider>
        )
    }
}

module.exports = {SessionProvider, SessionContext};