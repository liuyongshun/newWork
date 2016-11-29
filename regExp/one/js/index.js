// var str="Visit W3CSchool Visit W3CSchool Visit W3CSchool";
// var patt1=/w3cschool/i; 
// var patt2 = /w3cschool/gi;
// console.log( str.match( patt1 ) );
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


// ====================practice rank========================================================
var str = "hat hot my telephone is 18330234567 email: liulfjs@126.com\n" 
// search 括号内任意字符，为设置g时，找到ema中的任何一个都会停止。[a-z]
var patt = /[ema]/;
console.log( str.match( patt ) );
// 查找除了括号内所有的字符。[^]
var patt1 = /[^ema]/g;
console.log( str.match( patt1 ) );
// 查找任何从 0 至 3 的数字。[0-5]
var patt2 = /[0-3]/g;
console.log( str.match( patt2 ) );
// 查找任何指定的选项。(em|liu|shun)
var patt3 = /(ema|is|liu)/g;
console.log( str.match( patt3 ) );
// 查找单个字符,除了换行和行结束符。 h.t
var patt4 = /h.t/g;
console.log( str.match( patt4 ) );
// 查找单词字符。 \w(小写)
var patt5 = /\w/g;
console.log( str.match( patt5 ) );
// 查找非单词字符。\W（大写）
var patt6 = /\W/g;
console.log( str.match( patt6 ) );
// 查找数字\d（小写，大写是查找非数字）
var patt7 = /\d/g;
console.log( str.match( patt7 ) );
var patt8 = /\D/g;
console.log( str.match( patt8 ) );
// 查找空白字符