var express = require('express'),
    app = express(),
    connect = require('connect');
// 自定义的模块
app.use(require('body-parser')());
// 引入模版
var handlebars = require('express3-handlebars').create({ defaultLayout:'main',
	helpers: {
		section: function(name, options){
			if(!this._sections) this._sections = {};
			this._sections[name] = options.fn(this);
			return null;
		}
	}
 }); 
// 设置
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');  	
// app.set('view cache', true);
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

// 1
// switch(app.get('env')){
// 	case 'development':
// 	// 紧凑的、彩色的开发日志
// 	app.use(require('morgan')('dev'));
// 	break;
// 	case 'production':
// 	// 模块 'express-logger' 支持按日志循环
// 	app.use(require('express-logger')({path: __dirname + '/log/requests.log'}));
// 	break;
// };

// 2
app.get('/fail', function(req, res) {
	throw new Error('Nope!');
});
app.get('/epic-fail', function(req, res) {
	// 这是因为 process.nextTick(类似setTimeout)是异步执行的，抛出异常的函数被推迟到 Node 空闲时才执行。问题是，当 Node 得到空闲可以执行这个函数时，它已经没有其所服务的请求的上下文了，所以它已经没有资源了，只能毫不客气地关掉整个服务器。
	process.nextTick(function(){
		throw new Error('Kaboom!');
	});
});
app.use(function(err, req, res, next) {
	// console.error(err.stack);
	res.status(500).render('500');
});	
var http = require('http');
http.createServer(app).listen(app.get('port'), function(){
	console.log( 'Express started in ' + app.get('env') + ' mode on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});