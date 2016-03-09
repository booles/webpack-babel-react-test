var React = require('react');
var ReactDOM = require('react-dom');
//import Hello from './hello';

var Hello1 = require('./hello').Hello;
console.log(Hello1);

//ReactDOM.render(<h1>hello world!</h1>,document.getElementById("demo"));
ReactDOM.render(
    <div>
        <Hello1 value="1234" />
        <Hello1 value="4567" />
     </div>,
    document.getElementById("demo")
);