import React from 'react';
import ReactDOM from 'react-dom';
var List = require('./list').List;
class Hello extends React.Component{
				render(){
					return (
						<div>
							<h1>hello!</h1>
							<List />
						</div>
						
					)
				}
			};



export {Hello};

