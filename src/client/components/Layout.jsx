import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

const Layout = () => (
    <main>
        <Switch>
            <Route exact path='/home' component={Home}/>
            {/*<Route path='/roster' component={Roster}/>*/}
            {/*<Route path='/schedule' component={Schedule}/>*/}
        </Switch>
    </main>
)

export default Layout