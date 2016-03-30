var React = require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('./search');
require('./app')
var HelloComponent = React.createClass({
	render:function (){
		return (
			<div>
				<SearchComponent />
			</div>
		)		
	}
})



var demo = document.createElement('div');

document.body.appendChild(demo);

ReactDOM.render(<HelloComponent />,demo);



