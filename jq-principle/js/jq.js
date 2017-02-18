// var btn = document.getElementById('btn'),
//     content = document.getElementById('content');
// btn.onclick = function() {
//     content.style.display = 'none';
// };

// 封装选择器
// var $ = function(id) {
//     return document.getElementById(id);
// };
// $('btn').onclick = function() {
//     $('content').style.display = 'none';
// };

// 封装hide
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
// console.log(new F('content') == 'content');// false 说明看上去返回字符串值，实际并不是字符串
// ++++++++++++++++++++++认知结束+++++++++++++++++++++++++


// 初级
// var F = function(id) {    
//     this.tag = document.getElementById(id);
// };
// F.prototype.hide = function() {
//     console.log(this);
//     this.tag.style.display = 'none';
// };
// F.prototype.show = function() {
//     console.log(this);
// }
// new F('content').hide();
// 上面的方法，元素的获取直接在F方法中，同时方法私有，不能重利用。因此，可以把元素获取方法放在原型上，便于管理和重用。

// 改进
var F = function(id) {
    return this.getElementById(id);
};
F.prototype.getElementById = function(id) {
    console.log(this);
    this.element = document.getElementById(id);
    return this;
};
F.prototype.hide = function() {
    this.element.style.display = 'none';
};

// new F('content').hide(); 
console.log(new F('content'));

// 不喜欢new，改进
var $ = function(id) {
    return new F(id);
}
$('content').hide();