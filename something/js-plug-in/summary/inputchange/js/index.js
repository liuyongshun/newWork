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
(function() {
    var obj = {
        change: document.getElementById('change'),
        delay: 0,
        judge: function(e) {
            if (obj.change.value == '') {
                return false;
            }
            var inputValue = this.value || e.srcElement.value,
                startValue = parseInt(inputValue.substring(0, 1)),
                patt = /\D/g,
                compare = patt.exec(inputValue);

            if (startValue === 0) {
                obj.change.value = '';
                clearTimeout(obj.delay);
                // 可以自己定义弹框提示
                alert('开头不能为0');
            } else if (compare) {
                obj.change.value = '';
                clearTimeout(obj.delay);
                // 可以自己定义弹框提示
                alert('请输入正确的数值');
                return false;
            } else {
                clearTimeout(obj.delay);
                obj.delay = setTimeout(function() {
                    obj.change.value = '';
                    // 每次输入的值都有一秒的延时,等待继续输入,超过一秒就执行排序,成功后弹出提示 
                    alert('排序成功');
                }, 1000);
            }
        }
    };
    
    // 兼容IE事件处理
    if (document.addEventListener) {
        obj.change.addEventListener('keyup', obj.judge);
    } else {
        obj.change.attachEvent('onkeyup', obj.judge);
    }
})();