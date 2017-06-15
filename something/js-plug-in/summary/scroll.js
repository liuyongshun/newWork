$(document).ready(function() {
	var _index5 = 0;
	var _n = $("#four_flash .flashBg ul.mobile li").length;
	var _w = 218;
	$("ul.mobile").append($("ul.mobile").html());
	$("#four_flash .but_right ").click(function() {
		if (_index5 == _n) {
			_index5 = 0;
			$("ul.mobile").css("left", "0px");
		}
		_index5++;
		$("#four_flash .flashBg ul.mobile").stop().animate({
			left: -_index5 * _w
		}, 820);
	});
	$("#four_flash .but_left").click(function() {

		if (_index5 === 0) {
			$("ul.mobile").css("left", (-_n * _w) + "px");
			_index5 = _n;
		}
		_index5--;
		$("#four_flash .flashBg ul.mobile").stop().animate({
			left: -_index5 * _w
		}, 820);
	});
});
