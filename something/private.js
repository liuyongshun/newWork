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

   reg = new RegExp(target, "g");

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
