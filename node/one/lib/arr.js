var arr = [
	"this index is 0",
	"this index is 1",
	"this index is 2",
	"this index is 3",
	"this index is 4"
]

// 如果你想让一个东西在模块外可见，必须把它加到exports 上。在模块外可以访问到getArr函数。但数组是隐藏的。
exports.getArrs = function() {
	var idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}