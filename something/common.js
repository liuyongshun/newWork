/**
 * 前端开发部常用函数整理汇总，前端人员定期完善
 * @authors zzw (1183106200@qq.com)
 * @date    2017-11-23
 * @version 1.0
 */
var GLOBAL = {};//全局对象，存放所有全局变量、方法
    GLOBAL.str = {};//存放全局变量
    GLOBAL.fun = {};//存放全局方法
    GLOBAL.obj = {};//存放全局对象

/**
 * 获取、设置url中参数值
 *
 * @param    {String}  sVar     url中参数
 *
 * @date     2017-11-23
 * @author
 */
//获取对应参数
//Details.html?bargainingid=318
//getUrlPrmt('bargainingid')
//318
GLOBAL.fun.getUrlPrmt = function (sVar) {
    return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
//设置url参数
//setUrlPrmt({'a':1,'b':2})
//a=1&b=2
GLOBAL.fun.setUrlPrmt = function (obj) {
    let _rs = [];
    for (let p in obj) {
        if (obj[p] != null && obj[p] != '') {
            _rs.push(p + '=' + obj[p])
        }
    }
    return _rs.join('&');
}
/**
 * 获取页面可视高度、宽度
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.getPageViewHeight = function () {
    var d = document, a = d.compatMode == "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientHeight;
}
GLOBAL.fun.getPageViewWidth = function () {
    var d = document, a = d.compatMode == "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientWidth;
}
/**
 * 字符串长度截取，超出部分用“...”
 *
 * @param    {String}  str     需要截取的字符串
 * @param    {Number}  len     需要截取的长度
 *
 * @date     2017-11-23
 * @author
 */
//cutStr('我是示例'，'4')
//我是...
GLOBAL.fun.cutStr = function (str, len) {
    if(str.length*2<=len){
        return str
    }else {
        var temp,
            icount = 0,
            patrn = /[^\x00-\xff]/,
            strre = "";
        for (var i = 0; i < str.length; i++) {
            if (icount < len - 1) {
                temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                    icount = icount + 1
                } else {
                    icount = icount + 2
                }
                strre += temp
            }
            else {
                break;
            }
        }
        return strre + "..."
    }
}

/**
 * ajax获取接口字典中的数据，并替换成mui picker对应格式[{"text":"","value":""},{"text":"","value":""}]
 *
 * @param    {String}  interface     字典接口
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.ajaxDictionary = function (interface) {
    var picker = [];
    $(document).ready(function(){
        $.ajax({
            url: ajaxUrl + 'Home/'+interface,
            type: 'POST',
            dataType: 'json',
            success:function (data) {
                // console.log(data);
                for (var i=0; i<data.data.length; i++){
                    var picker_o = {};
                    picker_o.text = data.data[i].name;
                    picker_o.value = data.data[i].id;
                    picker[i] = picker_o;
                }
            }
        })
    });
    return(picker);
}

/**
 * localStorage存储、获取，默认存储24小时
 *
 * @param    {String}  key     关键字
 * @param    {String}  value   值
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.setlocalStorage = function (key,value){
    var curTime = new Date().getTime();
    localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
}

GLOBAL.fun.getlocalStorage = function (key) {
    var exp = 1000*60*60*24;
    var data = localStorage.getItem(key);
    if(data){
        var dataObj = JSON.parse(data);
        if (new Date().getTime() - dataObj.time>exp) {
            localStorage.clear();//信息已过期清楚缓存
        }else{
            return dataObj;
        }
    }
}

/**
 * cookies存储、获取、删除
 *
 * @param    {String}  name    关键字
 * @param    {String}  value   值
 * @param    {String}  value   时间（单位天）
 *
 * @date     2017-11-23
 * @author
 */
//写cookies方法
GLOBAL.fun.setCookie = function (name,value,iDay) {
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+'='+value+';expires='+oDate;
}
//读cookies方法
GLOBAL.fun.getCookie = function (name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
//删除cookies方法
GLOBAL.fun.delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GLOBAL.fun.getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
/**
 * 去除字符串空格
 *
 * @param    {String}  str    字符串
 * @param    {Number}  type   数字  1-所有空格  2-前后空格  3-前空格 4-后空格
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.trim = function (str,type) {
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
}

/**
 * 随机返回一个范围的数字
 *
 * @param    {Number}  n1,n2    数字
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.randomNumber = function (n1,n2) {
    //randomNumber(5,10)
    //返回5-10的随机整数，包括5，10
    if(arguments.length===2){
        return Math.round(n1+Math.random()*(n2-n1));
    }
    //randomNumber(10)
    //返回0-10的随机整数，包括0，10
    else if(arguments.length===1){
        return Math.round(Math.random()*n1)
    }
    //randomNumber()
    //返回0-255的随机整数，包括0，255
    else{
        return Math.round(Math.random()*255)
    }
}

/**
 * 随机产生颜色
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.randomColor = function () {
    //randomNumber是上面定义的函数
    //写法1
    // return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';

    //写法2
    return '#'+Math.random().toString(16).substring(2).substr(0,6);

    //写法3
    // var color='#';
    // for(var i=0;i<6;i++){
    //     color+='0123456789abcdef'[randomNumber(15)];
    // }
    // return color;
}

/**
 * 适配rem，效果图以720px为基数
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.getFontSize = function () {
    var doc=document,win=window;
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //如果屏幕大于720，设置clientWidth=720，防止font-size会超过100px
            if(clientWidth>720){clientWidth=720}
            //设置根元素font-size大小
            docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
        };
    //屏幕大小改变，或者横竖屏切换时，触发函数
    win.addEventListener(resizeEvt, recalc, false);
    //文档加载完成时，触发函数
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
GLOBAL.fun.getFontSize();

/**
 * 字母大小写切换
 *
 * @param    {Number}  type    数字 1:首字母大写、2：首页母小写、3：大小写转换、4：全部大写、5：全部小写
 *
 * @date     2017-11-23
 * @author
 */
//changeCase('asdasd',1)
//Asdasd
GLOBAL.fun.changeCase = function (str,type) {
    function ToggleCase(str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else{
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * 字符串替换
 *
 * @param    {String}  str         字符串
 * @param    {String}  AFindText   要替换的字符
 * @param    {String}  ARepText    替换成什么
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.replaceAll = function (str,AFindText,ARepText) {
    raRegExp = new RegExp(AFindText,"g");
    return str.replace(raRegExp,ARepText);
}

/**
 * 字符串正则验证
 *
 * @param    {String}  str
 * @param    {String}  type
 * @date     2017-11-23
 * @author
 */
//checkType('165226226326','phone')
//false
GLOBAL.fun.checkType = function (str, type) {
    switch (type) {
        case 'email':
            return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'idCard'://身份证号正则
            return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(str);
        case 'url'://网址正则
            return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(str);
        case 'qq'://qq号正则 5至11位
            return /^[1-9][0-9]{4,10}$/.test(str);
        case 'wx'://微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
            return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(str);
        case 'carNumber'://车牌号正则
            return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(str);
        default :
            return true;
    }
}

/**
 * 返回顶部
 *
 * @param    {String}  btnId 控件id
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.backTop = function (btnId) {
    var btn = document.getElementById(btnId);
    var d = document.documentElement;
    var b = document.body;
    window.onscroll = set;
    btn.style.display = "none";
    btn.onclick = function() {
        btn.style.display = "none";
        window.onscroll = null;
        this.timer = setInterval(function() {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
        }, 10);
    };
    function set() {
        btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block': "none"
    }
}

/**
 * 清除对象中值为空的属性
 *
 * @param    {Object}  obj
 *
 * @date     2017-11-23
 * @author
 */
GLOBAL.fun.filterParams = function (obj) {
    let _newPar = {};
    for (let key in obj) {
        if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            _newPar[key] = obj[key];
        }
    }
    return _newPar;
}
/**
 * 数组操作，去重、排序、交集、差集、并集、对象数组排序
 *
 * @param    {Array}  arr
 *
 * @date     2017-11-23
 * @author
 */
var arr1=[1,2,2,3,4,4,3,45,6,7,5];
var arr2=[3,4,5,6,56];
var arr3=[]
//1、去重
GLOBAL.fun.arrayUnique = function (arr) {
    var result = [];
    for(var i = 0;i<arr.length;i++){
        var temp = arr.slice(i+1,arr.length)
        if(temp.indexOf(arr[i]) == -1){
            result.push(arr[i]);
        }else{
            continue;
        }
    }
    return result;
}
// console.log(GLOBAL.fun.arrayUnique(arr1))
//2、排序
//desc不存在默认升序
//desc存在降序
GLOBAL.fun.arraySortByNum = function (arr,desc) {
    if(desc){
        return arr.sort(function(x,y){return y-x})
    }else{
        return arr.sort(function(x,y){return x-y})
    }
}
// console.log(GLOBAL.fun.arraySortByNum(arr1));
//3、交集
GLOBAL.fun.arrayIntersection = function (arr1,arr2) {
    var result = [];
    GLOBAL.fun.arrayUnique(arr1).forEach(function(x){
        arr2.forEach(function(y){
            if(x===y)result.push(x);
        })
    })
    return result;
}
// console.log(GLOBAL.fun.arrayIntersection(arr1,arr2))
//4、差集 arr1-arr2
GLOBAL.fun.arrayMinus = function (arr1, arr2) {
    var result = [];
    arr1.forEach(function (x) {
        if (arr2.indexOf(x) === -1){
            result.push(x);
        }else {
            return;
        }
    })
    return result;
}
// console.log(GLOBAL.fun.arrayMinus(arr1,arr2))
//5、并集，参数可以多个
GLOBAL.fun.arrayUnion = function () {
    console.log(arguments)
    var arr = [];
    for (var i=0;i<arguments.length;i++){
        arr = arr.concat(arguments[i])
    }
    return GLOBAL.fun.arrayUnique(arr);
}
// console.log(GLOBAL.fun.arrayUnion(arr1,arr2));
//6、对象数组快速排序
//key 排序依据关键字
//desc不存在默认升序
//desc存在降序
GLOBAL.fun.arrayObjSort = function (arr,key,desc) {
    key=key||'id';
    desc=desc|| null;
    if (arr.length == 0) return [];

    var left = new Array();
    var right = new Array();
    var pivot = arr[0][key];//分割值
    var pivotObj = arr[0];//存储值

    if(desc===null){//升序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] < pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }else{//降序
        for (var i = 1; i < arr.length; i++) {
            arr[i][key] > pivot ? left.push(arr[i]): right.push(arr[i]);
        }
    }
    return GLOBAL.fun.arrayObjSort(left,key,desc).concat(pivotObj, GLOBAL.fun.arrayObjSort(right,key,desc));
}
/**
 * tab切换
 *
 * @param    {name}  String  tab容器标识，用来明确当前tab
 * @param    {currentId}  Number  当前tab id
 * @param    {total}  Number  tab总数
 *
 * @date     2017-11-23
 * @author
 */
//操作容器
// <li id="pro1" onclick="setTab('pro',1,3)" class="hover">装货信息</li>
// <li id="pro2" onclick="setTab('pro',2,3)">卸货信息</li>
// <li id="pro3" onclick="setTab('pro',3,3)">承运方信息</li>
//显示容器
// <div id="con_pro_1" class="tabList"  style="display: block">
// <div id="con_pro_2" class="tabList"  style="display: none">
// <div id="con_pro_3" class="tabList"  style="display: none">
GLOBAL.fun.tabSet = function (name, currentId, total) {
    for(var i = 1; i <= total; i++) {
        // 声明
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        var id = $(".hover").attr("id");
        // 操作
        menu.className = i == currentId ? "hover" : "";
        con.style.display = i == currentId ? "block" : "none";
    }
}