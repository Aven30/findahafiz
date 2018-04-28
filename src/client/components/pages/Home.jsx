import React from 'react'
import axios from "axios/index";
import {SessionProvider, SessionContext} from '../context/SessionContext'

async function getUser() {
    axios.get('/api/users/current');
}

const MyComp = (context) => {
    console.log(context);

    let name = context.state.user ? context.state.user.firstName : 'Guest';

    return <div>
        Hi {name}
    </div>
};

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div>Hello, {name}
            <SessionContext.Consumer>
                {context => <MyComp {...context}/>}
            </SessionContext.Consumer>
        </div>
    }
}

export default Home