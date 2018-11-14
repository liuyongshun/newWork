/**
 * @author liuyongshun
 * 类似jq的写法，封装了一些关于字符操作的方法。
 * 并且后续会拓展更多方法，且有些方法可以实现链式调用。
 * 尚未写extend模块，暂不允许自定义拓展。
 */
// (function (win) {

//   'use strict';

//   var STR = function () {

//     return new STR.fn.init();

//   };

//   STR.fn = STR.prototype = {
    /**
     * mui的picker的数据的属性必须用text。封装一个属性替换的函数。该函数可以自定义替换和被替换内容。
     * @param {[Array, Object, String]}   data
     * @param {String}                    target                   [The original content]
     * @param {String}                    dest                     [The objective content]
     * @param {Function}                  modifyDataForPicker
     * @return {[Array, Object, String]}                           [destination string]
     */
//     init: function () {

//       return this;

//     },
//     /**
//      * mui的picker的数据的属性必须用text。封装一个属性替换的函数。该函数可以自定义替换和被替换内容。
//      * @param {[Array, Object, string]}   data
//      * @param {string}                    target                   [The original content]
//      * @param {string}                    dest                     [The objective content]
//      * @param {function}                  modifyDataForPicker
//      * @return {[Array, Object, string]}                           [destination string]
//      */
//     modifyDataForPicker: function (data, target, dest) {

//       var reg = new RegExp(target, "g");

//       if (typeof data === 'string') {

//         return data.replace(reg, dest);

//       } else if (typeof data === 'object') {

//         var switchDataContent = JSON.stringify(data).replace(reg, dest);
//         var parseData = JSON.parse(switchDataContent);
//         return parseData;

//       }

//     },
//     loadPageVar: function (sVar) {
//       console.log(arguments.length)
//       return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
//     },
//     /**
//      * remove white space
//      * @param  {string} str [The original string]
//      * @return {string}     [The objective string]
//      */
//     trim: function (str) {
//       return str.replace(/(^\s*)|(\s*$)/g, "");
//     },


//   };

//   // init的prototype 指向 STR的prototype
//   STR.fn = STR.fn.init.prototype;

//   // 为了实现全局调用
//   win._STR = STR();

// })(window);
/**
 * mui的picker的数据的属性必须用text。封装一个属性替换的函数。该函数可以自定义替换和被替换内容。
 * @param {[Array, Object, string]}   data
 * @param {string}                    target                   [The original content]
 * @param {string}                    dest                     [The objective content]
 * @param {function}                  modifyDataForPicker
 * @return {[Array, Object, string]}                           [destination string]
 * 匹配内容，并替换，字符串，数组，对象均可。
 */
function modifyDataForPicker (data, target, dest) {
  var reg,
      switchDataContent,
      parseData;

  if (typeof target !== 'string') {
    reg = target;
  } else {
    reg = new RegExp(target, "g");
  }

  if (typeof data === 'string') {
    return data.replace(reg, dest);

  } else if (typeof data === 'object') {
    switchDataContent = JSON.stringify(data).replace(reg, dest);
    parseData = JSON.parse(switchDataContent);
    return parseData;
  }
}
/**
 * [loadPageVar description]
 * @param  {[type]} sVar [param key]
 * @return {[type]}      [value]
 * 截取url上的参数值。
 */
function loadPageVar (sVar) {
  console.log(arguments.length)
  return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
/**
 * remove white space
 * @param  {string} str [The original string [necessary]]
 * @return {number} type   [The type of remove white space [select]]
 * 只有一个参数默认移除在字符串前后空格；
 * type : 1 移除所有空格；
 * type : 2 移除前面的空格；
 * type : 3 移除后面的所有空格；
 */
function trim(str, type) {
  var length = arguments.length;

  if (typeof str === 'string') {
    if (length === 1) {
      return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    switch (type) {
        case 1:
        return str.replace(/\s+/g,"");
        case 2:
        return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
        return str.replace(/(\s*$)/g, "");
        default:
        return str;
    }

  } else {
    console.info('请输入正确的字符串格式');
  }
}

/**
 * [toggleCase first letter to upper]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 * 首字母大写。
 */
function toggleCase (str) {
  var pattern;
  pattern = /\b\w+\b/g;

  return str.replace(pattern, function (str) {
    return str.substring(0,1).toUpperCase() + str.substring(1);
  });
}

/**
 * 1. 手机号隐藏hideNumber ('18330235246', 0) ：183*****246 ; 必须是合格的手机号，加了正则限定。
 * 2. 姓名隐藏hideNumber ('刘二狗', 1) ：刘**
 * 3. 自定义：hideNumber('sdfslf', [2, 4],'-',8) ：字符串、开始和结束的位置、代替样式、该样式出现的次数。
 */
function hideNumber (str, pos, sty, styCount) {
  var argLength, strLength, mobileReg, checkType, defaultSty, endPos;

  argLength = arguments.length;
  strLength = str.length;
  mobileReg = /^1[3|4|5|7|8][0-9]{9}$/;
  checkType = typeof str;

  function strRepeat(str, count) {
    var text = '';
    for (var i = 0; i < count; i ++) {
        text += str;
    }
    return text;
  }

  if (checkType === 'string' || checkType === 'number') {

    if (argLength === 2 && mobileReg.test(str) && pos === 0) {
      defaultSty = strRepeat('*', 5);
      return str.replace(/(\d{3})(\d{5})(\d{3})/, '$1' + defaultSty + '$3');
    }

    if (argLength === 2 && pos === 1) {
      defaultSty = strRepeat('*', 2);
      str = str.substring(0,1) + defaultSty;
      return str;
    }

    if (argLength === 4) {
      defaultSty = strRepeat(sty, styCount);
      if (pos.length === 2 && pos[1] > pos[0]) {
        endPos = pos[1] - pos[0];
        return str.replace(new RegExp('(\.{' + pos[0] + '})(\.{' + endPos + '})(\.?)'), '$1' + defaultSty + '$3');
      }
    }

  } else {
    console.log('请输入正确的字符串');
  }

}

/**
 * 表单验证。
 */
function checkForm(str, type) {
  switch (type) {
      case 'email':
          return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
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
      case 'lower':
          return /^[a-z]+$/.test(str);
      case 'upper':
          return /^[A-Z]+$/.test(str);
      default :
          return true;
  }
}
/**
 * 密码强度检测。
 */
function checkPwd(str) {
    var nowLv = 0;
    if (str.length < 6) {
        return nowLv
    }
    if (/[0-9]/.test(str)) {
        nowLv++
    }
    if (/[a-z]/.test(str)) {
        nowLv++
    }
    if (/[A-Z]/.test(str)) {
        nowLv++
    }
    if (/[\.|-|_]/.test(str)) {
        nowLv++
    }
    return nowLv;
}

/**
 * 数组去重 ,针对字符串，数字等。
 */
function unique (arr) {
    var res =[];
    var obj = {};

    for (var i = 0; i < arr.length; i ++) {
        if (!obj[arr[i]]) {
          res.push(arr[i]);
          // to get effective property
          obj[arr[i]] = 1;
        }
　　}
　　return res;
}
function unique (arr) {
    var newArr = [arr[0]];
    for (var i = 1; i < arr.length; i ++) {
      if (newArr.indexOf(arr[i]) == -1) {
          newArr.push(arr[i]);
      }
    }
    return newArr;
}


/**
 * 数组去重 ,通用
 */
function generalMethod (arr) {

    var dest = [arr[0]];
    var repeat;

    for (var i = 1; i < arr.length; i ++) {
　　　　var repeat = false;
　　　　for (var j = 0; j < dest.length; j ++) {
　　　　　　if (arr[i] == dest[j]) {
　　　　　　　　repeat = true;
　　　　　　　　break;
　　　　　　}
　　　　}
　　　　if (!repeat) {
　　　　　　dest.push(arr[i]);
　　　　}
　　}
　　return dest;

}

/**
 * 数组最大值最小值
 */
 function maxArr (arr) {
     return Math.max.apply(null,arr);
 }
 function minArr (arr) {
     return Math.min.apply(null,arr);
 }
/**
 * 数组排序
 */

function minToMax (arr) {
  function sortNumber (a, b) {
    return a - b;
  };
  arr.sort(sortNumber);
  return arr;
}

/**
 * 字符串出现次数最多
 */

var str = 'cccddddaaaaaaa f';
var arr = [];
var length = str.length;
// 循环遍历字符串
for (var i = 0; i < length; i++) {
  var index = -1;
  var j = 0;

  for (var k = length; k > 0; k --) {
    index = str.indexOf(str[i], index + 1);
    if (index != -1) {
      j++;
      // debugger;
      arr[j] = str[i];
    } else {
      break;
    }

  }
  //找每一个字符
}
// for (var i = 0, length = str.length; i < length; i++) {
// var index = -1;
// var j = 0;
// //找每一个字符
// do {
// index = str.indexOf(str[i], index + 1);
// if (index != -1) {
// j++;
// }
// }while (index != -1);
// arr[j] = str[i]; //把字符串str中的字符赋给数组arr索引为j的数据，当多次循环后，会出现重复赋值的现象，　　　　　　　　　　　　　　　　　　//后赋值的会把之前的赋值覆盖掉，但不影响我们找出字符出现最多的那个
// }
console.log(arr);
console.log("最多的字符是" + arr[arr.length - 1]);
console.log("次数是" + (arr.length - 1));

console.log(Math.max.apply(null, [1,2,3,5,5]))
