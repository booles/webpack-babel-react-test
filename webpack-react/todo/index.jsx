var React = require('react');
var ReactDOM = require('react-dom');
import List from './main';
import Footer from './footer';
require('./css/base');
require('./css/index');

const ENTER_KEY = 13;

var extend = (...args) => {
			var newObj = {};
			for (var i = 0; i < args.length; i++) {
				var obj = args[i];
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						newObj[key] = obj[key];
					}
				}
			}
			return newObj;
		}



var app = {
	arr:[],
	addItem:function (data){
		data = {
			id:Date.now(),
			value:data,
			selected:false
		}
		app.arr = app.arr.concat(data);
		app.reRender()
	},
	reRender:function (){
		render();	
	},
	toggleAll:function (checked){
		app.arr.forEach((todo)=>{
			todo.selected = checked;
		});
		app.reRender();
	},
	toggle:function (id){
		app.arr.forEach((todo,index) => {
			todo.selected = todo.id === id ? !todo.selected : todo.selected;
		})
		app.reRender();
	},
	delectTodo:function (id){
		app.arr = app.arr.filter((todo,index) => {
			return todo.id !== id;
		})
		app.reRender();
	}
}

class Todo extends React.Component{
	render(){

		var footer,main,model = this.props.model;

		var selectedNum = model.reduce(function (num,todo){
				return todo.selected ? num : ++num; 
		},0);

		if( model.length ){
			footer = <Footer
				selectedNum={selectedNum}
			 />;
		}
		let newList = model.map((item,index)=>{
			return <List 
						key={index} 
						list={item}
						onToggle={this.toggle.bind(this,item.id)}
						onDelectTodo = {this.delectTodo.bind(this,item.id)}
				   />
		})
		if( model.length ){
			main = (
				 <section className="main">
				    <input
				    	className="toggle-all"
				    	type="checkbox"
				    	onChange={this.toggleAll} 
				    	checked={selectedNum === 0}
				    	
				    />
				    <ul className="todo-list">
				        {newList}
				    </ul>
				</section>
			)
		}

		return (
			<div>
				<header className="header" >
	                <h1>todos</h1>
	                <input 
	                	className="new-todo" 
	                	placeholder="请输入内容" 
	                	onKeyDown={this.keyDownAddItemHandle}
	                	defaultValue="123"
	                />
	            </header>
				{main}
				{footer}
			</div>
		)
	}

	keyDownAddItemHandle(ev){
		if( ev.keyCode === ENTER_KEY ){
			app.addItem(ev.target.value)
			ev.target.value = '';
		}
	}
	changeHandle(){
		console.log( 123 );
	}
	toggleAll(ev){
		app.toggleAll(ev.target.checked)
	}
	toggle(id){
		app.toggle(id)
	}
	delectTodo(id){
		app.delectTodo(id)
	}
}


var section = document.createElement('section');

section.className = "todoapp";

document.body.appendChild(section);

function render(){
	ReactDOM.render(<Todo model={app.arr} />,section);
}
render();



