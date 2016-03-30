var React = require('react');
var ReactDOM = require('react-dom');

var LiComponent = React.createClass({
	getInitialState:function(){
		return {
			isStyle:false
		}
	},
	render:function (){
		
		return (
			<li 
				className={this.state.isStyle?'red':''}
				onMouseEnter={this.overHandle}
				onMouseLeave={this.outHandle}
			>
				<span>{this.props.innerText}</span>
				<a onClick={this.props.onDelectItem} href="javascript:;">删除</a>
			</li>
		)	
	},
	overHandle:function (){
		this.setState({isStyle:true})	
	},
	outHandle:function (){
		this.setState({isStyle:false})
	}
})


var HelloComponent = React.createClass({
	getInitialState:function (){
		return {
			list:[1,2,3,4]
		}		
	},
	render:function (){

		var arr = this.state.list.map(function (item,index){
			return <LiComponent 
					key={index}
					innerText={item}
					onDelectItem={this.delectItem.bind(this,item)}
					/>	
		},this);

		return (
			<div>
				<input type='text' ref="sch_text" />
				<input type='button' value="提交" onClick={this.searchHandle} />
				<ul>
					{arr}
				</ul>
			</div>
			
		)
	},
	searchHandle:function (){
		var val = this.refs.sch_text.value;
		if(val === "") return;
		this.state.list.push(val)
		this.setState({list:this.state.list})
	},
	delectItem:function (data){
		var newArr = this.state.list.filter(function (item){
			return data !== item;
		});
		console.log( newArr );
		this.setState({list:newArr});
	}
});

module.exports = HelloComponent;