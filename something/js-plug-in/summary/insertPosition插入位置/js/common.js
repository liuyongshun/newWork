

// <!--判断屏幕高度-->
var total = document.documentElement.clientHeight;
var mainCol = window.document.getElementById('mainCol'); 
var mainHeight =  mainCol.offsetHeight;
var allHeight=mainHeight+115;
if(total>allHeight){	
	var height=total-115;	
	document.getElementById("col1").style.height=height+"px";
	document.getElementById("mainCol").style.height=height+"px";
}else{
	document.getElementById("col1").style.height=mainHeight+"px";
}


// 判断浏览器
$(document).ready(function() {
        $("body").iealert();
});


// 图片上传
var _view = {
    hasFile: 0 //表示是否上传了文件。 
};

$(function ()
{
    $("#infoForm [name=mvc_logo]").uploadPreview({
        Img: "ImgPreview", Width: 136, Height: 136, ImgType: ["gif", "jpeg", "jpg", "bmp", "png"], Callback: function ()
        {
            _view.hasFile = 1;
        }
    });
})
//绑定出金账户
function t_ckzh(){
    layer.open({
        type: 1,
        title: ['申请绑定出入金账户'],
        area: ['550px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_ckzh') 

    });
}
//出金
function t_cjbt(){
    layer.open({
        type: 1,
        title: ['出金'],
        area: ['550px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_cjbt') 

    });
}
//插入地图
function z_insert_map(){
    layer.open({
        type: 1,
        title: ['插入地图'],
        area: ['900px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#z_insert_map') 

    });
}
//提示 删除 重发等
function z_prompt(){
    layer.open({
        type: 1,
        title: ['提示'],
        area: ['300px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#z_prompt') 

    });
}
//申请解冻
function t_sqjd(){
    layer.open({
        type: 1,
        title: ['提示'],
        area: ['330px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_sqjd') 

    });
}

//打印操作流程
function t_dyczlu(){
    layer.open({
        type: 1,
        title:false,
        area: ['840px', '700px'],
        closeBtn:0,
        shadeClose: true, //点击遮罩关闭
        content: $('#t_dyczlu') 

    });
}
//客户管理添加
function t_tjpp(){
    layer.open({
        type: 1,
        title:['添加'],
        area: ['550px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_tjpp') 

    });
}
//修改议价信息
function t_xgyjxx(){
    layer.open({
        type: 1,
        title:['修改议价信息'],
        area: ['550px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_xgyjxx') 

    });
}
//日历-单独时间
!function(){
  laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
  //绑定元素
  laydate({elem: '#demo',istime: true, format: 'YYYY-MM-DD hh:mm:ss'});
  laydate({elem: '#demo1',istime: true, format: 'YYYY-MM-DD hh:mm:ss'});
  laydate({elem: '#demo2',istime: true, format: 'YYYY-MM-DD hh:mm:ss'});
  laydate({elem: '#demo3',istime: true, format: 'YYYY-MM-DD hh:mm:ss'});
  laydate({elem: '#demo4',istime: true, format: 'YYYY-MM-DD hh:mm:ss'});//绑定元素
}();

//日历-开始时间-结束时间
var start = {
    elem: '#start',
    format: 'YYYY/MM/DD hh:mm:ss',
    min: laydate.now(), //设定最小日期为当前日期
    max: '2099-06-16 23:59:59', //最大日期
    istime: true,
    istoday: false,
    choose: function(datas){
         end.min = datas; //开始日选好后，重置结束日的最小日期
         end.start = datas //将结束日的初始值设定为开始日
    }
};
var end = {
    elem: '#end',
    format: 'YYYY/MM/DD hh:mm:ss',
    min: laydate.now(),
    max: '2099-06-16 23:59:59',
    istime: true,
    istoday: false,
    choose: function(datas){
        start.max = datas; //结束日选好后，重置开始日的最大日期
    }
};
laydate(start);
laydate(end);


// 关闭按钮
function y_close_btn(){ 
 layer.closeAll();  
}
// 订单调价
function y_alterprice(){
    layer.open({
        type: 1,
        title: ['订单调价'],
        area: ['480px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_alterprice') 
    });
}

// 异议处理
 function y_delorder(){
    layer.open({
        type: 1,
        title: ['异议处理'],
        area: ['420px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder') 
    });
}
// 异议处理
 function y_delorder2(){
    layer.open({
        type: 1,
        title: ['异议处理'],
        area: ['420px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder2') 
    });
}
// 确认付款
 function y_delorder3(){
    layer.open({
        type: 1,
        title: ['确认付款'],
        area: ['420px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder3') 
    });
}
// 确认退板
 function y_delorder4(){
    layer.open({
        type: 1,
        title: ['退板'],
        area: ['420px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder4') 
    });
}

// 平台介入
 function y_delorder5(){
    layer.open({
        type: 1,
        title: ['提示'],
        area: ['360px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder5') 
    });
}

// 同意退板
 function y_delorder6(){
    layer.open({
        type: 1,
        title: ['同意退板'],
        area: ['440px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder6') 
    });
}

// 修正金额
 function y_delorder7(){
    layer.open({
        type: 1,
        title: ['修正金额'],
        area: ['440px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder7') 
    });
}

// 添加车辆信息
 function y_delorder8(){
    layer.open({
        type: 1,
        title: ['添加车辆信息'],
        area: ['580px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder8') 
    });
}

//提交出库申请
function y_cksq(){
    layer.open({
        type: 1,
        title: ['提示'],
        area: ['250px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_cksq') 

    });
}

// 交易评价-弹框
function y_evaluate(){
    layer.open({
        type: 1,
        title: ['交易评价'],
        area: ['340px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_evaluate') 

    });
}

// 退租托盘
function y_surereturn(){
    layer.open({
        type: 1,
        title: ['退租托盘'],
        area: ['230px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_surereturn') 

    });
}
// 延时收板
function t_yssh(){
    layer.open({
        type: 1,
        title: ['提示'],
        area: ['330px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_yssh') 
    });
}

//可输入剩余文字提示
function countChar(textareaName,spanName) 
{ 
document.getElementById(spanName).innerHTML = 150 - document.getElementById(textareaName).value.length; 
} 


//搜索托盘转入方
function t_ddqylist(){
    layer.open({
        type: 1,
        title:['企业列表'],
        area: ['550px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_ddqylist') 

    });
}
//隐藏结果
function hideEWM() {
document.getElementById("EWM").style.display = 'none';
}
function hideEWM2() {
document.getElementById("EWM2").style.display = 'none';
}
//退租托盘
function t_ddtztp(){
    layer.open({
        type: 1,
        title:['退租托盘'],
        area: ['380px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#t_ddtztp') 

    });
}

//取消订单
function y_qxorder(){
    layer.open({
        type: 1,
        title: ['提示'],
        area: ['250px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_qxorder') 

    });
}

// 确认付款
 function y_surepay(){
    layer.open({
        type: 1,
        title: ['确认付款'],
        area: ['420px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_surepay') 
    });
}


// 取消运单
 function y_cancelorder(){
    layer.open({
        type: 1,
        title: ['取消运单'],
        area: ['420px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_cancelorder') 
    });
}

// 车辆信息列表-弹框
function car_list(){
    layer.open({
        type: 1,
        title: false,
        closeBtn:false,
        area: ['650px', '500px'],
        shadeClose: true, //点击遮罩关闭
        content: $('#car_list') 
    });
}
// 确认运单
 function y_sureyd(){
    layer.open({
        type: 1,
        title: ['确认运单'],
        area: ['380px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_sureyd') 
    });
}
// 修改运单
 function y_editoryd(){
    layer.open({
        type: 1,
        title: ['修改运单'],
        area: ['380px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_editoryd') 
    });
}

// 确认到货
 function y_suregoods(){
    layer.open({
        type: 1,
        title: ['确认到货'],
        area: ['320px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_suregoods') 
    });
}

//平台介入
function z_prompt2(){
    layer.open({
        type: 1,
        title: ['提示'],
        area: ['350px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#z_prompt2') 

    });
}


// 添加司机信息
 function y_delorder00(){
    layer.open({
        type: 1,
        title: ['添加司机信息'],
        area: ['580px', ''],
        shadeClose: true, //点击遮罩关闭
        content: $('#y_delorder00') 
    });
}
// 司机信息列表-弹框
function cardriver_list(){
    layer.open({
        type: 1,
        title: false,
        closeBtn:false,
        area: ['650px', '500px'],
        shadeClose: true, //点击遮罩关闭
        content: $('#cardriver_list') 
    });
}