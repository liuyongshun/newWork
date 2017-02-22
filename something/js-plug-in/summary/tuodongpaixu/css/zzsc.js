!(function(win,doc) {
    // var 字面量形式的对象，属性里的this指向window。方法里指向该对象。
    var chenkbox = document.getElementById('chenkbox'),
        table = document.getElementById('tableSort'),
        tr =  function() {
            return table.getElementsByTagName('tr');
        },
        td = function() {
            return table.getElementsByTagName('td');
        },
        box = document.getElementById('box'),
        getEvent = function(e) {
            return e ? e: window.event;
        },
        getTarget = function(e) {
            return e.target || e.srcElement;
        },
        arr = [],
        arrH = [];
        for (var i = 0; i < td().length; i++) {
          td()[i].onmousedown = function(e) {
              var tdH = getTarget(e).offsetHeight,
                  dragHeight = chenkbox.offsetHeight - tdH,
                  chenkboxTop = chenkbox.offsetTop,
                  tdTop = getTarget(e).offsetTop,
                  that = this,
                  ctdTop = getEvent(e).clientY - chenkboxTop - tdTop;
                  for (i = 0; i < tr()[0].cells.length; i ++) {
                      arr.push(tr()[this.parentNode.rowIndex].cells[i].innerHTML);                    
                  }
                  for (var i = 0; i < tr().length; i++) {
                      arrH.push(tr()[i].offsetTop);
                  };
                  box.style.display = "block";
                  box.style.height = tdH + "px";
                  box.style.top = tdTop + "px";



                  document.onmousemove = function(e) {
                      var tdH = getTarget(e).offsetHeight;
                      console.log(tdH);
                      box.style.top = getEvent(e).clientY - chenkboxTop - ctdTop + 'px';
                      box.style.left= 0;
                      if (box.offsetTop > dragHeight) {
                           box.style.top=dragHeight+"px"; 
                      } else if (box.offsetTop < 0) {
                           box.style.top = 0;
                      }        
                      document.onselectstart = function() {
                        return false;
                      };
                    window.getSelection ? window.getSelection().removeAllRanges() : doc.selection.empty();
                  }




                  document.onmouseup = function(e) {
                     var oboxl = box.offsetTop + ctdTop;
                        for (var i = 0; i < arrH.length; i++) {
                           if (arrH[i] < oboxl) {
                            var index = i;
                           }
                        };
                       for (var i = 0; i < tr()[0].cells.length - 1; i++) {
                          that.parentNode.cells[i+1].innerHTML = "";
                          that.parentNode.cells[i+1].innerHTML = tr()[index].cells[i+1].innerHTML;
                          tr()[index].cells[i+1].innerHTML="";
                          tr()[index].cells[i+1].innerHTML= arr[i+1];
                       };
                       arrH.splice(0,arrH.length);
                       arr.splice(0,arr.length);
                       box.style.display = "none";
                       document.onmousemove = null;
                       document.onmouseup = null;
                       document.onselectstart = function(){return false};
                  }

             }
        };
        
  })(window,document);

  // innerHTML在IE9以下是只读的不能写。 其他还有col, colGroup, frameSet, html, head, style, table, tBody, tFoot, tHead, title, tr。
  // cellIndex 属性可返回一行的单元格集合中单元格的位置。
  // rowIndex 属性返回某一行在表格的行集合中的位置（row index）。
  // cells 集合返回表格中所有单元格的一个数组。
  // (function(win,doc) {
  //   // var 字面量形式的对象，属性里的this指向window。方法里指向该对象。
  //   var v = {
  //       chenkbox: document.getElementById('chenkbox'),
  //       table: document.getElementById('tableSort'),
  //       tr: function() {
  //           return this.table.getElementsByTagName('tr');
  //       },
  //       td: function() {
  //           return this.table.getElementsByTagName('td');
  //       },
  //       box: document.getElementById('box'),
  //       getEvent: function(e) {
  //           return e ? e: window.event;
  //       },
  //       getTarget: function(e) {
  //           return this.getEvent(e).target || this.getEvent(e).srcElement;
  //       },
  //       arr: [],
  //       arrH:[]
  //   }
  //       for (var i = 0; i < v.td().length; i++) {
  //         v.td()[i].onmousedown = function(e) {
  //             var tdH = v.getTarget(e).offsetHeight,
  //                 dragHeight = v.chenkbox.offsetHeight - tdH,
  //                 chenkboxTop = v.chenkbox.offsetTop,
  //                 tdTop = v.getTarget(e).offsetTop,
  //                 that = this,
  //                 ctdTop = v.getEvent(e).clientY - chenkboxTop - tdTop;
  //                 for (i = 0; i < v.tr()[0].cells.length; i ++) {
  //                     v.arr.push(v.tr()[this.parentNode.rowIndex].cells[i].innerHTML);                    
  //                 }
  //                 for (var i = 0; i < v.tr().length; i++) {
  //                     v.arrH.push(v.tr()[i].offsetTop);
  //                 };
  //                 v.box.style.display = "block";
  //                 v.box.style.height = tdH + "px";
  //                 v.box.style.top = tdTop + "px";



  //                 document.onmousemove = function(e) {
  //                     var tdH = v.getTarget(e).offsetHeight;
  //                     console.log(tdH);
  //                     v.box.style.top = v.getEvent(e).clientY - chenkboxTop - ctdTop + 'px';
  //                     v.box.style.left= 0;
  //                     if (v.box.offsetTop > dragHeight) {
  //                          v.box.style.top=dragHeight+"px"; 
  //                     } else if (v.box.offsetTop < 0) {
  //                          v.box.style.top = 0;
  //                     }        
  //                     document.onselectstart = function() {
  //                       return false;
  //                     };
  //                   window.getSelection ? window.getSelection().removeAllRanges() : doc.selection.empty();
  //                 }




  //                 document.onmouseup = function(e) {
  //                    var oboxl = v.box.offsetTop + ctdTop;
  //                       for (var i = 0; i < v.arrH.length; i++) {
  //                          if (v.arrH[i] < oboxl) {
  //                           var index = i;
  //                          }
  //                       };
  //                      for (var i = 0; i < v.tr()[0].cells.length - 1; i++) {
  //                         that.parentNode.cells[i+1].innerHTML = "";
  //                         that.parentNode.cells[i+1].innerHTML = v.tr()[index].cells[i+1].innerHTML;
  //                         v.tr()[index].cells[i+1].innerHTML="";
  //                         v.tr()[index].cells[i+1].innerHTML= v.arr[i+1];
  //                      };
  //                      v.arrH.splice(0,v.arrH.length);
  //                      v.arr.splice(0,v.arr.length);
  //                      v.box.style.display = "none";
  //                      document.onmousemove = null;
  //                      document.onmouseup = null;
  //                      document.onselectstart = function(){return false};
  //                 }

  //            }
  //       };
        
  // })(window,document);