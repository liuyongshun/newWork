// var test = {
//     testActive: function() {
//         var x = document.activeElement.TagName;        
//         document.getElementById( 'test-id' ).innerHTML = x;
//     }
// }
// test.testActive();



// ===============选择标签方式====================
//jQuery根据样式选择器查找元素的终极方式是 先用getElementsByTagName(*)（所以说原生js比jquery快）获取所有DOM元素，然后根据样式选择器对所有DOM元素进行筛选。

// 1、id  IE7及以上  IE7中如果该方式会匹配name属性。
// var IDS = document.getElementById( "test-id" );
// IDS.innerHTML = "liu";
// console.log( IDS );
// document.getElementById( "test-name" ).value = "liuddd";

// 2、className，必须遍历每个类添加事件，或修改。IE9及以上。
// var test = document.getElementsByClassName( "test-class" );
// for (var i = 0; i < test.length; i++) {
//     test[i].innerHTML = "yong";    
// }
// console.log( test )

// 3、tagName IE7及以上;
// var tag = document.getElementsByTagName( "i" );
// for( var i = 0; i < tag.length ; i++ ) {
//     tag[i].innerHTML = "tagName";
// }
// console.log( tag )

// 4、querySelector  IE8及以上
// var qu = document.querySelector( "#query" );
// qu.innerHTML = "testquery";
// console.log( qu )  

// 5、querySelectorAll  IE8及以上
// var all = document.querySelectorAll( ".test-class" );
// for (var i = 0; i < all.length; i++) {
//     all[i].innerHTML = "selectorAll";    
// }
// console.log( all )

// 6、name  IE7及以上
// var name = document.getElementsByName( "test-name" );
// for( var i = 0; i < name.length; i++ ) {
//     name[i].value = "none";
// }
// console.log( name )  //返回[object NodeList]


//llMLDOM操作 节点及操作。

// 一、创建节点   这里值创造了一个p只能添加到一个标签内。IE5及以上。
// 1、创建元素
var elements = document.createElement( "p" );
// 2、创建文本
var createText = document.createTextNode( "这是创建的文本节点" );
// 3、添加节点
var finshP = elements.appendChild( createText );
document.getElementById( "test-id" ).appendChild( finshP );


// 二、 移除子节点；
document.getElementById( "list" ).removeChild( "li" );











// for( key in test ) {
//     key.innerHTML = "999";
//     console.log( key )
// }
// 遍历数组；forEach
// var arr = [0,10,4,6,21];
// arr.forEach( function(cv, index, test) {
//     console.log( cv )
//     console.log( index )
//     console.log( test )
// }, this);