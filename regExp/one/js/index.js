// var str="Visit W3CSchool Visit W3CSchool Visit W3CSchool";
// var patt1=/w3cschool/i; 
// // var patt2 = /w3cschool/gi;
// console.log( str.match( patt1 ) );
// console.log( patt1.test(str) );
// console.log( patt1.exec(str) );
// console.log( str.search(patt1) );
// var n = str2.replace(/blue/gi,"red");  //+++++++++++++++++
// console.log( str.match( patt2 ) );


// // test()方法
// var str1 = "hello world I like code"
// var patt3 = /e/g;
// console.log( patt3.test() ); 

// var str2 = new RegExp( 'e' );
// console.log( str2.test() );


// exec()method
// var str4  = " hello World everyone";
// var patt4 = /wor/gi;
// console.log( patt4.exec( str4 ) );



// var str="Hello world!"
// console.log(str.match("world"))
// console.log(str.match("World"))
// console.log(str.match("worlld"))
// console.log(str.match("world!"))


// ==================================regExp the regular of regExp============================================
// var obj = {
//     getSelect: document.getElementById( 'judges' ),
//     getValue: document.getElementById( 'text' ),
//     method: function() {
//             this.getSelect.addEventListener( 'click', function() {
//             var str = this.getValue.value;
//             var patt = /\@/;            
//             var check = str.match( patt );
//             if ( !check ) {
//                 alert( 'the text of you writing is error' );
//             }
//             console.log( 'congratulate, you success!' )
//         }.bind( obj ) );
//     }
// }
// obj.method();



// // judge email format.      /[\u4e00-\u9fa5]/g g全局匹配，m匹配大小写，i匹配
var checkEmail = {
    chinese:  /[\u4e00-\u9fa5]/g,
    email:  /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    // judges为提交按钮，
    getSelect: document.getElementById( 'judges' ),
    // text为输入邮箱的input标签。
    getValue: document.getElementById( 'text' ),
    method: function() {
        var that = this;
        if( !document.addEventListener ) {
            this.getSelect.attachEvent( 'onclick', function() {
            var str = that.getValue.value;
            var patt = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;            
            var check = str.match( patt );
            console.log(check)
            if ( !check ) {
                // 换成现在用的提示效果
                alert( 'format error' );
            }           
        } );                         
        } else {
            this.getSelect.addEventListener( 'click', function() {
            var str = that.getValue.value;
            var patt = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;            
            var check = str.match( patt );
            console.log(check)
            if ( !check ) {
                 // 换成现在用的提示效果
                alert( 'format error1' );
            }
        } );   
        }
    }
};
checkEmail.method();


// // ====================practice rank========================================================
// var str = "hat hot my telephone is 12202345672  10 email: liulfjs@126.com \n liuyongshun this his at"; 
// // search 括号内任意字符，为设置g时，找到ema中的任何一个都会停止。[a-z]
// var patt = /[ema]/;
// console.log( str.match( patt ) );
// // 查找除了括号内所有的字符。[^]
// var patt1 = /[^ema]/g;
// console.log( str.match( patt1 ) );
// // 查找任何从 0 至 3 的数字。[0-5]
// var patt2 = /[0-3]/g;
// console.log( str.match( patt2 ) );
// // 查找任何指定的选项。(em|liu|shun)
// var patt3 = /(ema|is|liu)/g;
// console.log( str.match( patt3 ) );
// // 查找单个字符,除了换行和行结束符。 h.t
// var patt4 = /h.t/g;
// console.log( str.match( patt4 ) );
// // 查找单词字符。 \w(小写)
// var patt5 = /\w/g;
// console.log( str.match( patt5 ) );
// // 查找非单词字符。\W（大写）
// var patt6 = /\W/g;
// console.log( str.match( patt6 ) );
// // 查找数字\d（小写，大写是查找非数字）
// var patt7 = /\d/g;
// console.log( str.match( patt7 ) );
// var patt8 = /\D/g;
// console.log( str.match( patt8 ) );
// // 查找空白字符,包括回车
// var patt9 = /\s/g;
// console.log( str.match( patt9 ) );
// var patt00 = /\S/g;
// console.log( str.match( patt00 ) );
// // 查找换行符\n
// var patt01 = /\n/g;
// console.log( str.match( patt01 ) );
// console.log( str.search( patt01 ) );  //++++++++++++++++++
// // 匹配任何包含至少一个h的字符串 h+
// var patt02 = /h+/g;
// console.log( str.match( patt02 ) );
// var patt03 = /\w+/g;  //\w指匹配单词字符。
// console.log( str.match( patt03 ) )
// // 匹配任何结尾（整个字符串结尾）为t的字符。t$
// var patt04 = /t$/g;
// console.log( str.match( patt04 ) );
// // 匹配任何开始（整个字符串结尾）为h的字符。^h
// var patt05 = /^h/g;
// console.log( str.match( patt05 ) );
// // 匹配包含 X 个 n 的序列的字符串 n{X}
// // n{X,Y}匹配包含 X 或 Y 个 n 的序列的字符串。(筛选千和万和十万和百万)
// // n{X,}  匹配包含至少 X 个 n 的序列的字符串。
// var patt06 = /\d{11}/g;
// console.log( str.match( patt06 ) );
// // n? 匹配任何包含零个或一个 n 的字符串。
// var patt07 = /10?/g; //这里指的零个或一个0。
// console.log( str.match( patt07 ) );
// // ?=n 匹配任何其后紧接指定字符串 n 的字符串。
// var patt08 = /one(?= is)/g;
// console.log( str.match( patt08 ) );
// // ?!n 匹配其后没有紧接指定字符串 n 的任何字符串。
// var patt09 = /is(?! at)/g;
// console.log( str.match( patt09 ) );
// console.log( patt09.exec( str ) );  //++++++++++++++++++++
// console.log( patt09.test( str ) );  //++++++++++++++++++++
// var str2 = "Mr Blue has a blue house and a blue car";
// var n = str2.replace(/blue/gi,"red");  //+++++++++++++++++
// console.log( n );
// var patt10 = /./g;
// // exec匹配非全局时与match相同，匹配全局时需要反复多次调用。
// console.log( patt10.exec( str ) );
// console.log( patt10.exec( str ) );
// console.log( str.match( patt10 ) );
// var patt11 = /h(?:at|ot)/g;
// console.log( str.match( patt11 ) );