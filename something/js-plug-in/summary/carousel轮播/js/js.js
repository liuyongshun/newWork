// JavaScript Document
$(function ($) {
    // call function
    m_box();
    // state of function
    function m_box() {
        // state varialbe
        var currentIndex = 0,
            maxValue = $(".show li").length;
        var timer = setInterval(autoPlay, 2000);
        var carryOut = function () {
            $(".show li").hide().eq(currentIndex).fadeIn();
            $(".points li").removeClass("current").eq(currentIndex).addClass("current");
        };

        // right convert
        $(".box").find(".page-r").click(function () {
            currentIndex++;
            if (currentIndex > maxValue - 1) {
                currentIndex = 0;
            }
            carryOut();
        });

        // left convert
        $(".box").find(".page-l").click(function () {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = maxValue - 1;
            }
            carryOut();
        });

        // auto display
        function autoPlay() {
            currentIndex++;
            if (currentIndex > maxValue - 1) {
                currentIndex = 0;
            }
            carryOut();
        }

        //hover stop
        $(".box").hover(function () {
            clearInterval(timer);
            $(".page-r,.page-l").fadeIn(200);
        }, function () {
            clearInterval(timer);
            timer = setInterval(autoPlay, 2000);
            $(".page-r,.page-l").hide();
        });

        // click convert
        $(".points li").click(function () {
            currentIndex = $(this).index();
            carryOut();
        });
    }
});

