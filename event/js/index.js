// 利用with延长作用链接
// function add(e) {
// 	with(document) {
// 		with(this) {
// 			console.log(e);
// 		}
// 	}
// }

// ============================跨浏览器事件===============================
// element 是通过ID或者类名选择的元素，
// type是事件类型传click不能传onclick
// 要处理的事件，以往是匿名函数，为了能过移除事件，所以不能用匿名函数了。
var allEvent = {
	addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent){
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	// 兼容IE的事件对象  
	// 注意：该处的event并不是事件对象，只是一个参数(只有触发事件的函数的event才是事件对象。因为触发DOM上的某个事件时，会产生一个事件对象event )。
	// 
	getEvent: function(event){
		return event ? event : window.event;
	},
	// 获取target当前实际被点击元素
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	// 阻止默认事件a连接或submit提交等
	preventDefault: function(event){
		if (event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
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
	},
	// 阻止冒泡或捕获
	stopPropagation: function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}		
};

// ==========================1. IIFE立即执行函数常用如下两种，作用创建私有变量防止变量污染。===========================
// (function() {
// 	var getElement = document.getElementById("eventObj");
// 	var oprate = function(e) {
// 		console.log(window);
// 	};
// 	EventUtil.addHandler(getElement, "click", oprate);
// })();
// (function() {
// 	var getElement = document.getElementById("eventObj");
// 	var oprate = function() {
// 		console.log("congrulation");
// 	};
// 	EventUtil.addHandler(getElement, "click", oprate);
// }());



// ========================2. 闭包，一是读取函数内部变量（利用函数内的函数访问，在return返回）；二是是变量保存在内存里。==================
// function add() {
// 	var i = 0;
// 	console.log(i++);
// }
// add();
// add();

// function f1(){
// 	var i = 0;
// 	return function() {
// 		console.log(i++);
// 	};
// }
// var f2 = f1();
// f2();
// f2();
// f2();


// ==========================3. 事件对象 target & currentTarget===========================================
// DOM事件。
// currentTarget always point this (event.currentTarget === this总是正确的)
// 如果直接将事件处理程序指定给了目标元素，则 this 、 currentTarget 和 target 包含相同的值。
// target指向实际被点击的元素（例子如下）。
// (function(){
// 	var sub = document.getElementById("sub");
// 	var parent = document.getElementById("parent");
// 	sub.onclick = function(event){
// 		console.log(event.eventPhase);
// 		// event.stopPropagation();		
// 		console.log(event.currentTarget === this); //true
// 		console.log(event.target === this); //true
// 	};
// 	parent.onclick = function(event) {
// 		console.log(event.eventPhase);
// 		console.log(event.currentTarget === parent); //true
// 		console.log(this === parent); //true
// 		// 事件处理程序加到了父元素，但是点击实际点击的子元素。所以target指向子元素（实际被点击的元素）。
// 		console.log(event.target === document.getElementById("sub")); //true	
// 	};	

// 	// 处理多个事件时，可以用event.type
// 	var handler = function(event){
// 		switch(event.type){
// 			case "click":
// 			alert("Clicked");
// 			break;
// 			case "mouseover":
// 			event.target.style.backgroundColor = "red";
// 			break;
// 			case "mouseout":
// 			event.target.style.backgroundColor = "";
// 			break;
// 		}
// 	};	
// }());

// 所有事件都有的属性
// preventDefault()            Function      只读          取消事件的默认行为(a或按钮，不组织冒泡和捕获事件会传递)。如果 cancelable 是true ，则可以使用这个方法
// currentTarget               Element       只读          其事件处理程序当前正在处理事件的那个元素
// target                      Element       只读          事件的目标
// type                        String        只读          被触发的事件的类型
// stopPropagation()           Function      只读          取消事件的进一步捕获或冒泡。如果bubbles为true，则可以使用这个方法
// bubbles                     Boolean       只读          表明事件是否冒泡
// cancelable                  Boolean       只读          表明是否可以取消事件的默认行为
// defaultPrevented            Boolean       只读          为true表示已经调用了preventDefault()（DOM3级事件中新增）
// detail                      Integer       只读          与事件相关的细节信息
// eventPhase                  Integer       只读          调用事件处理程序的阶段：1表示捕获阶段，2表示“处于目标”，3表示冒泡阶段
// stopImmediatePropagation()  Function      只读          取消事件的进一步捕获或冒泡，同时阻止任何事件处理程序被调用（DOM3级事件中新增）
// trusted                     Boolean       只读          为 true 表示事件是浏览器生成的。为 false 表示事件是由开发人员通过JavaScript创建的（DOM3级事件中新增）
// view                        AbstractView  只读          与事件关联的抽象视图。等同于发生事件的window 对象



// ============================4IE事件对象========================================================
// (function(){
// 	var sub = document.getElementById("sub");
// 	// DOM0 onclick 运行在当前作用域中，this 指向当前。
// 	sub.onclick = function(event){
// 		// DOM方式添加事件，IE下event是window属性，必须带有window才能访问。
// 		console.log(window.event.srcElement === this); 
// 		// this points sub
// 		console.log(this);

// 		console.log(window.event.srcElement);		
// 	};	

// 	// attachEvent 事件处理程序会在全局作用域中运行，this指向window
// 	sub.attachEvent("onclick", function(event){
// 		// event.srcElement 指向当前。等同于event而不是currentTarget
// 		console.log(event.srcElement === this);  //false
// 		// this points window
// 		console.log(this);
// 		// event.srcElement points sub
// 		console.log(window.event.srcElement);
// 	});	



// 	var parent = document.getElementById("parent");
// 	parent.onclick = function(event) {
// 		console.log(window.event.srcElement === this); 
// 		// event.srcElement 等同于target而不是currentTarget
// 		console.log(window.event.srcElement);
// 	};	
// 	parent.attachEvent("onclick", function(event) {
// 		console.log(event.srcElement === this); 
// 		console.log(window.event.srcElement);		
// 	})	
// }());
// IE下event都有的属性
// cancelBubble     Boolean     读/写    默认值为 false ，但将其设置为 true 就可以取消事件冒泡（与DOM中的 stopPropagation() 方法的作用相同）
// returnValue      Boolean     读/写    默认值为 true ，但将其设置为 false 就可以取消事件的默认行为（与DOM中的 preventDefault() 方法的作用相同）
// srcElement       Element     只读     事件的目标（与DOM中的 target 属性相同）
// type             String      只读     被触发的事件的类型



// ===============================5.事件类型=======================================
// HTML(DOM2中规定)事件,判断对dom2的支持
// var isSupported2 = document.implementation.hasFeature("HTMLEvents", "2.0");
// var isSupported3 = document.implementation.hasFeature("UIEvent", "3.0");
// var isSupported = document.implementation.hasFeature("FocusEvent", "3.0");
// DOM3 级事件的 feature 名是 "MouseEvent" ，而非 "MouseEvents" 。
// var isSupported = document.implementation.hasFeature("MouseEvents", "2.0");
// var isSupported = document.implementation.hasFeature("MouseEvent", "3.0");
// console.log(isSupported2);
// console.log(isSupported3);
// a. load(onloadd)事件
// 当页面完全加载后在 window 上面触发，当所有框架都加载完毕时在框架集上面触发。
// 当图像加载完毕时在 <img> 元素上面触发。
// 或者当嵌入的内容加载完毕时在 <object> 元素上面触发。

// b. abort事件
// 在用户停止下载过程时，如果嵌入的内容没有加载完，则在 <object> 元素上面触发。

// c. select事件
// 当用户选择文本框（ <input> 或 <texterea> ）中的一或多个字符时触发。

// d.  scroll事件
// 当用户滚动带滚动条的元素中的内容时，在该元素上面触发。 <body> 元素中包含所加载页面的滚动条。

// e.resize事件
// 当窗口或框架的大小变化时在 window 或框架上面触发。

// ==============================焦点事件=============================
// blur ：在元素失去焦点时触发。这个事件不会冒泡；所有浏览器都支持它。
// focus ：在元素获得焦点时触发。这个事件不会冒泡；所有浏览器都支持它。


// ====================鼠标事件==============================
// click ：在用户单击主鼠标按钮（一般是左边的按钮）或者按下回车键时触发。
// dblclick ：在用户双击主鼠标按钮（一般是左边的按钮）时触发。
// mousedown ：在用户按下了任意鼠标按钮时触发。不能通过键盘触发这个事件。
// mouseup ：在用户释放鼠标按钮时触发。不能通过键盘触发这个事件。
// mouseenter ：在鼠标光标从元素外部首次移动到元素范围之内时触发。这个事件不冒泡。而且在光标移动到后代元素上不会触发。
// DOM2 级事件并没有定义这个事件，但 DOM3 级事件将它纳入了规范。IE、Firefox 9+和 Opera 支持这个事件。
// mouseleave ：在位于元素上方的鼠标光标移动到元素范围之外时触发。这个事件不冒泡，而且在光标移动到后代元素上不会触发。
// DOM2 级事件并没有定义这个事件，但 DOM3 级事件将它纳入了规范。IE、Firefox 9+和 Opera 支持这个事件。
// mouseout ：在鼠标指针位于一个元素上方，然后用户将其移入另一个元素时触发。又移入的另
// 一个元素可能位于前一个元素的外部， 也可能是这个元素的子元素。 不能通过键盘触发这个事件。
// mouseover ：在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发。不能通过键盘触发这个事件。

// 在发生 mouseover 和 mouserout 事件时，还会涉及更多的元素。简单来说就是一个元素触发mouseover就会有别的触发mouseout（相关事件）。

// =================clientX,clientY；pageX,pageY=========================
// 鼠标事件都是在浏览器视口中的特定位置上发生的。这个位置（clientX,clientY；pageX,pageY）信息保存在 "事件对象"中。
// 改值只是视口，从左上角开始，不会遂滚动而改变，因此这个位置并不表示鼠标在页面上的位置。
// 在页面没有滚动的情况下， pageX 和 pageY 的值与 clientX 和 clientY 的值相等。
// =========clientX&clientY========
// var div = document.getElementById("sub");
// allEvent.addHandler(div, "click", function(event){
// 	event = allEvent.getEvent(event);
// 	console.log("pageX = " + event.clientX + "; pageY = " + event.clientY);
// });

// =======pageX&pageY========
// var div1 = document.getElementById("parent");
// allEvent.addHandler(div1, "click", function(event){
// 	event = allEvent.getEvent(event);
// 	alert("pageX = " + event.pageX + "; pageY = " + event.pageY);
// });
// IE8 及更早版本不支持事件对象上的页面坐标，不过使用客户区坐标和滚动信息可以计算出来。
// 这时候需要用到 document.body （混杂模式）或 document.documentElement （标准模式）中的scrollLeft 和 scrollTop 属性。
// var parent = document.getElementById("parent");
// allEvent.addHandler(parent, "click", function(e) {
// 	// 如果allEvent.getEvent(e)里的e换成event在firefox下是错的。因为该处的e是事件对象，作为实际参数传给了getEvent()方法。在上面getEvent()方法中event是形参。
// 	// 因为event只存在事件触发的过程中。在上边是个普通函数而不是事件触发函数。
// 	e = allEvent.getEvent(e);
// 	var pageX = e.pageX,
// 		pageY = e.pageY;

// 	if(pageX === undefined) {
// 		pageX = e.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
// 	} 

// 	if(pageY === undefined) {
// 		pageY = e.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
// 	}

// 	console.log("pageX = " + pageX +"; pageY = " + pageY);
// });

// // ==========screenX&screenY============
// var parent1 = document.getElementById("parent");
// allEvent.addHandler(parent1, "click", function(event){
// event = allEvent.getEvent(event);
// console.log("Screen coordinates: " + event.screenX + "," + event.screenY);
// });


// ============================修改键hiftKey、ctrlKey、altKey和metaKey===============
// 当某个鼠标事件发生时，通过检测这几个属性就可以确定用户是否同时按下了其中的键。
var parent3 = document.getElementById("parent");
allEvent.addHandler(parent3, "click", function(event){
	event = allEvent.getEvent(event);
	var keys = new Array();
	if (event.shiftKey){
		keys.push("shift");
	}
	if (event.ctrlKey){
		keys.push("ctrl");
	}
	if (event.altKey){
		keys.push("alt");
	}
	if (event.metaKey){
		keys.push("meta");
	}
	console.log("Keys: " + keys.join(","));
});
