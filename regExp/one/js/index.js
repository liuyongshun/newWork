/**
 * regExp
 * 1.g: match global
 * 2.m: match multi-line
 * 3.i: don't indentify upper case or lower case
 * =============================================
 * method && rule:
 * 1. strObj.replace(/blue/ig,"red")
 * 2. strObj.match(regExp)
 * 3. regExp.test(strObj)
 * 4. regExp.exec(strObj)
 * 5. strObj.search(regExp)     search括号内任意字符，为设置g时，找到匹配中的任何一个都会停止。
 * 6. regExp.compile(strObj);
 */
// var str="Visit W3CSchool Visit W3CSchool Visit W3CSchool blue";
// var patt1=/w3cschool/ig;
// var n = str.replace(/blue/gi,"red");
// console.log(str.match(patt1));   // ["W3CSchool", "W3CSchool", "W3CSchool"]
// console.log(patt1.test(str));    // true
// console.log(patt1.exec(str));    // ["W3CSchool"] PS: just match once,if want to get all, you have to call time after time.
// console.log(str.search(patt1));  // 6
// console.log(n);                  // Visit W3CSchool Visit W3CSchool Visit W3CSchool red

// // Achieve by new regExp
// var patt2 = new RegExp('w3cschool','ig');
// console.log(patt2.test(str));

/**
 * @param {regExp} Chinese    - match Chinese
 * @param {regExp} Email      - match email               ; condition：1. starting with letter 2.matching "_" one or multiple before "@" 3. ending with number or letter
 * @param {regExp} ChinaTel   - match telephone in China  ; format: xxx-12345678 or xxxx-1234567
 * @param {regExp} ChinaPhone - match mobile phone
 * @param {regExp} Card       - match ID card             ; number is 15 or 18 and the last byte for checking
 * @param {regExp} Account    - check correct             ; 1. start with letter  2. allow length is 15 to 18 by number, letter and "_"
 * @param {regExp} Password   - check security
 * @param {regExp} Money      - check Money               ; format: 0 or 33,333,333.00 only two byte at the end
 */

(function($) {
    var r = {
        Chinese: /[\u4e00-\u9fa5]/,
        Email: /^[a-zA-Z]+\w*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
        ChinaTel: /\d{3}-\d{8}|\d{4}-\d{7}/,
        ChinaPhone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        Card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        Account: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
        Password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
        Money: /^(0|([1-9]{1,3}(\,\d{3})*\.\d{1,2}))$/,
        Empty: /\n\s*\r/
    }
    $.fn.extend({
        checkEmail: function() {
            return r.Email.test($(this).val())
        }
    })

    //     getSelect: document.getElementById( 'judges' ),
    //     getValue: document.getElementById( 'text' ),

    //     method: function() {
    //         var that = this;
    //         if( !document.addEventListener ) {
    //             this.getSelect.attachEvent( 'onclick', function() {
    //             var str = that.getValue.value;
    //             var patt = /^[a-zA-Z]+\w*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    //             var check = str.match( patt );
    //             console.log(check)
    //             if ( !check ) {
    //                 // 换成现在用的提示效果
    //                 alert( 'format error' );
    //             }
    //         } );
    //         } else {
    //             this.getSelect.addEventListener( 'click', function() {
    //             var str = that.getValue.value;
    //             var patt = that.Money;
    //             var check = str.match( patt );
    //             console.log(check)
    //             if ( !check ) {
    //                 // 换成现在用的提示效果
    //                 alert( 'format error1' );
    //             }
    //         } );
    //         }
    //     }
    // };
    // regExp.method();
})(jQuery);




// // ====================practice rank========================================================
var str = "hat hot my telephone is 12202345672  10 email: liulfjs@126.com \n liuyongshun this his at";
// // search 括号内任意字符，为设置g时，找到ema中的任何一个都会停止。
// var patt = /[ema]/;
// console.log( str.match( patt ) );
// // 查找除了括号内所有的字符。[^]
// var patt1 = /[^ema]/g;
// console.log( str.match( patt1 ) );
// // 查找任何指定的选项。(em|liu|shun)
// var patt3 = /(ema|is|liu)/g;
// console.log( str.match( patt3 ) );
// // 查找单个字符,除了换行和行结束符。
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
//


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ?: ?= ?!  非捕获元字符。
// ()圆括号内匹配会默认缓存储到一个临时缓冲区，按照在正则表达式模式中从左到右出现的顺序存储。从 1 开始，最多可存储 99 个捕获的子表达式。
// 访问：\n (n代表标识特定缓冲区的一位或两位十进制数；即1-99)
// var zz = 'industryy';
// var reg = /industr(y|ies)\1/gi;
// var reg2 = /industr(?=y|ies)\1/gi;
// console.log(reg.test(zz));
// console.log(reg2.test(zz));



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// \B和\b  : \b匹配一个字边界，即字与空格间的位置 \B反之不匹配边界
// var str = "Is is the cost of of gasoline going up up";
// var patt1 = /([a-z]+)\b \b\1/ig;
// console.log(str.match(patt1));


// 运算优先级：
/**
 * 1. \ : 转义符
 * 2. (), (?:), (?=), [] : 圆括号和方括号
 * 3. *, +, ?, {n}, {n,}, {n,m} : 限定符
 * 4. ^, $, \任何元字符、任何字符 : 定位点和序列（即：位置和顺序）
 * 5. | : "或"操作
 */


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var str = 'liu "yong" yong shun ';
/**
 * 正则中，使用圆括号的子表达式带有从左到右的索引编号。如果replace中出现$+数字，那么replace将用指定的子表达式代替该字符。
 * 引号替换,1. 以双引号开始，以双引号结束；2. 引号内没有引号
 * @param {RegExp} q;
 * @param {[string} str;
 * \1 再次匹配第一个圆括号内的匹配规则，$1代表第一个整个圆括号；
 */
// var q = /"([^"]*)" \1/g;
// console.log(q.test(str));
// console.log('fsf "fsf"'.replace(q, '“$1”'));
