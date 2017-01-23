		$(".www51buycom").hover(function(){
			$(this).find(".prev,.next").fadeTo("show",0.1);
		},function(){
			$(this).find(".prev,.next").hide();
		})
		$(".prev,.next").hover(function(){
			$(this).fadeTo("show",0.7);
		},function(){
			$(this).fadeTo("show",0.1);
		})
		$(".www51buycom").slide({ titCell:".num ul" , mainCell:".51buypic" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
