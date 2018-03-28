import React from 'react'
import {Button} from 'reactstrap'

const Entry = (props) => {
    return <div>
        <a href="/Login">Login</a> if you already have an account
        {/*<Button color="primary" size="lg" block>SIGN UP WITH FACEBOOK</Button>*/}
        {/*<Button color="primary" size="lg" block>SIGN UP WITH GMAIL</Button>*/}
        <Button color="primary" size="lg" onClick={ props.nextStep } block>SIGN UP WITH EMAIL</Button>
    </div>
}

export default Entry