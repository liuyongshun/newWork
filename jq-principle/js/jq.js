// 一、最开始：
// var btn = document.getElementById('btn'),
//     content = document.getElementById('content');
// btn.onclick = function() {
//     content.style.display = 'none';
// };


// 二、觉得 document.getElementById太长封装一下。
// var $ = function(id) {
//     return document.getElementById(id);
// };
// $('btn').onclick = function() {
//     $('content').style.display = 'none';
// };


// ++++++++++++++++++++++认知new++++++++++++++++++++++++++
// 只要new表达式之后的constructor返回（return）一个引用对象（数组，对象，函数等），都将覆盖new创建的匿名对象，
// 如果返回（return）一个原始类型（无return时其实为return原始类型undefined），那么就返回new创建的匿名对象。
// new F()如果没有返回值(Undefined类型)，或返回值是5种基本型（Undefined类型、Null类型、Boolean类型、Number类型、String类型）之一，
// 则new F()我们可以看成是原型扩展方法中的this; 如果返回是是数组啊、对象啊什么的，则返回值就是这些对象本身，此时new F() ≠ this。
// 举例说明：
// var F = function(id) {
//     return document.getElementById(id);
// };
// console.log(new F('content') == document.getElementById('content'));// true 说明看上去返回DOM对象，实际确实就是DOM对象
// var F = function(id) {
//     return id;
// };
// false 说明看上去返回字符串值，实际并不是字符串，因为return返回的不是引用对象(数组，对象，函数)，所以实际上new F('content')返回了F自己。
// console.log(new F('content') == 'content');
// ++++++++++++++++++++++认知结束+++++++++++++++++++++++++


// 三、觉得xxx.style.display太长封装一下。在F的原型上拓展方法,(创建对象，再new实例化，再调用)
// var F = function(id) {
//     this.tag = document.getElementById(id);
// };
// F.prototype.hide = function() {
//     console.log(this);
//     this.tag.style.display = 'none';
// };
// F.prototype.show = function() {
//     console.log(this);
//     this.tag.style.display = 'block';
// }
// // var f = new F('content')
// // f.hide()
// // f.show()
// new F('content').hide();


// 四、上面的方法，元素的获取直接在F方法中，同时方法私有，不能重利用。因此，可以把元素获取方法放在原型上，便于管理和重用。暴露与重用元素获取方法
// var F = function(id) {
//     return this.getElementById(id);
// };
// F.prototype.getElementById = function(id) {
//     console.log(this);
//     this.element = document.getElementById(id);
//     return this;
// };
// F.prototype.hide = function() {
//     this.element.style.display = 'none';
// };
// // new F('content').hide()
// // new F('content').hide();
// // console.log(new F('content'));
// // 不喜欢new，改进
// var $ = function(id) {
//     return new F(id);
// }
// $('content').hide();


// 五、不只用id还有class和tag 2、对于非ID的选择结果，还需要遍历添加事件
// F原型上的方法一、若不放在F内,方法内是无法访问F的变量的。
// var F = function(selector, context) {
//     // 不存在element属性
//     return this.init(selector,context);
//     // 存在element属性用下边
//     // return this.selectorElements(selector,context)
// }
// F.prototype.selectorElements = function(selector, context) {
//     var context = context || document;
//     this.element = context.querySelectorAll(selector);
//     // return this 返回对象本身，从而实现链式调用。
//     return this;
// }
// // 最外层封装 我不喜欢new bababa，太长。
// var $ = function(selector, context) {
//     return new F(selector, context);
// }

// // $("#content").element即是dom对象。
// // console.log($("#content").element)

// F.prototype.each = function(fn) {
//     // 若要完善用（去掉element属性）用这个代码，依赖于init和 F的this.init
//     var i=0, length = this.length;
//     for (; i<length; i+=1) {
//         fn.call(this[i], i);
//     }
//     // 保留element
//     // var i=0, length = this.element.length;
//     // for (; i<length; i+=1) {
//     //     fn.call(this.element[i], i);
//     // }

//     return this;
// }
// // fn是each方法的参数，然后把匿名函数当实际参数传入，就可以实现匿名函数对象的继承。
// // 从而fn的实际参数（匿名函数）的指向为this.elements[i](因为querySelector选择了多个，没一个对应继承，)在hide方法中就实现了对所有被选择的dom元素，添加style.display = "none";
// F.prototype.hide = function() {
//     this.each(function() {
//         // 这里的this指向dom对象。因为它在each中继承了this.element[i]
//         // console.log(this)
//        this.style.display = "none";
//     });
//     return this;
// };
// // $(".lll").hide();
// // $("#content").hide();
// F.prototype.init = function(selector, context) {
//     var nodeList = (context || document).querySelectorAll(selector);
//     this.length = nodeList.length;
//     for (var i = 0; i < this.length; i++) {
//         this[i] = nodeList[i]
//     }
//     return this;
// }


// 第五步基本上就是完整的jquery了。下面完善，首先觉得F不太好。那就用$.fn替换掉他。相当于F不再是单独的变量定义的了。而是$的一个方法。
// new 的是$.fn 所以this指向$.fn而不是$。
var $ = function(selector, context) {
    console.log(this)
    return new $.fn.init(selector, context);
}
$.fn = $.prototype;
$.fn.each = function(fn) {
    console.log(this)
    var i=0, length = this.length;
    for (; i<length; i+=1) {
        fn.call(this[i], i);
    }
    return this;
}
$.fn.hide = function() {
    // console.log(this)
    this.each(function() {
       this.style.display = "none";
    });
    return this;
};
$.fn.init = function(selector, context) {
    // console.log(this)
    var nodeList = (context || document).querySelectorAll(selector);
    this.length = nodeList.length;
    for (var i = 0; i < this.length; i++) {
        this[i] = nodeList[i]
    }
    return this;
}

$('.lll')









// var name = "window";
// function showName() {
//     console.log(this.name);
// }
// var person1 = {
//     name: "kxy",
//     sayName: showName
// }
// var person2 = {
//     name: "Jake",
//     sayName: function() {
//         var fun = person1.sayName;
//         fun();
//     }
// }
// person1.sayName();    //kxy
// person2.sayName();    //window
// 先看第一个执行语句：person1.sayName(); 首先确定这是方法调用模式，对象为person1，再看sayName被赋值为全局函数对象showName，
// 在showName执行时，this绑定的是person1，所以结果为”kxy”。

// 再看第二个执行语句：person2.sayName();这还是方法调用模式，对象为person2，调用的是它的sayName方法。
// 再看sayName函数体，发现函数体最终执行的函数是fun，fun是用函数调用模式调用的。
// 而fun最终也被赋值为showName函数，因为fun是用函数调用模式调用的，所以这里的this绑定为window，结果为”window“。
