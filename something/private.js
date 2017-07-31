/**
 * @author liuyongshun
 * 类似jq的写法，封装了一些关于字符操作的方法。
 * 并且后续会拓展更多方法，且有些方法可以实现链式调用。
 * 尚未写extend模块，暂不允许自定义拓展。
 */
(function (win) {

  var STR = function () {
    return new STR.fn.init();
  };

  STR.fn = STR.prototype = {

    init: function () {

      return this;

    },
    /**
     * mui的picker的数据的属性必须用text。封装一个属性替换的函数。该函数可以自定义替换和被替换内容。
     * @param {[Array, Object, string]}   data
     * @param {string}                    target                   [The original content]
     * @param {string}                    dest                     [The objective content]
     * @param {function}                  modifyDataForPicker
     * @return {[Array, Object, string]}                           [destination string]
     */
    modifyDataForPicker: function (data, target, dest) {

      var reg = new RegExp(target, "g");

      if (typeof data === 'string') {

        return data.replace(reg, dest);

      } else if (typeof data === 'object') {

        var switchDataContent = JSON.stringify(data).replace(reg, dest);
        var parseData = JSON.parse(switchDataContent);
        return parseData;

      }

    },
    loadPageVar: function (sVar) {
      console.log(arguments.length)
      return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    },
    /**
     * remove white space
     * @param  {string} str [The original string]
     * @return {string}     [The objective string]
     */
    trim: function (str) {
      return str.replace(/(^\s*)|(\s*$)/g, "");
    }

  };

  // init的prototype 指向 STR的prototype
  STR.fn.init.prototype = STR.fn;

  // 为了实现全局调用
  win._STR = STR();

})(window);
