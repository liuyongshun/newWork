(function() {
    var isWeiXin = function() {

        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {

            return true;

        }

    }
    if (isWeiXin()) {

        document.getElementById('liu').style.backgroundColor = 'yellow';

    } else {

        console.log(44);

    }
})();
