import {BrowserRouter} from 'react-router-dom'
import App from './components/App'
import React from 'react';
import {render} from 'react-dom';

render((
    < BrowserRouter >
    < App / >
    < /BrowserRouter>
), document.getElementById('container'));

console.log('hi');
