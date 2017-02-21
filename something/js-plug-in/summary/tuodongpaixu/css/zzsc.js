  function Drag(table){
    var chenkbox=document.getElementById("chenkbox"),
        otable=document.getElementById(table),
        otr=otable.getElementsByTagName("tr"),
        otd=otable.getElementsByTagName("td"),
        box=document.getElementById("box"),
        arrn=[]; 
        for (var i = 0; i < otd.length; i++) {
          otd[i].onmousedown=function(e) {
            // 时间委托，下面调用clientY时用，IE下事件委托event运行在window作用域下的，this指向window
              var e = e || window.event,
              // e.target除IE外指向this，IE的e.srcElement指向this
                  target = e.target||e.srcElement,
                  // 获取点击的td的高度。
                  tdH = target.offsetHeight,
                  // 获取ID为chenkbox的高度，减去一个td的高度，取出上下可拖动的距离。
                  dragHeight=chenkbox.offsetHeight-tdH,
                  // 获取table的tr对象的集合。
                  rows=otable.rows, 
                  // offsetTop 获取自己的top到父辈的top的距离(该处chenkbox到body的top的距离)。同样还有left，right,bottom
                  chenkboxTop=chenkbox.offsetTop,
                  //  target即是this
                  tdTop=target.offsetTop,
                  // 桥梁把当前this传到下一个作用域。类似绑定。
                  _this=this,
                  // clientY获取点击的位置y坐标值
                  ctdTop=e.clientY-chenkboxTop-tdTop; 
                  var op=document.getElementById("save");
                  op.tBodies[0].innerHTML= target.parentNode.innerHTML;
                  for (var i = 0; i < otr.length; i++) {
                    arrn.push(otr[i].offsetTop);
                  };
                  box.style.display="block";
                  box.style.height=tdH+"px";
                  box.style.top=tdTop+"px";
                  //未完成 还有事件没写。
                  document.onmousemove=function(e){
                      var e=e||window.event,
                      target = e.target||e.srcElement,
                      tdH = target.offsetHeight;
                      box.style.top=e.clientY-chenkboxTop-ctdTop+"px";
                      box.style.left= 0;
                      if(box.offsetTop>dragHeight){
                           box.style.top=dragHeight+"px"; 
                      }else if(box.offsetTop<0){
                           box.style.top=0;
                      }        
                      document.onselectstart=function(){return false};
                    window.getSelection ? window.getSelection().removeAllRanges() : doc.selection.empty();
                  }
                  document.onmouseup=function(e){
                     var e=e||window.event,
                         opr=document.getElementById("save"),
                         oboxl=box.offsetTop+ctdTop;
                        for (var i = 0; i < arrn.length; i++) {
                           if(arrn[i]<oboxl){
                            var index=i;
                           }
                        };
                       for (var i = 0; i < rows[0].cells.length - 1; i++) {
                          target.parentNode.cells[i+1].innerHTML = "";
                          target.parentNode.cells[i+1].innerHTML = rows[index].cells[i+1].innerHTML;
                          rows[index].cells[i+1].innerHTML="";
                          rows[index].cells[i+1].innerHTML=opr.tBodies[0].rows[0].cells[i+1].innerHTML;
                       };
                       opr.rows[0].innerHTML=""; 
                       arrn.splice(0,arrn.length);
                       box.style.display="none";
                       document.onmousemove=null;
                       document.onmouseup=null;
                       document.onselectstart=function(){return false};
                  }

             }
        };
        
  }
  Drag("tableSort");