
class parents{
	static fn(){  //静态方法只能在当前的class中使用
		
	}
	constructor(){
		this.str = '123';
		console.log(this.str);
	}
}

class Point extends parents{
	constructor(x,y){
		super();  //子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
	}
	
	say(){
		console.log(super.fn);
	}
};

var P = new Point(1,2);



P.say();










