$(function(){
function startmarquee5(lh, speed, delay) {
	var t;
	var o = document.getElementById("demo0");
	o.innerHTML += o.innerHTML;
	o.style.marginTop = 0;
	o.onmouseover = function () { clearInterval(t); }
	o.onmouseout = function () { t = setInterval(scrolling, speed); }


	function start() {
	    t = setInterval(scrolling, speed);
	}

	function scrolling() {
	    if (parseInt(o.style.marginTop) % lh != 0) {
	        o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
	        if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2) o.style.marginTop = 0;
	    } else {
	        clearInterval(t);
	        setTimeout(start, delay);
	    }
	}
	setTimeout(start, delay);
	}
	startmarquee5(0, 65, 150);	
})
 
