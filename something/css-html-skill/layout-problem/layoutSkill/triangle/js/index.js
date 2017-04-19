var obj = document.getElementById("select"); //定位id
var index = obj.selectedIndex; // 选中索引
console.log(index)
var text = obj.options[index].text; // 选中文本
console.log(text)
var value = obj.options[index].value; // 选中值
// console.log(value);