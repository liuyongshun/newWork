(function() {
    "use strict";
    function Scroll(speed) {
        var t,
            o = document.getElementById("demo0");
        o.innerHTML += o.innerHTML;
        o.style.marginTop = 0;

        o.onmouseenter = function () {
            clearInterval(t); 
        };

        o.onmouseleave = function () {
            t = setInterval(scrolling, speed); 
        };

        function start() {
            t = setInterval(scrolling, speed);
        }
        
        function scrolling() {
            o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
            if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2) {
                o.style.marginTop = 0;
            } 
        }
        start();
    }
    Scroll(65,150);
})();
