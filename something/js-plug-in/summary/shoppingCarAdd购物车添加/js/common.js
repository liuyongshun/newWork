// JavaScript Document
	
	
// 判断浏览器
$(document).ready(function() {
		$("body").iealert();
});
$(function(){
	//隔行变色
	$("#bianse li:odd").css({"background-color":"#f2f2f2"})
	//侧面二级导航
	$(".b_erji_nav .li_con").hide();
	$(".b_erji_nav ul li").hover(function(e) {
		var index=$(this).index();
        //滑入
		$(this).addClass("b_on2")
		$(".b_erji_nav .li_con").eq(index).show()
    },function(){
		var index2=$(this).index();
		//滑出
		$(this).removeClass("b_on2")
		$(".b_erji_nav .li_con").eq(index2).hide()
	})
	$(".b_erji_nav .li_con").hover(function(e) {
		$(".b_erji_nav ul li").eq($(this).index()-2).addClass("b_on2")
        $(this).show()
    },function(){
		$(".b_erji_nav ul li").eq($(this).index()-2).removeClass("b_on2")
		$(this).hide()
	  });
	 //首页轮播
	$(".www51buycom").hover(function(){
		$(this).find(".prev,.next").fadeTo("show",0.1);
	},function(){
		$(this).find(".prev,.next").hide();
	})
	/*鼠标移过某个按钮 高亮显示*/
	$(".prev,.next").hover(function(){
		$(this).fadeTo("show",0.7);
	},function(){
		$(this).fadeTo("show",0.1);
	})
	$(".www51buycom").slide({ titCell:".num ul" , mainCell:".51buypic" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	//右侧tab切换
	$(".right_main_ul2").hide()
	$(".b_sy_li1").click(function(e) {
        $(this).addClass("on_li")
		$(".b_sy_li2").removeClass("on_li2")
		$(".right_main_ul1").show()
		$(".right_main_ul2").hide()
    });
	$(".b_sy_li2").click(function(e) {
        $(this).addClass("on_li2")
		$(".b_sy_li1").removeClass("on_li")
		$(".right_main_ul1").hide()
		$(".right_main_ul2").show()
		
    });
	//地址选中
	//增加图标
     $(".b_mrdd").live('click',function(){
        $(this).parents("ul").addClass("b_tubiao2").siblings(".b_shou_dizhi ul").removeClass("b_tubiao2")
    });
	//删除本行
	$(".b_shanchu2").live('click',function(){
		$(this).parents("ul").remove();
    });	
	//划过显示
	$(".b_shou_dizhi ul .fr").hide();
	$(".b_shou_dizhi ul").live('mouseover',function(){
		$(this).children(".fr").show()
    });	
	$(".b_shou_dizhi ul").live('mouseout',function(){
		$(this).children(".fr").hide()
    });	
})
//购物车加减1
$(function(){ 
$(".add").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 					
t.val(parseInt(t.val())+1);
$('#text_box').attr('value',t.val());
setTotal(); 
}) 
$(".min").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 
t.val(parseInt(t.val())-1);
$('#text_box').attr('value',t.val());
if(parseInt(t.val())<0){ 
t.val(0); 
} 
setTotal(); 
}) 

})
//购物车加减2
$(function(){ 
$(".add2").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 					
t.val(parseInt(t.val())+1);
$('#text_box2').attr('value',t.val());
setTotal(); 
}) 
$(".min2").click(function(){ 
var t=$(this).parent().find('input[class*=text_box]'); 
t.val(parseInt(t.val())-1);
$('#text_box2').attr('value',t.val());
if(parseInt(t.val())<0){ 
t.val(0); 
} 
setTotal(); 
}) 

})
// 客服显示
$(function () {
    $('.b_sy_ul').each(function () {
        var distance = 10;
        var time = 250;
        var hideDelay = 500;
        var hideDelayTimer = null;
        var beingShown = false;
        var shown = false;
        var trigger = $('.b_kefu', this);
        var info = $('.b_kftc', this).css('opacity', 0);
        $([trigger.get(0), info.get(0)]).mouseover(function () {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);
            if (beingShown || shown) {
                // don't trigger the animation again
                return;
            } else {
                // reset position of info box
                beingShown = true;
                info.css({
                    top: 40,
                    left: -15,
                    display: 'block'
                }).animate({
                    top: '-=' + distance + 'px',
                    opacity: 1
                }, time, 'swing', function () {
                    beingShown = false;
                    shown = true;
                });
            }
            return false;
        }).mouseout(function ()
        {
            if (hideDelayTimer) clearTimeout(hideDelayTimer);
            hideDelayTimer = setTimeout(function () {
                hideDelayTimer = null;
                info.animate({
                    top: '-=' + distance + 'px',
                    opacity: 0
                }, time, 'swing', function () {
                    shown = false;
                    info.css('display', 'none');
                });
            }, hideDelay);
            return false;
        });
    });
});
// 微信显示
$(function () {
	$('.b_sy_ul').each(function () {
	    var distance = 10;
	    var time = 250;
	    var hideDelay = 500;
	    var hideDelayTimer = null;
	    var beingShown = false;
	    var shown = false;
	    var trigger = $('.b_weixin', this);
	    var info = $('.b_wxewm', this).css('opacity', 0);
	    $([trigger.get(0), info.get(0)]).mouseover(function () {
	        if (hideDelayTimer) clearTimeout(hideDelayTimer);
	        if (beingShown || shown) {
	            // don't trigger the animation again
	            return;
	        } else {
	            // reset position of info box
	            beingShown = true;
	            info.css({
	                top: 39,
	                left: -25,
	                display: 'block'
	            }).animate({
	                top: '-=' + distance + 'px',
	                opacity: 1
	            }, time, 'swing', function () {
	                beingShown = false;
	                shown = true;
	            });
	        }
	        return false;
	    }).mouseout(function () {
	        if (hideDelayTimer) clearTimeout(hideDelayTimer);
	        hideDelayTimer = setTimeout(function () {
	            hideDelayTimer = null;
	            info.animate({
	                top: '-=' + distance + 'px',
	                opacity: 0
	            }, time, 'swing', function () {
	                shown = false;
	                info.css('display', 'none');
	            });
	        }, hideDelay);
	        return false;
	    });
	});
	});
//tab切换
function setTab(name, cursel, n) {
	for (i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con_"+ name + "_"+ i);
		menu.className = i == cursel ? "hover": "";
		con.style.display = i == cursel ? "block": "none";
	}
}
function setTab1(name, cursel, n) {
	for (i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con_"+ name + "_"+ i);
		var con1 = document.getElementById("con1_"+ name + "_"+ i);
		menu.className = i == cursel ? "hover": "";
		con.style.display = i == cursel ? "block": "none";
		con1.style.display = i == cursel ? "block": "none";
	}
}
// 文字向上滚动
$(function(){
function startmarquee5(lh, speed, delay) {
	var t;
	var o = document.getElementById("demo0");
	o.innerHTML += o.innerHTML;
	o.style.marginTop = 0;
	o.onmouseover = function () { clearInterval(t); }
	o.onmouseout = function () { t = setInterval(scrolling, speed); }


	function start() {
	    t = setInterval(scrolling, speed);
	}

	function scrolling() {
	    if (parseInt(o.style.marginTop) % lh != 0) {
	        o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
	        if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2) o.style.marginTop = 0;
	    } else {
	        clearInterval(t);
	        setTimeout(start, delay);
	    }
	}
	setTimeout(start, delay);
	}
	startmarquee5(0, 65, 150);	
})
 

// 快捷通道-弹框	
function y_kjtd(){
	layer.open({
		type: 1,
		title: ['<span class="fl" style="font-size:14px; color:#000">快捷通道&nbsp;&nbsp;<font style="font-size:12px;">无需注册&nbsp;快速发布需求</font></span>', 'text-align:left; color:white;background-color:#eaeaea;'],
		area: ['430px', ''],
		shadeClose: true, //点击遮罩关闭
		content: $('#y_kjtd') 

	});
}
//添加弹框
function t_tjpp(){
    layer.open({
        type: 1,
        title:['添加新收板人地址'],
        area: ['550px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_tjpp') 

    });
}

