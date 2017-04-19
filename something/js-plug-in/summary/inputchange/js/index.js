// var delay;
// ( function() {
//     var change = document.getElementsByName( 'change' );
//     for ( var i = 0; i < change.length; i ++ ) {
//         change[i].onkeyup = function() {
//             if( this.value == '' ) {
//                 console.log( 'null' );
//                 return false;
//             }
//             var inputValue = this.value,
//                 startValue = parseInt( inputValue.substring( 0, 1 ) ),
//                 patt = /\D\.+?/g,
//                 compare = patt.exec( inputValue );
//             if( startValue === 0 ) {
//                 this.value = '';
//                 clearTimeout( delay );
//                 // 可以自己定义弹框提示
//                 console.log( 'null' )
//                 alert( '开头不能为0' );
//             } else if ( compare ) {
//                 this.value = '';
//                 clearTimeout( delay );
//                 // 可以自己定义弹框提示
//                 console.log( 'defeat' )
//                 alert( '请输入正确的数值' );
//                 console.log(0)
//                 return false
//             } else {
//                 clearTimeout( delay );
//                 delay = setTimeout( function() {
//                 // 每次输入的值都有一秒的延时,等待继续输入,超过一秒就执行排序,成功后弹出提示
//                 console.log( 'success' );
//                 alert( '排序成功' );
//                 }, 1000 );
//             }
//         }
//     }
// } )();
(function() {
    var delay,
    obj = function(select) {
        return new obj.fn.init(select);
    }
    obj.fn = obj.prototype;

    obj.fn.init = function(select) {
        this.ele = document.getElementById(select);
        this.inputValue = this.ele.value;
        this.startValue = parseInt(this.inputValue.substring(0, 1));
        this.patt = /\D/g;
        this.compare = this.patt.test(this.inputValue);
        return this;
    }
    obj.fn.judge = function() {
        if (this.startValue === 0) {
            this.clear();
            alert('hhhddh');
            return false;
        } else if (this.compare) {
            this.clear();
            alert('请输入正确的数值');
            return false;
        } else {
            return true;
        }
    }
    obj.fn.clear = function() {
        this.ele.value = '';
        clearTimeout(delay);
    }
    obj.fn.init.prototype = obj.fn;

var current = obj('change')
    if (document.addEventListener) {
        obj('change').ele.addEventListener('keyup', function() {
            if (!obj('change').judge()) {
                obj('change').clear()
            } else {
                current.clear()
                delay = setTimeout(function() {
                    // obj.change.value = '';
                    alert('排序成功');
                    return false
                }, 1000);
            }
        });
    }
})();
