/* 
 * 边框
 * border:1px solid #666 -- bor1sol_666
 * border-left:1px solid #666 -- bl1sol_666
 * border-right:1px solid #666 -- br1sol_666
 * border-top:1px solid #666 -- bt1sol_666
 * border-bottom:1px solid #666 -- bb1sol_666
 * 
 * border-left:1px dotted #666 -- bl1dot_666
 * border-right:1px dotted #666 -- br1dot_666
 * border-top:1px dotted #666 -- bt1dot_666
 * border-bottom:1px dotted #666 -- bb1dot_666
 * 
 * border-left:1px dashed #666 -- bl1dash_666
 * border-right:1px dashed #666 -- br1dash_666
 * border-top:1px dashed #666 -- bt1dash_666
 * border-bottom:1px dashed #666 -- bb1dash_666
 * 背景颜色
 * background-color:#666 -- bgcolor_666 
 * 
 * 定位
 * bottom:20px -- bottom20
 * 
 * 圆角弧度
 * border-raidus:5px -- br5
 * border-raidus:50% -- brp50
 * border-top-left-radius:5px -- btlr5
 * border-top-right-radius:5px -- btrr5
 * border-bottom-left-radius:5px -- bblr5
 * border-bottom-right-radius:5px -- bbrr5
 * 字体颜色 
 * color:#666 -- color_666
 * 
 * 字号
 * font-size:20px -- fz20
 * 
 * 行高
 * height:100px -- height100
 * 
 * line-height:100px --lheight100
 * left:20px -- left20
 * 
 * 外边距 
 * margin-left:20px --  ml20
 * margin-right:20px --  mr20
 * margin-top:20px --  mt20
 * margin-bottom:20px --  mb20
 * margin:20px -- mg20
 * 
 * 内边距
 * padding-left:20px -- pdl20
 * padding-right:20px -- pdr20
 * padding-top:20px -- pdt20
 * padding-bottom:20px -- pdb20
 * 
 * right:20px -- right20
 * 
 * 定位
 * top:20px -- top20
 * 
 * 样式
 * width:100px --width100
 *
 * 
 * */

function startCSS(){
	if( $(".freecss").length > 0 ){
		var arrayBox = []
		var classArrayCopy = [];
		var judgeNum = true;
		//将class类名进行分割成数组
		$(".freecss").each(function( index , ele ){
			arrayBox.push($(".freecss").eq(index).attr("class").split(' '));
		})
		//将二维数组转为一维数组
		for( var arrayBoxOne = 0 ; arrayBoxOne < arrayBox.length ; arrayBoxOne++ ){
			for( var arrayBoxTwo = 0; arrayBoxTwo < arrayBox[arrayBoxOne].length ; arrayBoxTwo++ ){
				classArrayCopy.push(arrayBox[arrayBoxOne][arrayBoxTwo]);			
			}
		}
		//将转换后的一维数组重新排序去重
		classArrayCopy.sort();
		var classArray = [classArrayCopy[0]];
		for( var z = 0 ; z < classArrayCopy.length ; z++ ){
			if( classArrayCopy[z] !== classArray[classArray.length - 1] ){
				classArray.push(classArrayCopy[z]);
			}
		}
		console.log(classArray)
		//筛选freecss特定属性名	
		var nameArray = [];
		for( var i = 0 ; i < classArray.length ; i++ ){
			var classNameArray = [];
			for( var k = 0 ; k < classArray[i].length ; k++ ){
				//如果最后一位不是数字直接跳出循环 并且不含有_
				if( isNaN(classArray[i].substring(classArray[i].length - 1)) && classArray[i].indexOf('_') < 0 ){
					break;
				//截取带 color_666  格式
				}else if ( classArray[i].indexOf('_') > 0 ){
					//截取颜色
					var borColor = classArray[i].substring( classArray[i].indexOf('_') + 1 )
					//截取类名
					var className = classArray[i].substring( 0 , classArray[i].indexOf('_') )
	//				console.log(className)
					//判断是否含有数字 是否是bl1dot_666类型
					judgeNumber(className)
					if( judgeNum == true ){
						//含有数字 bl1dot_666形式   截取bl、1、dot
						for( var numlength = 1 ; numlength < className.length ; numlength++ ){
							if( isNaN( className.substring( className.length - numlength , className.length - numlength + 1 ) ) ){
								
							}else{
								var borderStyle = className.substring( className.length - numlength + 1 , className.length )
								var borderSmallBox = className.substring( 0 , className.length - numlength + 1 )
								break;
							}
						}
						for( var c = 1 ; c < borderSmallBox.length ; c++ ){
							if( isNaN( borderSmallBox.substring( borderSmallBox.length - c , borderSmallBox.length ) ) ){
								var borderWidth = borderSmallBox.substring( borderSmallBox.length - c + 1 );
								var borderName = borderSmallBox.substring( 0 , borderSmallBox.length - c + 1 )
								break;
							}
						}
	
						var firstLetter = className.substring(0 , 1)
						classNameArray.push( firstLetter , borderName , borColor , classArray[i] , borderStyle , borderWidth  )
						nameArray.push(classNameArray)
	//					console.log(nameArray)
						break;			
					}else{
	//					console.log('buhan');
						//不含有数字  代表color_666形式
						var firstLetter = className.substring(0 , 1)
						classNameArray.push( firstLetter , className , borColor , classArray[i] )
						nameArray.push(classNameArray)
						break;
					}
					
				}else{
					// ml20格式 截取类名、类名首字母、数字
					var num = classArray[i].substring(classArray[i].length - k - 1)
					if( isNaN(num) ){
						num  =  classArray[i].substring(classArray[i].length - k )	
						var className = classArray[i].substring(0 , classArray[i].length - k )
						var firstLetter = className.substring(0 , 1)
						classNameArray.push( firstLetter , className , num , classArray[i] )
						nameArray.push(classNameArray)
						break;
					}
				}
			}
		}
		
		function judgeNumber ( num ){
	//		console.log(num)
			for ( var b = 0; b < 10; b++ ) {
				if( num.indexOf(b) > 0 ){
					judgeNum = true;
					return ;
				}else{
					judgeNum = false;
				}
			}
		}
	//	console.log(nameArray)
		//对freecss特定属性进行匹配     嵌入css样式
		for( var a = 0 ; a < nameArray.length ; a++ ){
			var target;
			var px;
			switch( nameArray[a][0] ){
				case 'b' :
					target = nameArray[a][3];
					var px = nameArray[a][5] + 'px';
					switch( nameArray[a][1] ){
						case 'bor' :
						var bgcolor = '#' +  nameArray[a][2] ;
						switch ( nameArray[a][4] ){
							case 'dot' :
							var borStyle = 'dotted';
							break;
							
							case 'sol':
							var borStyle = 'solid';
							break;
							
							case 'das':
							var borStyle = 'dashed';
							break;
							
							default:
							console.log("未找到边框类型")
						}
						var borcss = px + ' ' + borStyle + ' ' + bgcolor; 
						$("." + target).css({
							"border" : borcss
						})
						break;
						
						case 'bl' :
						var bgcolor = '#' +  nameArray[a][2] ;
						switch ( nameArray[a][4] ){
							case 'dot' :
							var borStyle = 'dotted';
							break;
							
							case 'sol':
							var borStyle = 'solid';
							break;
							
							case 'das':
							var borStyle = 'dashed';
							break;
							
							default:
							console.log("未找到边框类型")
						}
						var borcss = px + ' ' + borStyle + ' ' + bgcolor; 
						$("." + target).css({
							"border-left" : borcss
						})
						break;
						
						case 'br' :
						var bgcolor = '#' +  nameArray[a][2] ;
						switch ( nameArray[a][4] ){
							case 'dot' :
							var borStyle = 'dotted';
							break;
							
							case 'sol':
							var borStyle = 'solid';
							break;
							
							case 'das':
							var borStyle = 'dashed';
							break;
							
							default:
							console.log("未找到边框类型")
						}
						var borcss = px + ' ' + borStyle + ' ' + bgcolor; 
						$("." + target).css({
							"border-right" : borcss
						})
						break;
						
						case 'bt' :
						var bgcolor = '#' +  nameArray[a][2] ;
						switch ( nameArray[a][4] ){
							case 'dot' :
							var borStyle = 'dotted';
							break;
							
							case 'sol':
							var borStyle = 'solid';
							break;
							
							case 'das':
							var borStyle = 'dashed';
							break;
							
							default:
							console.log("未找到边框类型")
						}
						var borcss = px + ' ' + borStyle + ' ' + bgcolor; 
						$("." + target).css({
							"border-top" : borcss
						})
						break;
						
						case 'bb' :
						var bgcolor = '#' +  nameArray[a][2] ;
						switch ( nameArray[a][4] ){
							case 'dot' :
							var borStyle = 'dotted';
							break;
							
							case 'sol':
							var borStyle = 'solid';
							break;
							
							case 'das':
							var borStyle = 'dashed';
							break;
							
							default:
							console.log("未找到边框类型")
						}
						var borcss = px + ' ' + borStyle + ' ' + bgcolor; 
						console.log('底部')
						$("." + target).css({
							"border-bottom" : borcss
						})
						break;
						
						case 'bgcolor' :
						var bgcolor = '#' +  nameArray[a][2] ;
						console.log('背景')
						$("." + target).css({
							"background-color" : bgcolor
						})
						break;
						
						case 'bottom' :
						px = nameArray[a][2] + 'px';
						$("." + target).css({
							"bottom" : px
						})
						break;
						
						case 'brad' :
						px = nameArray[a][2] + 'px';
						$("." + target).css({
							"border-radius" : px
						})
						break;
						
						case 'brp' :
						percent = nameArray[a][2] + '%';
						$("." + target).css({
							"border-radius" : percent
						})
						break;
						
						case 'btlr' :
						px = nameArray[a][2] + 'px';
						$("." + target).css({
							"border-top-left-radius" : px
						})
						break;
						
						case 'btrr' :
						px = nameArray[a][2] + 'px';
						$("." + target).css({
							"border-top-right-radius" : px
						})
						break;
						
						case 'bblr' :
						px = nameArray[a][2] + 'px';
						$("." + target).css({
							"border-bottom-left-radius" : px
						})
						break;
						
						case 'bbrr' :
						px = nameArray[a][2] + 'px';
						$("." + target).css({
							"border-bottom-right-radius" : px
						})
						break;
						
						default :
						console.log('未找到b')
					}
				break;
				
				case 'c' :
					target = nameArray[a][3];
					var color = '#' + nameArray[a][2] ;
					console.log(nameArray )
					switch( nameArray[a][1] ){
						case 'color' :
						$("." + target).css({
							"color" : color
						})
						break;
						
						default :
						console.log('未找到c')
					}
				break;
				
				case 'f' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					console.log(px)
					switch( nameArray[a][1] ){
						case 'fz' :
						$("." + target).css({
							"font-size" : px
						})
						break;
						
						default :
						console.log('未找到f')
					}
				break;
				
				case 'h' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					switch( nameArray[a][1] ){
						case 'height' :
						$("." + target).css({
							"height" : px
						})
						break;
						
						default :
						console.log('未找到h')
					}
				break;
				
				case 'l' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					switch( nameArray[a][1] ){
						case 'lheight' :
						$("." + target).css({
							"line-height" : px
						})
						break;
						
						case 'left' :
						$("." + target).css({
							"left" : px
						})
						break;
						
						default :
						console.log('未找到l')
					}
				break;
				
				case 'm' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					switch( nameArray[a][1] ){
						case 'mt' :
						$("." + target).css({
							"margin-top" : px
						})
						break;
						
						case 'mb' :
						$("." + target).css({
							"margin-bottom" : px
						})
						break;
						
						case 'ml' :
						$("." + target).css({
							"margin-left" :	 px
						})
						break;
						
						case 'mr' :
						$("." + target).css({
							"margin-right" :  px
						})
						break;
						
						case 'mg' :
						$("." + target).css({
							"margin" :  px
						})
						break;
						
						default :
						console.log('未找到m')
					}
				break;
					
				case 'p' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					switch( nameArray[a][1] ){
						case 'pd' :
						$("." + target).css({
							"padding" : px
						})
						break;
						
						case 'pdt' :
						$("." + target).css({
							"padding-top" : px
						})
						break;
						
						case 'pdb' :
						$("." + target).css({
							"padding-bottom" : px
						})
						break;
						
						case 'pdl' :
						$("." + target).css({
							"padding-left" : px
						})
						break;
						
						case 'pdr' :
						$("." + target).css({
							"padding-right" :  px
						})
						break;
						
						default :
						console.log('未找到p')
					}
				break;
				
				case 'r' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					switch( nameArray[a][1] ){
						case 'right' :
						$("." + target).css({
							"right" : px
						})
						break;
						
						default :
						console.log('未找到r')
					}
				break;
					
				case 't' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					switch( nameArray[a][1] ){
						case 'top' :
						$("." + target).css({
							"top" : px
						})
						break;
						
						default :
						console.log('未找到t')
					}
				break;
				
				case 'w' :
					target = nameArray[a][3];
					px = nameArray[a][2] + 'px';
					switch( nameArray[a][1] ){
						case 'width' :
						$("." + target).css({
							"width" : px
						})
						break;
						
						default :
						console.log('未找到w')
					}
				break;	
					
				default :console.log('未找到所选字符')
			}
		}
		$("body").show()
	}
}

