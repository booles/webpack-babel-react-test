import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './app';

var divs = document.createElement('div');

document.body.appendChild(divs);

ReactDOM.render(<MainComponent />,divs)
