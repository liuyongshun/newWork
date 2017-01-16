// function add(e) {
// 	with(document) {
// 		with(this) {
// 			console.log(e);
// 		}
// 	}
// }

// 跨浏览器事件添加移除
// element 是通过ID或者类名选择的元素，
// type是事件类型传click不能传onclick
// 要处理的事件，以往是匿名函数，为了能过移除事件，所以不能用匿名函数了。
var EventUtil = {
	addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent){
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},

	removeHandler: function(element, type, handler){
		if (element.removeEventListener){
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent){
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	}
};
// IIFE立即执行函数常用如下两种，作用创建私有变量防止变量污染。
(function() {
	var getElement = document.getElementById("eventObj");
	var oprate = function() {
		console.log("congrulation");
	};
	EventUtil.addHandler(getElement, "click", oprate);
})();
(function() {
	var getElement = document.getElementById("eventObj");
	var oprate = function() {
		console.log("congrulation");
	};
	EventUtil.addHandler(getElement, "click", oprate);
}());


// 闭包，一是读取函数内部变量（利用函数内的函数访问，在return返回）；二是是变量保存在内存里。
function add() {
	var i = 0;
	console.log(i++);
}
add();
add();

function f1(){
	var i = 0;
	return function() {
		console.log(i++);
	};
}
var f2 = f1();
f2();
f2();
f2();