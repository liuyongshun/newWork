// var test = {
//     testActive: function() {
//         var x = document.activeElement.TagName;        
//         document.getElementById( 'test-id' ).innerHTML = x;
//     }
// }
// test.testActive();

// ==============================================DOM一致性检测==============================================================================================
// var hasXmlDom = document.implementation.hasFeature("XML", "1.0");
// console.log(hasXmlDom);
// var hasDom = document.implementation.hasFeature("DOM", "3.0"); //检测dom 3级
// console.log(hasDom);
// Events  2.0，3.0  常规的DOM事件
// UIEvents  2.0，3.0  用户界面事件
// MouseEvents  2.0，3.0  由鼠标引发的事件（click、mouseover等）
// MutationEvents  2.0，3.0  DOM树变化时引发的事件
// HTMLEvents  2.0  HTML4.01事件
// Range  2.0  用于操作DOM树中某个范围的对象和方法
// Traversal  2.0  遍历DOM树的方法
// LS  3.0  文件与DOM树之间的同步加载和保存

// 注意：除了使用DOM一致性检测外还需同时使用 能力检测。

// =================================================能力检测=============================================
// if(document.getElementById){
// 	console.log("support")
// } else {
// 	console.log("not support")
// }


// =============================================================================选择标签方式==============================================================================

//jQuery根据样式选择器查找元素的终极方式是 先用getElementsByTagName(*)（所以说原生js比jquery快）获取所有DOM元素，然后根据样式选择器对所有DOM元素进行筛选。

// 1、id  IE7及以上  IE7中如果该方式会匹配name属性。
// var IDS = document.getElementById( "test-id" );
// IDS.innerHTML = "liu";
// console.log( IDS );
// document.getElementById( "test-name" ).value = "liuddd";

// 2、className，必须遍历每个类添加事件，或修改。IE9及以上。HTMLCollection 对象还有一个方法，叫做 namedItem() ，使用这个方法可以通过元素的 name特性取得集合中的项。
// var test = document.getElementsByClassName( "test-class" );
// console.log(test.namedItem("thisName").innerHTML);
// console.log(test["thisName"].innerHTML) //同上 && item()等同于中括号形式。
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
// console.log( name )  //返回[object NodeList]而不是标签集合HTMLCollection。

// 7、特殊的
// document.forms  // 包含文档中所有的 <form> 元素， 与 document.getElementsByTagName("form")得到的结果相同；
//document.images  // 包含文档中所有的 <img> 元素，与 document.getElementsByTagName("img") 得到的结果相同；





//=================================================================HTML DOM操作（方法） 节点及操作。============================================================================

// // 一、创建节点   这里值创造了一个p只能添加到一个标签内。IE5+。
// // 1、创建元素  IE7+
// var elements = document.createElement( "p" );  

// 在 IE 中可以以另一种方式使用 createElement() ， 即为这个方法传入完整的元素标签， 也可以包
// 含属性，如下面的例子所示。
// var div = document.createElement("<div id=\"myNewDiv\" class=\"box\"></div >");
// 这种方式有助于避开在 IE7 及更早版本中动态创建元素的某些问题。
// 不能设置动态创建的 <iframe> 元素的 name 特性。
// 不能通过表单的 reset() 方法重设动态创建的 <input> 元素。
// 动态创建的 type 特性值为 "reset" 的 <buttou> 元素重设不了表单。
// 动态创建的一批 name 相同的单选按钮彼此毫无关系。 name 值相同的一组单选按钮本来应该用于表示同一选项的不同值，但动态创建的一批这种单选按钮之间却没有这种关系。

// // 2、创建文本  IE7+
// var createText = document.createTextNode( "这是创建的文本节点" );  //访问文本节点.data。
// split 分割文本节点
// console.log(document.getElementById("split").firstChild.splitText(5));
// console.log(document.getElementById("split").firstChild.nodeValue);
// console.log(document.getElementById("split").firstChild.data);

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

// +++++++++++++++++++++++++++++++++++++++
// // 10、attributes    attributes 属性返回指定节点的属性集合，即 NamedNodeMap。attributes 属性中包含一系列节点， 每个节点的 nodeName 就是特性的名称， 而节点的 nodeValue就是特性的值
// var attributes = document.getElementById( "active" ).attributes.getNamedItem("class").nodeValue;
// console.log( attributes );
//  NamedNodeMap 对象拥有下列方法。
// getNamedItem(name) ：返回 nodeName 属性等于 name 的节点；
// removeNamedItem(name) ：从列表中移除 nodeName 属性等于 name 的节点；
// setNamedItem(node) ：向列表中添加节点，以节点的 nodeName 属性为索引；
// item(pos) ：返回位于数字 pos 位置处的节点。
// ++++++++++++++++++++++++++++++++++++++++

// // 四、移除子节点    	能否在不引用父元素的情况下删除某个元素？ 很抱歉。DOM 需要了解您需要删除的元素，以及它的父元素。

// // 11.移除子节点； IE7+
// var list = document.getElementById( "list" );
// var li = document.getElementById( "item1" );
// // 这里执行一次不能移除索引为2的节点，因为google和firefix的解析有空白节点，首先移除的是空白节点。而在IE7和8下不会有空白节点。则可以移除。 IE7+
// list.removeChild( list.childNodes[2] );
// list.removeChild( list.childNodes[2] );

// // 12、可以通过对子节点直接获取存储在变量里，然后在准确移除子节点（这样一次调用即可）。 IE7+
// list.removeChild( li );
// console.log( list.childNodes )

// 13、cloneNode() true or  false   cloneNode() 方法不会复制添加到 DOM 节点中的 JavaScript 属性，例如事件处理程序等。这个方法只复制特性、（在明确指定的情况下也复制）子节点，其他一切都不会复制。IE 在此存在一个 bug，即它会复制事件处理程序，所以我们建议在复制之前最好先移除事件处理程序。
// var myList = document.getElementById("myList");
// var clone = myList.cloneNode(true);  //深复制，复制所有子节点树
// var cloneFalse = myList.cloneNode(false); // 浅复制，不复制子节点   
// alert(cloneFalse.childNodes.length); // 0
// alert(clone.childNodes.length); //3（IE < 9）或 7（其他浏览器）差异主要是因为 IE8 及更早版本与其他浏览器处理空白字符的方式不一样。IE9 之前的版本不会为空白符创建节点。包括 3 个 <li> 元素和 4 个文本节点（表示 <li> 元素之间的空白符） 。如果将元素间的空白符删除，那么所有浏览器都会返回相同数目的子节点。

// 14、注释节点 
// var commemt = document.getElementById("myComment");
// console.log(commemt.firstChild.data); //
 // var commemts = document.createComment("dfsfsfsf");
 // console.log(commemts)
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

// // 2、替换节点  node.replaceChild(newnode,oldnode)   PS:1、 第一参数是newNode，第二个是olderNode。 2、new替换older后，new将从原来位置消失，替换到older位置，且older被删除。 3、replaceChild是替换子节点，子节点，就、子节点
// var olderReplace = document.getElementsByClassName( "older" );
// var newReplace = document.getElementsByClassName( "new" );
// document.getElementById( "buttonReplace" ).addEventListener( "click", function() {
//     olderReplace[0].parentNode.replaceChild( newReplace[0], olderReplace[1] );
// } )

// // 3、insertBefore()在之前添加。
// var createP = document.createElement( "p" );
// var createText3 = document.createTextNode( "this is text of p" );
// var createAttr3 = document.createAttribute( "class" );
// var existParent = document.getElementById( "parent" );
// var existP = document.getElementById( "sub" );
// createAttr3.value = "createClass";
// createP.setAttributeNode( createAttr3 );
// createP.appendChild( createText3 );
// // node.insertBefore(newnode,existingnode) 方法在您指定的已有子节点之前插入新的子节点
// existParent.insertBefore( createP, existP );

// // 4、获取子标签不获取节点
// var child = document.body.children[6].children[0].children[0];
// console.log( child );

//=================================================================HTML DOM属性 及应用============================================================================

// // 1、innerHTML属性
// var testHTML = document.getElementById( "test-innerHTML" );
// testHTML.innerHTML = "innerHTML text";
// testHTML.innerHTML = "<p>increase tag as childNode</p>";

// // 2、nodeName属性nodeName 是只读的，元素节点的 nodeName 与标签名相同，属性节点的 nodeName 与属性名相同，文本节点的 nodeName 始终是 #text    文档节点的 nodeName 始终是 #document
// var testNodeName = document.getElementById( "testNodeName" );
// console.log( testNodeName.nodeName );
// console.log( testNodeName.childNodes[0].nodeName);
// console.log( testNodeName.getAttributeNode( "class" ).nodeName );
// console.log( document.nodeName );

// // 3、nodeValue属性  元素节点的 nodeValue 是 undefined 或 null，文本节点的 nodeValue 是文本本身，属性节点的 nodeValue 是属性值
// console.log( testNodeName.nodeValue );
// console.log( testNodeName.childNodes[0].nodeValue);
// console.log( testNodeName.getAttributeNode( "class" ).nodeValue );
// console.log( document.nodeValue );

// // 4、nodeType属性
// console.log( testNodeName.nodeType );
// console.log( testNodeName.childNodes[0].nodeType);
// console.log( testNodeName.getAttributeNode( "class" ).nodeType );
// console.log( document.nodeType );
 
//=================================================================HTML DOM导航 及应用============================================================================

// // 1、数组方式导航
// var subnav = document.getElementsByClassName( "subnav" );
// for( var i =0; i < subnav.length; i ++) {
//     subnav[i].innerHTML = "nav"; 
// }

// // 2、parentNode、firstChild(代表文本节点等于childNodes[0]) 以及 lastChild是子元素的最后一个      IE7+
// var nav = document.getElementById( "nav" );
// console.log( nav.lastChild.nodeType );

// // 3、根节点  document.documentElement - 全部文档，document.body - 文档的主体



// ==========================================================  DOCUMENT =====================================================================================
// var html = document.documentElement; //取得对<html>的引用
// alert(html === document.childNodes[1]); //true
// alert(html === document.lastChild);   //true
// console.log(document.doctype);  //IE10+
// console.log(document.title)   //IE7+
// console.log(document.URL)  //localhost:3000 ie7+
// console.log(document.domain)  //localhost   ie7+
// console.log(8 + document.referrer + "---3") //http://localhost:3000/  ie不支持

// 当页面中包含来自其他子域的框架或内嵌框架时，能够设置 document.domain 就非常方便了。由于 跨 域 安 全 限 制 ， 来 自 不 同 子 域 的 页 面 无 法 通 过 JavaScript 通 信 。 而 通 过 将 每 个 页 面 的document.domain 设置为相同的值，这些页面就可以互相访问对方包含的 JavaScript 对象了。例如，
// 假设有一个页面加载自 www.wrox.com，其中包含一个内嵌框架，框架内的页面加载自 p2p.wrox.com。由于 document.domain 字符串不一样，内外两个页面之间无法相互访问对方的 JavaScript 对象。但如果将这两个页面的 document.domain 值都设置为 "wrox.com" ，它们之间就可以通信了。













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

// parse解析
console.log(JSON.parse('{"name":"liu"}'));
// serialize序列化
console.log(JSON.stringify({name:"json"}));