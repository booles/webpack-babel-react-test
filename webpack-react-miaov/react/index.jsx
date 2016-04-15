var React = require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('./search');
require('./css/bootstrap')
require('./css/docs.min')
var HelloComponent = React.createClass({
	render:function (){
		return (
			<div>
				<input onClick={this.changeDiv} type="button" value="按钮" />
				<div ref="changediv" style={{width:"100px",height:"100px",background: "red",transition: "1s"}}>
				</div>
			</div>
		)		
	},
	changeDiv:function (){
		/*console.log( this.refs.changediv );
		console.log( ReactDOM.findDOMNode(this.refs.changediv) );*/	
		this.refs.changediv.style.width = "200px";
	}
});



var demo = document.createElement('div');

document.body.appendChild(demo);

ReactDOM.render(<HelloComponent />,demo);



