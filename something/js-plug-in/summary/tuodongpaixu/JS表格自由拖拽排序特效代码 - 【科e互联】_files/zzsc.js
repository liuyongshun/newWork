// function sortTable(table,idx){
//     var otable=document.getElementById(table),
//         otody=otable.tBodies[0],
//         otr=otody.rows,
//         tarr=[];
//      for (var i = 1; i <otr.length; i++) {
//            tarr[i-1]=otr[i];
//      };
//     // console.log(tarr);
//      if(otody.sortCol==idx){
//         tarr.reverse();
//      }else{
//         tarr.sort(function(tr1,tr2){
//             var value1 = tr1.cells[idx].innerHTML; 
//             var value2 = tr2.cells[idx].innerHTML; 
//             if(!isNaN(value1)&&!isNaN(value2)){
//                return value1-value2;
//             }else{
//               return value1.localeCompare(value2);
//              }           
//         })
//      }
//      var fragment = document.createDocumentFragment();
//      for (var i = 0; i <tarr.length; i++) {
//          fragment.appendChild(tarr[i]);
//      };
//      otody.appendChild(fragment);
//      otody.sortCol=idx;
//   }
  //拖动
  function Drag(table){
    var ochek=document.getElementById("chenkbox"),
        otable=document.getElementById(table),
        otody=otable.tBodies[0],
        otr=otody.getElementsByTagName("tr"),
        otd=otody.getElementsByTagName("td"),
        box=document.getElementById("box"),
        arrn=[];
        // console.log(otody);
        // console.log(otr);
        // console.log(otd);        
        for (var i = 0; i < otd.length; i++) {
          otd[i].onmousedown=function(e){
            // IE下事件attachEvent添加事件监听的event运行在window下的，this指向window
            // console.log(e);
              var e = e || window.event,
                  target = e.target||e.srcElement,
                  thH = target.offsetHeight,
                  maxl=ochek.offsetHeight-thH,
                  rows=otable.rows,
                  ckL=ochek.offsetTop,
                  disY=target.offsetTop,
                  _this=this,
                  cdisY=e.clientY-ckL-disY;
                  // console.log(rows);
                  // console.log(ckL);
                  // console.log(thW);
                  // console.log(disX);
                  // for (var i = 0; i < rows.length; i++) {
                  var op=document.getElementById('save');
                  op.innerHTML= e.target.parentNode.innerHTML;  
                  box.appendChild(op);
                  // };    
                  console.log(op);
                  for (var i = 0; i < otr.length; i++) {
                         arrn.push(otr[i].offsetTop);      
                  }; 
                  // console.log(arrn);
                  box.style.display="block";
                  box.style.height=thH+"px";
                  box.style.top=disY+"px";
                  //未完成 还有事件没写。
                  document.onmousemove=function(e){
                      var e=e||window.event,
                      target = e.target||e.srcElement,
                      thH = target.offsetHeight;
                      box.style.top=e.clientY-ckL-cdisY+"px";
                      box.style.left= 0;
                      if(box.offsetTop>maxl){
                           box.style.top=maxl+"px";
                      }else if(box.offsetTop<0){
                           box.style.top=0;
                      }        
                      document.onselectstart=function(){return false};     
                    window.getSelection ? window.getSelection().removeAllRanges() : doc.selection.empty();              
                  }
                  document.onmouseup=function(e){
                     var e=e||window.event,
                         opr=box.getElementById('save'),
                         oboxl=box.offsetTop+cdisY;
                        for (var i = 0; i < arrn.length; i++) {
                           if(arrn[i]<oboxl){
                            var index=i;
                           }
                        };
                       // for (var i = 0; i < rows.length; i++) {
                          // rows[i].innerHTML="";
                          // rows[i].innerHTML=rows[index].innerHTML;
                          rows[index].innerHTML="";
                          rows[index].innerHTML=opr[0].childNodes.childNodes.innerHTML;
                       // };
                       box.innerHTML="";
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

                       //   for (var i = 0; i < rows.length; i++) {
                       //    rows[i].cells[_this.cellIndex].innerHTML="";
                       //    rows[i].cells[_this.cellIndex].innerHTML=rows[i].cells[index].innerHTML;
                       //    rows[i].cells[index].innerHTML="";
                       //    rows[i].cells[index].innerHTML=opr[i].innerHTML;
                       // };