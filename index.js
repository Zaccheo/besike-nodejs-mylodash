
var _= {
	once:function(fn){
		//判断是否执行过一次
		var invoked = false;
		var rst;//结果存放
		return function(){
			if(!invoked){
				rst = fn();//捕获方法并返回
				invoked = true;//已经执行
			}
			return rst;
		}
	},

	/*
	*function foo(arg){
	* return something;
	*}
	*memoFoo = _.memoize(foo);
	*memoFoo(1); calls and remembers foo(1)
	*memoFoo(2); calls and remembers foo(2)
	*/ 
	memoize:function(fn,func){
		//console.log(func()); //func()
		var cache = {};//缓存对象
		return function(val){

			var key = fn.name+val;//把方法名字和参数作为key值identity1
			
			//判断是否存在func，==>user1=[1,"Howard"];
			if(func){
				var key = "cache_key"+func(val);//始终返回user1[0] === 1
				// key === 1;
			}

			if(!cache.hasOwnProperty(key)){
				//判断不存在val键值的情况，则赋给相应的val，为fn计算的值n
				cache[key] = fn(val);//identity传递的参数1生成的返回值作为value
			}
			console.log(cache);
			return cache[key];
		}
	},


	//第三题,ctx调用bind函数的this上下文，obj传入的对象数据
	bind:function(ctx,obj){
		//console.log(obj.name);
		return function(){
			
			return ctx.call(obj);
		}
	}

};

module.exports = _;
