var express = require('express'),
    app = express();
var cookieKey = require('./lib/cookieKey.js');
app.use(require('body-parser')());
app.use(require('cookie-parser')(cookieKey.cookies));

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
app.set('view cache', true);
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

// 1
app.get('/header', function(req, res) {
	// node自带的方法req.headers和req.url
	// req.headers得到的是请求头数据。
	console.log(req.headers);
	// req.url得到的是/header端口之后的才是url。
	console.log(req.url);
    res.set('Content-Type', 'text/plain');
    var s = '';
    for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
    res.send(s);
});

// 2 默认使用main布局。不想使用时，res.render('foo', { layout: null });想用别的模板时res.render('foo', { layout: 'microsite' });
app.get('/about', function(req, res) {
	res.render('about', {
		dataAbout: 'no layouts'
	});
});

// 3
app.use(function(req, res, next){
	/*自己定义locals.partials*/
	if(!res.locals.partials) res.locals.partials = {};
	res.locals.partials.weather = getWeatherData();
	next();
});

function getWeatherData(){
	return {
		locations: [
		{
			name: 'Portland',
			forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
			iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
			weather: 'Overcast',
			temp: '54.1 F (12.3 C)',
		},
		{
			name: 'Bend',
			forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
			iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
			weather: 'Partly Cloudy',
			temp: '55.0 F (12.8 C)',
		},
		{
			name: 'Manzanita',
			forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
			iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
			weather: 'Light Rain',
			temp: '55.0 F (12.8 C)',
		},
		],
	};
}

// 4
app.get('/home', function(req, res) {
	res.render('home');
});

// 5
app.get('/newsletter', function(req, res){
	res.render('newsletter', { csrf: 'CSRF token goes here' });
});
// app.post('/process', function(req, res){
// 	console.log('Form (from querystring): ' + req.query.form);
// 	console.log('CSRF token (from hidden form field): ' + req.body._csrf);
// 	console.log('Name (from visible form field): ' + req.body.name);
// 	// req.body请求的是name的值
// 	console.log('Email (from visible form field): ' + req.body.email);
// 	res.redirect(301, '/thank-you');
// });
app.get('/thank-you', function(req, res) {
	res.render('redirect');
});

// 6
app.get('/ajax', function(req, res) {
	res.render('ajax-newsletter', { csrf: 'CSRF token goes here' });
});
app.post('/process', function(req, res){
	// req.xhr 值为true或false判断ajax是否存在
	console.log(req.xhr);
 	// req.accepts 试图确定返回的最合适的响应类型。在此例中， req.accepts('json,html') 询问最佳返回格式是JSON 还是 HTML：这可以根据 Accepts HTTP 头信息推断出来，它是浏览器提供的可读的、有序的响应类型列表。如果是一个 AJAX 请求，或者 User-Agent 明确要求 JSON 优先于 HTML，那么就会返回合适的 JSON 数据；否则，返回一个重定向。
	if(req.xhr || req.accepts('json,html')==='json'){
		// 如果发生错误，应该发送 { error: 'error description' }
		res.send({ success: true });
	} else {
		// 如果发生错误，应该重定向到错误页面
		res.redirect(303, '/thank-you');
	}
});

// 7
app.get('/cookies', function(req, res) {
	// 获取cookies
	var monster = req.cookies.monster;
	console.log(monster);	
	// 获取签名cookies
	var signedMonster = req.signedCookies.signed_monster;	
	console.log(signedMonster);		
	// 设置普通cookie
	res.cookie('monster', 'this is normal of cookie');
	// signed: true 是签名cookie优先于为签名cookie
	res.cookie('signed_monster', 'this is content of signed cookies', {
		signed: true,
		maxAge: 10000000,
		httpOnly: true,
		secure: true
	});
	// 删除cookies
	res.clearCookie('monster');
	res.render('cookies');
});

app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );    
});
