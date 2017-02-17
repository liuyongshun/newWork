var total = document.documentElement.clientHeight;
var mainHeight = document.getElementById('mainCol').offsetHeight; 
var allHeight=mainHeight + 111;
if (total > allHeight) {	
    var height=total-111;	
    document.getElementById('col1').style.height=height+'px';
    document.getElementById('mainCol').style.height=height+'px';
} else {
    document.getElementById('col1').style.height=mainHeight+'px';
}