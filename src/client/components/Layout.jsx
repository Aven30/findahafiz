import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import FindAHafiz from './pages/FindAHafiz'
import HowItWorks from './pages/HowItWorks'
import Faq from './pages/Faq'

import '../sass/main.scss'

const Layout = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/find-a-hafiz' component={FindAHafiz}/>
            <Route path='/how-it-works' component={HowItWorks}/>
            <Route path='/faq' component={Faq}/>
        </Switch>
    </main>
)

export default Layout