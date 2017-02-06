
var lottery={
    index:0,    //��ǰת�����ĸ�λ�ã����λ��
    count:0,    //�ܹ��ж��ٸ�λ��
    timer:0,    //setTimeout��ID����clearTimeout���
    speed:2,    //��ʼת���ٶ�
    times:0,    //ת������
    cycle:30,    //ת��������������������Ҫת�����ٴ��ٽ���齱����
    prize:-1,    //�н�λ��
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
        return false;
    }
};

function roll() {
    lottery.times += 1;
    lottery.roll();
    if (lottery.times > lottery.cycle + 10 && lottery.prize === lottery.index) {
        clearTimeout(lottery.timer);
        lottery.prize = -1;
        lottery.times = 0;
        click=false;        
    } else {
        if (lottery.times < lottery.cycle) {
            lottery.speed -= 10;
        } else if (lottery.times === lottery.cycle) {
            var index = Math.random() * (lottery.count) | 0;
            lottery.prize = index;        
        } else {
            if (lottery.times > lottery.cycle + 10 && ((lottery.prize === 0 && lottery.index === 7) || lottery.prize === lottery.index + 1)) {
                lottery.speed += 110;
            } else {
                lottery.speed += 20;
            }
        }
        if (lottery.speed < 40) {
            lottery.speed = 40;
        }
        lottery.timer = setTimeout(roll,lottery.speed);
    }
    return false;
}


var click=false;
window.onload=function(){
    if (click) {
        return false;
    }else{
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
// // ֻҪnew���ʽ֮���constructor���أ�return��һ�����ö������飬���󣬺����ȣ�����������new��������������������أ�return��һ��ԭʼ���ͣ���returnʱ��ʵΪreturnԭʼ����undefined������ô�ͷ���new��������������
// // ˵���˾��ǣ�new F()���û�з���ֵ(Undefined����)���򷵻�ֵ��5�ֻ����ͣ�Undefined���͡�Null���͡�Boolean���͡�Number���͡�String���ͣ�֮һ����new F()���ǿ��Կ�����ԭ����չ�����е�this; ��������������鰡������ʲô�ģ��򷵻�ֵ������Щ��������ʱnew F() �� this��
// // ����
// var F = function(id) {
//     return document.getElementById(id);
// };
// new F("image1") == document.getElementById("image1");    // true ˵������ȥ����DOM����ʵ��ȷʵ����DOM����
// var F = function(id) {
//     return id;
// };
// new F("image1") == "image1";    // false ˵������ȥ�����ַ���ֵ��ʵ�ʲ������ַ���

// // �ٴη�װ
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

// new F("image").hide();    // ���㻹������

// // ��newʲôʲô����$�����а�~
// var $ = function(id) {
//     return new F(id);
// };
