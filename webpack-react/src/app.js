var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list').List;
var Hello = React.createClass({
				render:function (){
					return (
						<div>
							<h1>hello!</h1>
							<List />
						</div>
						
					)
				}
			});



export {Hello};

