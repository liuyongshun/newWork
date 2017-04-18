// var delay;
// (function() {
//     var change = document.getElementsByName("change");
//     for(var i = 0; i < change.length; i ++) {
//         change[i].onkeyup = function() {
//             if (this.value == "") {
//                 return false;
//             }
//             var inputValue = this.value,
//                 startValue = parseInt(inputValue.substring(0, 1)),
//                 patt = /\D/g,
//                 compare = patt.exec(inputValue);
//             if (startValue === 0) {
//                 this.value = "";
//                 clearTimeout(delay);
//                 // 可以自己定义弹框提示
//                 alert("开头不能为0");
//             } else if (compare) {
//                 this.value = "";
//                 clearTimeout(delay);
//                 // 可以自己定义弹框提示
//                 alert("请输入正确的数值");
//                 return false;
//             } else {
//                 clearTimeout(delay);
//                 delay = setTimeout(function() {
//                     // 每次输入的值都有一秒的延时,等待继续输入,超过一秒就执行排序,成功后弹出提示
//                     alert("排序成功");
//                 }, 1000);
//             }
//         };
//     }
// })();
(function($) {
    var delay;
    var obj = function(select) {
        return new obj.fn.init(select)
    }
    obj.fn = obj.prototype;
    obj.fn.init = function(select) {
        var ele = $(select) || document.getElementById(select)
        this.length = ele.length
        for(var i = 0; i < this.length; i ++) {
            this[i] = ele[i]
        }
        return this
    }
    obj.fn.each = function(fn) {
        var i = 0,
        length = this.length;
        for (; i < length; i ++) {
            Things[i]
        }
    }
    // obj.fn.date = {
    //     inputValue: 1
    // }
    obj.fn.judge = function() {
        if (this.value === '') {
            return false;
        }
        console.log(this.value)
        var inputValue = this.value,
            startValue = parseInt(inputValue.substring(0, 1)),
            patt = /\D/g,
            compare = patt.exec(inputValue);

        if (startValue === 0) {
            this.value = '';
            clearTimeout(delay);
            alert('开头不能为0');
        } else if (compare) {
            this.value = '';
            clearTimeout(delay);
            // 定义任务
            alert('请输入正确的数值');
            return false;
        } else {
            clearTimeout(delay);
            delay = setTimeout(function() {
                // obj.change.value = '';
                // 每次输入的值都有一秒的延时,等待继续输入,超过一秒就执行排序,成功后弹出提示
                alert('排序成功');
            }, 1000);
        }
        return this;
    }
    obj.fn.notZero = function() {

    }
    obj.fn.init.prototype = obj.fn;
    console.log(obj.fn.judge())
    // var obj = {
    //     change: document.getElementById('change'),
    //     delay: 0,
    //     judge: function(e) {
    //         if (obj.change.value === '') {
    //             return false;
    //         }
    //         var inputValue = this.value || e.srcElement.value,
    //             startValue = parseInt(inputValue.substring(0, 1)),
    //             patt = /\D/g,
    //             compare = patt.exec(inputValue);

    //         if (startValue === 0) {
    //             obj.change.value = '';
    //             clearTimeout(obj.delay);
    //             // 可以自己定义弹框提示
    //             alert('开头不能为0');
    //         } else if (compare) {
    //             obj.change.value = '';
    //             clearTimeout(obj.delay);
    //             // 可以自己定义弹框提示
    //             alert('请输入正确的数值');
    //             return false;
    //         } else {
    //             clearTimeout(obj.delay);
    //             obj.delay = setTimeout(function() {
    //                 // obj.change.value = '';
    //                 // 每次输入的值都有一秒的延时,等待继续输入,超过一秒就执行排序,成功后弹出提示
    //                 // alert('排序成功');
    //             }, 1000);
    //         }
    //     }
    // };

    // 兼容IE事件处理
    if (document.addEventListener) {
        obj('change').addEventListener('keyup', obj.fn.judge);
    } else {
        obj('change').attachEvent('onkeyup', function() {
            obj('change').judge()
        });
    }
})(jQuery);
