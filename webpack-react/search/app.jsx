import React from 'react';
import SearchComponent from './search';
import ListComponent from './list';

class MainComponent extends React.Component{
	
	constructor(){
		super();
		
		this.state = {}
	}
	
	getValue(value){
		console.log(value);
	}
	
	render(){
		return (
			<div>
				<SearchComponent getValue={this.getValue} />
				<ListComponent />
			</div>
		)
	}
}


export default MainComponent; 

