import React from 'react'
import { Link } from 'react-router-dom'
import {Tooltip} from 'reactstrap'

const Header = () => (
    <header className="test">
        <nav>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                {/*<li><Link to='/roster'>Roster</Link></li>*/}
                {/*<li><Link to='/schedule'>Schedule</Link></li>*/}
            </ul>
        </nav>
        <p>
            This is a <a href="#" id="TooltipExample">tooltip</a> example.
        </p>
    </header>
)

export default Header