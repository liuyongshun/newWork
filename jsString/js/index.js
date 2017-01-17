// 1. stringObject.substr(start,length)
// start 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
// length 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
// var str = "hello world";
// console.log(str.substr(1,4));
// console.log(str.substr(-1,4));

// 2. stringObject.split(separator,howmany)
// separator 	必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
// howmany 	可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
// var str2 = "How are you doing today?";
// console.log(str2.split(" "));
// console.log(str2.split(""));
// console.log(str2.split(" ", 3));

// 3.contact()
// var str3 = "helllo";
// var str4 = "world";
// var arr1 = [3,5];
// var arr2 = [6,7];
// console.log(arr2.concat(arr1));
// console.log(str3.concat(str4));

// 4.slice()
// var arr6 = [3,5,7,8,0];
// var str5 = "hello world";
// console.log(str5.slice(1,4));
// console.log(arr6.slice(1,3));

// 5.toLowerCase() 方法用于把字符串转换为小写。
// var low = "HELLO WORLD";
// console.log(low.toLowerCase());
// console.log(low.toLocaleLowerCase());
// var pper = "hellow world";
// console.log(pper.toUpperCase());
// console.log(pper.toLocaleUpperCase());

// 6. match()
// var str="Hello world!";
// console.log(str.match("world"));
// console.log(str.match("World"));
// console.log(str.match("worlld"));
// console.log(str.match("world!"));
// var patt5 = /\w/g;
// console.log( str.match( patt5 ) );

// 7. exec()
// var str = "Visit W3School or W3School and W2School"; 
// var patt = /W2School/g;
// var result = patt.exec(str);
// console.log(result);


// 8.search()
// var str8 = "hello world 34";
// console.log(str8.search("world"));
// var patt = /[0-9]/g;
// console.log(str8.search(patt));

// 9. replace() ; stringObject.replace(regexp/substr,replacement) 两个参数都是必须的
// var str = "hello world everyone";
// console.log(str.replace(/hello/,'hi'));
// console.log(str.replace('hello','hi'));

// 10. test()
var str = "Visit W3School";
var patt1 = new RegExp("W3School");
var result = patt1.test(str);
console.log(result);