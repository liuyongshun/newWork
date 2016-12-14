// var test = {
//     testActive: function() {
//         var x = document.activeElement.TagName;        
//         document.getElementById( 'test-id' ).innerHTML = x;
//     }
// }
// test.testActive();



// =============================================================================选择标签方式==============================================================================

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


//=================================================================HTML DOM操作（方法） 节点及操作。============================================================================

// // 一、创建节点   这里值创造了一个p只能添加到一个标签内。IE5+。
// // 1、创建元素  IE7+
// var elements = document.createElement( "p" );  
// // 2、创建文本  IE7+
// var createText = document.createTextNode( "这是创建的文本节点" );
// // 3、创建属性本身  createAttribute()方法用于创建一个指定名称的属性，并返回Attr 对象属性。  IE7+
// var createAttr = document.createAttribute( "class" );
// // 4、属性赋值  IE7+
// createAttr.value = "setClass";
// // 5、创建属性并赋值   setAttribute() 方法创建或改变某个新属性。 都支持。 IE7+
// var setAttr = document.getElementById( "test-id" ).setAttribute( "name", "setName" );
// // 二、添加节点
// // 6、、添加子节点 IE7+
// var finshP = elements.appendChild( createText );
// document.getElementById( "test-id" ).appendChild( finshP );
// // 三、获取属性或值
// // 7、添加属性本身  setAttributeNode() 方法用于添加新的属性节点。如果元素中已经存在指定名称的属性，那么该属性将被新属性替代。如果新属性替代了已有的属性，则返回被替代的属性，否则返回 NULL。都支持 IE7+
// document.getElementById( "test-id" ).setAttributeNode( createAttr );
// // 8、获取属性值  getAttribute() 方法通过名称获取属性的值。getAttributeNode() 方法从当前元素中通过名称获取属性节点。所有主流浏览器都支持 IE7+
// var getAttr = document.getElementById( "test-id" ).getAttribute( "class" );
// // 9、获取属性本身 IE7+
// var getAttrDOM = document.getElementById( "test-id" ).getAttributeNode( "class" );
// console.log( getAttr );
// console.log( getAttrDOM );
// // 10、attributes    attributes 属性返回指定节点的属性集合，即 NamedNodeMap。
// var attributes = document.getElementById( "active" ).attributes;
// console.log( attributes );
// // 四、移除子节点
// // 11.移除子节点； IE7+
// var list = document.getElementById( "list" );
// var li = document.getElementById( "item1" );
// // 这里执行一次不能移除索引为2的节点，因为google和firefix的解析有空白节点，首先移除的是空白节点。而在IE7和8下不会有空白节点。则可以移除。 IE7+
// list.removeChild( list.childNodes[2] );
// list.removeChild( list.childNodes[2] );
// // 12、可以通过对子节点直接获取存储在变量里，然后在准确移除子节点（这样一次调用即可）。 IE7+
// list.removeChild( li );
// console.log( list.childNodes )

// ========================================================other operate for node ===========================================================================

// // 1、父节点 ： parentNode IE7+
// var subNode = document.getElementById( "sub-node" );
// var createText2 = document.createTextNode( "this is value of parentNode and adds by DOM operating" );
// // 父节点添加文本子节点 IE7+
// subNode.parentNode.appendChild( createText2 );
// // 创建类名属性 IE7+
// var createAttr2 = document.createAttribute( "class" );
// // 属性赋值 IE7+
// createAttr2.value = "attrValue";
// // 父节点添加属性 IE7+
// subNode.parentNode.setAttributeNode( createAttr2 );

// // 2、替换节点  node.replaceChild(newnode,oldnode)   PS:1、 第一参数是newNode，第二个是olderNode。 2、new替换older后，new将从原来位置消失，替换到older位置，且older被删除。
// var olderReplace = document.getElementsByClassName( "older" );
// var newReplace = document.getElementsByClassName( "new" );
// document.getElementById( "buttonReplace" ).addEventListener( "click", function() {
//     olderReplace[0].parentNode.replaceChild( newReplace[0], olderReplace[1] );
// } )


//=================================================================HTML DOM属性 及应用============================================================================

// 1、innerHTML属性
var testHTML = document.getElementById( "test-innerHTML" );
testHTML.innerHTML = "innerHTML text";
testHTML.innerHTML = "<p>increase tag as childNode</p>";
// 2、nodeName属性nodeName 是只读的，元素节点的 nodeName 与标签名相同，属性节点的 nodeName 与属性名相同，文本节点的 nodeName 始终是 #text    文档节点的 nodeName 始终是 #document
var testNodeName = document.getElementById( "testNodeName" );
console.log( testNodeName.nodeName );
console.log( testNodeName.childNodes[0].nodeName);
console.log( testNodeName.getAttributeNode( "class" ).nodeName );
console.log( document.nodeName );
// 3、nodeValue属性  元素节点的 nodeValue 是 undefined 或 null，文本节点的 nodeValue 是文本本身，属性节点的 nodeValue 是属性值
console.log( testNodeName.nodeValue );
console.log( testNodeName.childNodes[0].nodeValue);
console.log( testNodeName.getAttributeNode( "class" ).nodeValue );
console.log( document.nodeValue );
// 4、nodeType属性
console.log( testNodeName.nodeType );
console.log( testNodeName.childNodes[0].nodeType);
console.log( testNodeName.getAttributeNode( "class" ).nodeType );
console.log( document.nodeType );
 

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