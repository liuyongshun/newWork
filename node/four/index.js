// console.log(module.paths);
// anteher.js将内容写到require的extessions上。
console.log(require.extensions);
// 文件越深，加载越慢
// [ 'E:\\git\\newWork\\node\\four\\node_modules',
  // 'E:\\git\\newWork\\node\\node_modules',
  // 'E:\\git\\newWork\\node_modules',
  // 'E:\\git\\node_modules',
  // 'E:\\node_modules' ]

  // 2 文件拓展名分析
  // node会按照.js、.json、.node顺序补足拓展名，依次尝试。尝试过程中调用fs同步阻塞式地判断文件是否存在，存在性能消耗，所以.node和.json文件，在传递require()时带着拓展名。

  // 3目录分析和包
	// require()通过分析文件拓展名，没得到文件，而得到一个目录，此时node会将其当作包处理。在这过程中，Node在当前目录下查找package.json（CommonJS包规范定义的包描述文件），通过JSON.parse () 解析出包描述对象，
	// 从中取出main属性制定文件名进行定位，如果缺少拓展名，将进入拓展名分析，如果main属性制定文件错误，或者没有package.json，node将index作为默认文件。一次查找index.js、index.json、index.node。
	// 如果目录分析没有定位成工，则自定义模块进入下一个模块路径查找，直到都遍历。

	// 4.模块编译   ；node每个模块都是一个对象。
	// function Module(id, parent) {
	// 	this.id = id;
	// 	this.exports = {};
	// 	this.parent = parent;
	// 	if (parent && parent.children) {
	// 		parent.children.push(this);
	// 	}
	// 	this.filename = null;
	// 	this.loaded = false;
	// 	this.children = [];
	// }

