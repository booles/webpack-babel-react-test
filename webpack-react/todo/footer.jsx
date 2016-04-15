var React = require('react');
export default class Footer extends React.Component{
	render(){
		return  <footer className="footer">
		            <span className="todo-count">
		            	<strong>{this.props.selectedNum}</strong>
		            	<span>条未选中</span>
		            </span>
		            <ul className="filters">
		                <li><a href="#/" className="selected">所有项</a></li>
		                <li><a href="#/active" className="">未选中项</a></li>
		                <li><a href="#/completed" className="">选中项</a></li>
		            </ul>
		            <button className="clear-completed">清除选中项</button>
	            </footer>
	}
}
