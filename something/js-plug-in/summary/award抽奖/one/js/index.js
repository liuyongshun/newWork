
var lottery={
    index:0,    //当前转动到哪个位置，起点位置
    count:0,    //总共有多少个位置
    timer:0,    //setTimeout的ID，用clearTimeout清除
    speed:20,    //初始转动速度
    times:0,    //转动次数
    cycle:30,    //转动基本次数：即至少需要转动多少次再进入抽奖环节
    prize:-1,    //中奖位置
    init:function(id) {
        var ele = document.getElementById(id);
        if (ele.children.length>0) {
            this.obj = ele;
            this.count = ele.children.length;
            document.querySelectorAll(".lottery-unit-" + this.index)[0].className = "active " + "lottery-unit-" + this.index + " lottery-unit";
        }
    },

    roll:function() {
        var index = this.index;
        var count = this.count;
        document.querySelectorAll(".lottery-unit-" + index)[0].className = "lottery-unit-" + index + " lottery-unit";
        index += 1;
        if (index > count - 2) {
            index = 0;
        }
        document.querySelectorAll(".lottery-unit-" + index)[0].className = "active " + "lottery-unit-" + index + " lottery-unit";
        this.index=index;
    }
};

function roll(){
    lottery.times += 1;
    lottery.roll();
    if (lottery.times > lottery.cycle+10 && lottery.prize==lottery.index) {
        clearTimeout(lottery.timer);
        lottery.prize=-1;
        lottery.times=0;
    } else {
        if (lottery.times<lottery.cycle) {
            lottery.speed -= 10;
        } else if (lottery.times==lottery.cycle) {
            var index = Math.random()*(lottery.count)|0;
            lottery.prize = index;        
        } else {
            if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1)) {
                lottery.speed += 110;
            } else {
                lottery.speed += 20;
            }
        }
        if (lottery.speed<40) {
            lottery.speed=40;
        }
        lottery.timer = setTimeout(roll,lottery.speed);
    }
}

window.onload=function(){
    lottery.init("lottery");
    var start = document.querySelector(".start");
    if (document.addEventListener) {
        start.addEventListener("click", function() {
            lottery.speed=100;
            roll();
        });
    } else {
        start.attachEvent("onclick", function() {
            lottery.speed=100;
            roll();                
        });
    }

};


// var $ = function(id) {
//     return document.getElementById(id);
// };
// var F = function() {};
// F.prototype.hide = function() {
//     this.style.display = "none";
// };
// new F().hide();
// // 只要new表达式之后的constructor返回（return）一个引用对象（数组，对象，函数等），都将覆盖new创建的匿名对象，如果返回（return）一个原始类型（无return时其实为return原始类型undefined），那么就返回new创建的匿名对象。
// // 说白了就是，new F()如果没有返回值(Undefined类型)，或返回值是5种基本型（Undefined类型、Null类型、Boolean类型、Number类型、String类型）之一，则new F()我们可以看成是原型扩展方法中的this; 如果返回是是数组啊、对象啊什么的，则返回值就是这些对象本身，此时new F() ≠ this。
// // 例子
// var F = function(id) {
//     return document.getElementById(id);
// };
// new F("image1") == document.getElementById("image1");    // true 说明看上去返回DOM对象，实际确实就是DOM对象
// var F = function(id) {
//     return id;
// };
// new F("image1") == "image1";    // false 说明看上去返回字符串值，实际并不是字符串

// // 再次封装
// var F = function(id) {
//     return this.getElementById(id);
// };
// F.prototype.getElementById = function(id) {
//     this.element = document.getElementById(id);
//     return this;
// };
// F.prototype.hide = function() {
//     this.element.style.display = "none";
// };

// new F("image").hide();    // 看你还不隐藏

// // 把new什么什么藏在$方法中把~
// var $ = function(id) {
//     return new F(id);
// };
