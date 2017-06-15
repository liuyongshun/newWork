/**优点：
*1. 提升性能，只在父元素添加了一个点击事件，子元素没有添加事件，而是通过判断不同的元素来执行不同的任务。
*2. 新添加的元素还会有之前的事件。
*/
/** 适合范围：
 *click，mousedown，mouseup，keydown，keyup，keypress。
 * 不适合：
 * mousemove，每次都要计算它的位置。mouseover和mouseout虽然也有事件冒泡，但需要经常计算它们的位置。focus，blur之类的，本身就没用冒泡的特性。
 */
/**
 * 事件委托: 避免对特定的每个节点添加事件监听器；相反，事件监听器是被添加到它们的父元素上。
 * IE8及一下，不考虑.（监听事件：attachEvent； 目标事件：e.srcElement = e.target）
 * exmple1: simple event proxy
 */
var parent = document.getElementById("parent");
parent.addEventListener("click", function(e) {
    //nodeName return UpperCase and don't use lowerCase
    if(e.target && e.target.nodeName == "LI") {
        console.log(2)
    }
}, false);

/**
 *exmple2:
 */
 parent.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName.toLowerCase() === 'li') {
        // 一、不同li添加不同事件
        var classes = e.target.className.split(' ');
        // 给类名为list1的li添加点击执行的内容
        if(classes) {
            for(var i = 0; i < classes.length; i++) {
                if(classes[i] == "list1") {
                    console.log('click list1');
                }
            }
        }

        // 二、li添加相同事件，不需要做单独的判断了。
        console.log('click li all of ID equal parent')

        // 三、具有某些相同类名的li添加执行内容
        if(classes) {
            for(var i = 0; i < classes.length; i++) {
                if(classes[i] == "pub") {
                    console.log('click list1');
                }
            }
        }
    }
 });


/**
 * return
 * 1. return false : 可以防止默认的事件行为(a的连接，buton的默认事件); js中阻止表单提交
 * 2. retrun true； 返回正确的处理结果。
 */

// 即使a函数返回return false 阻止提交了，但是不影响b()以及c()函数的执行。总之：return false 只在当前函数有效，不会影响其他外部函数的执行。
function a () {
    return false;
}
function Test () {
   a();
   b();
   c();
}

