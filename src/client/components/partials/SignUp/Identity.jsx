import React from 'react'
import {Button} from 'reactstrap'

class Identity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Button onClick={() => this.props.nextStep({accountType: 'hafiz'})} color="primary" block>
                I'm a Hafiz
            </Button>
            <Button onClick={() => this.props.nextStep({accountType: 'notHafiz'})} color="primary" block>
                I want a Hafiz
            </Button>
        </div>
    }
}

export default Identity