// JavaScript Document
$(function(){
	    <!--banner-->
		m_focus();
		function m_focus(){
			var index=0;
		$(".b_banner .focus").find(".page-r").hide();
		$(".b_banner .focus").find(".page-l").hide();
		$(".b_banner .focus").find(".page-r").click(function(){
				autoplay()
			
			})
		$(".b_banner .focus").find(".page-l").click(function(){
				index--;
				if(index<0){
					index=2;
					}
				$(".b_banner .focus ul li").eq(index).fadeIn().siblings().hide();
				$(".b_banner .focus ol li").eq(index).addClass("current").siblings().removeClass("current");
			
			
			});
			var timer=setInterval(autoplay,2000);
			function autoplay(){
				
				index++;
				if(index==3){
					index=0;
					}
				$(".b_banner .focus ul li").eq(index).fadeIn().siblings().hide();
				$(".b_banner .focus ol li").eq(index).addClass("current").siblings().removeClass("current");
				
				}
			//hover状态时停止
			$(".b_banner .focus").hover(function(){
				clearInterval(timer);
				$(".b_banner .focus").find(".page-r").fadeIn(200);
				$(".b_banner .focus").find(".page-l").fadeIn(200);
				
				},function(){
					clearInterval(timer);
					timer=setInterval(autoplay,2000);
					$(".b_banner .focus").find(".page-r").hide();
					$(".b_banner .focus").find(".page-l").hide();
					
					})
				<!--点击 ol li切换-->
			$(".b_banner ol li").click(function(e) {
				index++
				if(index>2){
					index=0;
					}
                $(".b_banner ol li").eq($(this).index()).addClass("current").siblings().removeClass("current");
				$(".b_banner .focus ul li").eq($(this).index()).fadeIn().siblings().hide();
            });
		}	
			<!--左右按钮的多张图片左右翻页-->

    var _index5=0;
    $("#four_flash .but_right").click(function(){
        _index5++;
        var len=$(".flashBg ul.mobile li").length;
        if(_index5+5>len){
            $("#four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
        }
        $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*279},1004);
        });
    
        
    $("#four_flash .but_left").click(function(){
        if(_index5==0){
            $("ul.mobile").prepend($("ul.mobile").html());
            $("ul.mobile").css("left","-1100px");
            _index5=3
        }
        _index5--;
        $("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*279},1004);
        });
			<!--左右按钮的多张图片左右翻页-->

    var _index4=0;
    $("#four_flash2 .but_right2").click(function(){
        _index4++;
        var len=$(".flashBg2 ul.mobile2 li").length;
        if(_index4+5>len){
            $("#four_flash2 .flashBg2 ul.mobile2").stop().append($("ul.mobile2").html());
        }
        $("#four_flash2 .flashBg2 ul.mobile2").stop().animate({left:-_index4*279},1004);
        });
    
        
    $("#four_flash2 .but_left2").click(function(){
        if(_index4==0){
            $("ul.mobile2").prepend($("ul.mobile2").html());
            $("ul.mobile2").css("left","-1100px");
            _index4=3
        }
        _index4--;
        $("#four_flash2 .flashBg2 ul.mobile2").stop().animate({left:-_index4*279},1004);
        });
		
		<!--返回顶部-->
		$(window).scroll(function(){
			var sc=$(window).scrollTop();
			var rheight=$(window).height()+$(document).scrollTop();
			if(sc>0){
				$("#goTop").css("display","block");
			}else{
				$("#goTop").css("display","none");
			}
		});
		$("#goTop").click(function(){
			$('body,html').animate({scrollTop:0},300);
		});
});

