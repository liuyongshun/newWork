
var _CommonFunc =
{
    ShowMsgBox: function() { },
    JsonToDateTime: function(date) { },
    JsonToDate: function(date) { },
    JsonToTime: function(date) { }
};

_CommonFunc.JsonToTime = function(date)
{
    var da = new Date(parseInt(date.replace("/Date(", "").replace(")/", "").split("+")[0]));
    return da.getHours() + ":" + da.getSeconds();  //+ ":" + da.getMinutes();
}


_CommonFunc.JsonToDate = function(data)
{
    var da = new Date(parseInt(date.replace("/Date(", "").replace(")/", "").split("+")[0]));
    return da.getFullYear() + "" + (da.getMonth() + 1) + "-" + da.getDate();
}

_CommonFunc.JsonToDateTime = function(date)
{
    var da = new Date(parseInt(date.replace("/Date(", "").replace(")/", "").split("+")[0]));
    return da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + da.getSeconds();  //+ ":" + da.getMinutes();
}

//## _CommonFunc.ShowMsgBox = function(msg, options)

_CommonFunc.ShowMsgBox = function(msg, options)
{
    //设置参数
    var defaults =
	{
	    title: "中国陶瓷官网",
	    width: 300,
	    height: 180,
	    textalign: "center",
	    buttonAlign: "center",  //center left  right
	    showYesButton: true,
	    showCancelButton: false,

	    yesHandel: function() { },
	    cancelHandel: function() { }
	};

    var settings = $.extend({}, defaults, options);
    //产生 Div
    var dia = $("#_msgBox");

    if (dia.length == 0)
    {
        dia = $('<div id="_msgBox"><p style="font-size:14px;"></p></div>');
        dia.appendTo('body');
    }
    //显示提示框

    var p = dia.find("p").html(msg);
    p.css("text-align", settings.textalign);

    var buttons = {};

    //Yes
    if (settings.showYesButton == true) //如果现实
    {
        buttons.确定 = function()
        {
            settings.yesHandel();  //运行设置的句柄
            //清除元素
            $(this).dialog("destroy");  //删除 Juery 
            dia.remove();               //删除 元素
        }
    }

    //Cancel
    if (settings.showCancelButton == true) //如果现实
    {
        buttons.取消 = function()
        {
            settings.cancelHandel();  //运行设置的句柄
            //清除元素
            $(this).dialog("destroy");  //删除 Juery 
            dia.remove();               //删除 元素
        }
    }

    var diaSettings =
    {
        resizable: false,
        modal: true,
        title: settings.title,
        width: settings.width,
        height: settings.height,
        autoOpen: false, //不是自动运行
        buttons: buttons
    };

    dia.dialog(diaSettings);

    //设置按钮位置方向
    var div1 = dia.parent().find(".ui-dialog-buttonpane");
    div1.css("text-align", settings.buttonAlign);
    var buttonDiv = dia.parent().find(".ui-dialog-buttonset");
    buttonDiv.css("float", settings.buttonAlign);
    //---------------------------------------
    dia.dialog("open");
};

//#end

//## function AutoResizeImage( width, height,obj) {
function AutoResizeImage(width, height, obj)
{
	//定义要限制的图片宽高,这个宽高要同style里面定义的相同，小于限定高宽的图片不操作
	var image = $(obj);
	if(image.width() > width)
	{
		image.height(width / image.width() * image.height());
		image.width(width);
	}
	if(image.height() > height)
	{
		image.width(height / image.height() * image.width());
		image.height(height);
	}
	if(image.height() > 0 && image.height() < height)
	{
		image.css("paddingTop", (height - image.height()) / 2 + "px");
		image.css("paddingBottom", (height - image.height()) / 2 + "px");
	}
};

//段胜利
//长宽等比
//横图上下加空白
//竖图左右加空白
//小图进行等比放大，大图等比缩小
//因为这个函数式 onload中使用。 所以当没有图片时，不会运行
//使用方法： <img onload="ResizeImage(this)" style="width:173px;height:173px;" src="<%=m.LogoImg %>">
function ResizeImage(_this)
{
    //获取图片的原始尺寸
    var image = new Image(); //创建一个新图片
    image.src = $(_this).attr("src");

    var _origWidth = image.width-0;
    var _origHeight = image.height-0;
    //删除图片
    image = null;
    //获取当前图片设置的尺寸
    var width = $(_this).width()-0;
    var height = $(_this).height()-0;

    //查看缩放比例，来决定是横图还是竖图
    var zoomW = width / _origWidth;
    var zoomH = height / _origHeight;

    //横图 增加上下空白  // margin  padding
    //if (_origWidth > _origHeight)
    if (zoomW < zoomH)  //显示横图
    {
        var pad1 = 0;
        if ($(_this).css("padding-top"))
        {
            pad1 = $(_this).css("padding-top").replace("px", "") - 0;
        }
        var pad2 = 0;
        if ($(_this).css("padding-bottom"))
        {
            pad2 = $(_this).css("padding-bottom").replace("px", "") - 0;
        }

        var newHeight = _origHeight * (width / _origWidth);
        var marg = (height - newHeight) / 2;
        $(_this).height(newHeight);

        $(_this).css("padding-top", marg + pad1 + "px");
        $(_this).css("padding-bottom", marg + pad2 + "px");
    }
    else
    {
        //获取padding值
        var pad1 = 0;
        if ($(_this).css("padding-left"))
        {
            pad1 = $(_this).css("padding-left").replace("px","")-0;
        }
        var pad2 = 0;
        if ($(_this).css("padding-right"))
        {
            pad2 = $(_this).css("padding-right").replace("px","")-0;
        }
    
        var newWidth = _origWidth * (height / _origHeight);
        var marg = (width - newWidth) / 2 ;
        $(_this).width(newWidth);

        $(_this).css("padding-left", marg + pad1+"px");
        $(_this).css("padding-right", marg + pad2+"px");
    }
}


function SubString(str,leng)
{
    if (str != null && str.length > 0)
    {
        var str2 = str.substring(0, leng);
        if (str2 != str)
        {
            str2 = str2 + "...";
        }
        return str2;
    }
    else
    {
        return str;
    }
}


function PercentsizeImage(Perwidth, Perheight, obj) {
    //定义要限制的图片宽高,这个宽高要同style里面定义的相同，小于限定高宽的图片不操作
    
    var width = screen.width * Perwidth*0.01;
    //var height = screen.height * Perheight * 0.01;
    var height = screen.width * Perwidth * 0.01;

    //  var height = width;
    var image = $(obj);

//    image.height(1);
    if (image.width() > width) {
        image.height(width / image.width() * image.height());
        image.width(width);

    }
    if (image.height() > height) {
        image.width(height / image.height() * image.width());
        image.height(height);
    }
    
    if (image.height() > 0 && image.height() < height) {
        image.css("paddingTop", (height - image.height()) / 2 + "px");
        image.css("paddingBottom", (height - image.height()) / 2 + "px");
    }
};

//宽是百分比，高随意
//function PercentsizeImage(Perwidth, Perheight, obj) {
//    //定义要限制的图片宽高,这个宽高要同style里面定义的相同，小于限定高宽的图片不操作
//    var width = screen.width * Perwidth * 0.01;
//    var height = screen.height * Perheight * 0.01;
//    var image = $(obj);
//    if (image.width() > width) {
//        image.height(width / image.width() * image.height());
//        image.width(width);
//    }

//};

//#end

//## function ShowMsgBox(text) 显示消息提示框 ,页面中需有隐藏的DIV

function ShowMsgBox(text)
{
	var dia = $("#dialog-message");
	dia.find("p").text(text);
	dia.dialog(
	{
		resizable : false,
		modal: true,
//		title:"中国陶瓷官网",
//		width: "600",
		//		height: "400",
	//	autoOpen: false,
		buttons : 
		{
			"确定" : function()
			{
				$(this).dialog("close");
			}
		}
	});
};

//<!--隐藏消息提示框 begin-->
// 
//<div id="dialog-message" title="中国陶瓷官网" style="display:none">
//  <p>
//  </p>
//</div>
//<!--隐藏消息提示框 end-->
//#end


//## function isNumber(strId) 判断是不是正整数
function isNumber(strId)
{
	var strP = /^\d+$/;
	//正整数 //正则表达式，真好用 ，
	return strP.test($('#' + strId).val());
	//返回 false 或者 true
};

//#end
//## RegExpVerify 正则表达式 判断  //注意：不能使用RegExp名字，否则冲突

var RegExpVerify = {
    Email: function() { },
    Number: function() { },
    Telephone:function(){}
};

RegExpVerify.Number = function(str)
{
    var strP = /^\d+$/;
    //正整数 //正则表达式，真好用 ，
    return strP.test(str);
};

RegExpVerify.Email = function(email)
{
    var re = /\w+@\w+\.\w+/;
    if (re.test(email))
        return true;
    else
        return false;
};

RegExpVerify.Telephone = function(str)
{
    var reg = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
    var isValid

    isValid = reg.exec(str)
    if (!isValid)
    {
        return false
    }
    return true
};
//#end

function formatDate(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var date = dt.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    return year + "-" + month + "-" + date;
}

function TestIt(dt) {
    var Dtime = dt;
    var NewDtime = new Date(parseInt(Dtime.slice(6, 21)));
    return formatDate(NewDtime);
}

function delHtmlTag(str) {
    return str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
}

function getBack() {
    history.go(-1);
}

function CCiaSubString(Str, Num)
{
    if (Str && (getStrLength(Str)) > (Num * 2))
    {
        var str2 = Str.substring(0, Num * 2);
        if (Str != str2)
        {
            Str = str2 + "...";
        }
        return Str;
    }
    else
    {
        return Str;
    }
}

//
function getStrLength(str) {
    var cArr = str.match(/[^\x00-\xff]/ig);
    return str.length + (cArr == null ? 0 : cArr.length);
}


//图片上传预览 IE是用了滤镜。
function previewImage(file) {
    var MAXWIDTH = 260;
    var MAXHEIGHT = 180;
    var div = document.getElementById('preview');
    if (file.files && file.files[0]) {
        div.innerHTML = '<img id=imghead>';
        var img = document.getElementById('imghead');
        img.onload = function() {
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            img.width = rect.width;
            img.height = rect.height;
            // img.style.marginLeft = rect.left+'px';
            img.style.marginTop = rect.top + 'px';
        }
        var reader = new FileReader();
        reader.onload = function(evt) { img.src = evt.target.result; }
        reader.readAsDataURL(file.files[0]);
    }
    else //兼容IE
    {
        var sFilter = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
        file.select();
        var src = document.selection.createRange().text;
        div.innerHTML = '<img id=imghead>';
        var img = document.getElementById('imghead');
        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        status = ('rect:' + rect.top + ',' + rect.left + ',' + rect.width + ',' + rect.height);
        div.innerHTML = "<div id=divhead style='width:" + rect.width + "px;height:" + rect.height + "px;margin-top:" + rect.top + "px;" + sFilter + src + "\"'></div>";
    }
}
function clacImgZoomParam(maxWidth, maxHeight, width, height) {
    var param = { top: 0, left: 0, width: width, height: height };
    if (width > maxWidth || height > maxHeight) {
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;

        if (rateWidth > rateHeight) {
            param.width = maxWidth;
            param.height = Math.round(height / rateWidth);
        } else {
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
    }

    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
}