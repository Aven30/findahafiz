import React, { Component } from "react";
import ReactDOM from "react-dom";
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <form id="article-form">
            </form>
        );
    }
}
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
export default FormContainer;