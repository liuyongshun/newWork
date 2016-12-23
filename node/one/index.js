// // 请求http服务
// var http = require('http');
// // 创建服务器，req请求（browser到server），res响应（反之）；listen监听端口号
// http.createServer(function(req,res){
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); 
//     res.end('Hello world!');
// }).listen(3000);
// console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
// =====================================
// app.use(function(req, res) {
//     res.type('text/plain');
//     res.status(404);
//     // send直接发送数据（字符串,布尔值，对象,数值会与res.status()冲突。）到html，在浏览器显示，再body里生成pre标签。
//     res.send("success");
// }) ;
// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.type('text/plain'); 
//     res.status(500);
//     res.send('500 - Server Error');
// });
// =====================================

// ============================================================================================

// var http = require('http'),
//     fs = require('fs');
//     // reuqire('fs')请求file System
//     function serveStaticFile(res, path, contentType, responseCode) {
//         if(!responseCode) responseCode = 200;
//         fs.readFile(__dirname + path, function(err,data) {
//         if(err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('500 - Internal Error');
//         } else {
//             res.writeHead(responseCode,
//             { 'Content-Type': contentType });
//             res.end(data);
//         }
//         });
//     }
// // 从 Node 开始 ｜ 15
// http.createServer(function(req,res){
//     // 规范化 url，去掉查询字符串、可选的反斜杠，并把它变成小写
//     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
//     switch(path) {
//     case '':
//     serveStaticFile(res, '/public/home.html', 'text/html');
//     break;
//     case '/about':  
//     serveStaticFile(res, '/public/about.html', 'text/html');
//     break;
//     case '/img/logo.jpg':
//     serveStaticFile(res, '/public/img/logo.jpg',
//     'image/jpeg');
//     break;
//     default:
//     serveStaticFile(res, '/public/404.html', 'text/html',
//     404);
//     break;
//     }
// }).listen(3000);
// console.log('Server started on localhost:3000; press Ctrl-C to terminate....');


// ==============really start==========================
var arrIn = [
	"hello",
	"nice",
	"to",
	"meat",
	"you"
]

// ===================package lead in====================
var express = require('express'),
	// 我们在模块名称前加了前缀 ./ 。这是告诉 Node，它不应该到 node_modules 目录中查找这个模块，如果我们忽略了这个前缀就会导致失败。默认去node_modules找。
	getArrsModule = require('./lib/arr.js'),
    app = express();
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' }); 

// =================config ===============================
app.engine('handlebars', handlebars.engine);
// 设置视图引擎
app.set('view engine', 'handlebars');  	
// 加载静态资源目录
app.use(express.static(__dirname + '/public'));
// 设置监听端口，可以不设置直接在liste()里监听
app.set('port', process.env.PORT || 3000);
// 中间件来检测查询字符串中的 test=1它必须出现在我们定义的所有路由之前,页面测试（mocha和chai断言库）
app.use(function(req, res, next){
	res.locals.showTests = app.get('env') !== 'production' &&
	req.query.test === '1';
	next();
});

// =======================route==========================
// get请求,
app.get('/', function(req, res) {
	res.render('home');
});
// get后边的/notFind只是自己随便定义的路径，不是about.handlebars。而render后面才是真正的about.handlebars文件路径和名字。
app.get('/about', function(req, res) {
	// var arrDate = Math.floor(Math.random() * 4);
	// render需要给html传递对象格式的数据。引用自定义的模块，要通过调用arr.js模块中getArrs方法来实现(该方法返回了一个值)。
	res.render('about',{
		// 路由的lib里的arr.js里的arr。
		data: getArrsModule.getArrs(),
		// 页面测试代码
		pageTestScript: '/qa/tests-about.js'
	});
});
app.get('/notFind', function(req, res) {
	res.render('404');
});
// 路由的tours下的hood-river，data1是上边的arrIn。不是lib里的arr.js里的arr。
app.get('/hood-river', function(req, res) {
	res.render('tours/hood-river', {
		data1: arrIn[1]
	});
});
app.get('/request-group-rate', function(req, res) {
	res.render('tours/request-group-rate', {
		data2: arrIn[2]
	});
});
// =============error hint================================
// 404 catch-all 处理器（中间件）
app.use(function(req, res, next){
	// 直接发送状态码404，不会调用视图引擎
	res.status(404);
	console.log('fail');
	// 这个是404.handlebars而不是直接发送状态码404
	res.render('404');
});
// 500 错误处理器（中间件）
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});
app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );    
});


// =======================================static 中间件==============================================
// var express = require('express'),
// 	app = express();
