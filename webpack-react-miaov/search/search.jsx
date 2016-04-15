import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchComponent extends React.Component{
	constructor() {
	    super();    
	    this.clickHandle = this.clickHandle.bind(this);
	    this.nums = 0;
	    this.state = {num:0}
	}
	render(){
		return (
			<div>
				<input ref='sech_text' type='text' />
				<input type='button' onClick={this.clickHandle} value='添加' />
				{this.state.num}
			</div>
		)
	}
	
	clickHandle(){
		
		var val = ReactDOM.findDOMNode(this.refs.sech_text).value;
		this.setState({num:this.nums++});
		
		this.props.getValue(val);
		
	}
}
