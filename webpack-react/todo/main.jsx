var React = require('react');
import classNames from './classNames';


export default class List extends React.Component {
	render(){
		return  <li className={classNames({
					completed: this.props.list.selected,
					editing: this.props.editing
				})}>
		            <div className="view">
		                <input className="toggle" type="checkbox" 
		               		checked={this.props.list.selected}
		               		onChange={this.props.onToggle}
		                />
		                <label>{this.props.list.value}</label>
		                <button className="destroy" onClick={this.props.onDelectTodo}></button>
		            </div>
		            <input className="edit" defaultValue={this.props.list.value} />
		        </li>
	}
}