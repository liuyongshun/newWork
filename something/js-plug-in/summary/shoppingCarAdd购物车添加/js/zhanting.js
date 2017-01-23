// JavaScript Document
// 判断浏览器
$(document).ready(function() {
		$("body").iealert();
});
//购物车加减
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
function setTotal(){ 
var s=0; 
$("#tab td").each(function(){ 
s+=parseInt($(this).find('input[class*=text_box]').val())*parseFloat($(this).find('span[class*=price]').text());
}); 
$("#total").html(s.toFixed(2)); 
} 
setTotal(); 

}) 
