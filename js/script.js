//</IBG>========================================================================================================
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

/*function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();*/

//</IBG>========================================================================================================

//<BURGER>========================================================================================================
$(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu, .menu__body').toggleClass('active');
	});
	$('.body-menu__item_1').click(function (event) {
		$('.sing-up__body').toggleClass('_active');
	});
	$('.body-menu__item_2').click(function (event) {
		$('.sing-in__body').toggleClass('__active');
	});
});
//</BURGER>========================================================================================================

//<TABS>========================================================================================================
$(document).ready(function () {
	$('.tabs__item').click(function (e) {
		e.preventDefault();

		$('.tabs__item').removeClass('tabs__item-active');
		$('.tabs__block').removeClass('tabs__block-active');

		$(this).addClass('tabs__item-active');
		$($(this).attr('href')).addClass('tabs__block-active');
	});
	$('.tabs__item:first').click();
});
//</TABS>========================================================================================================

//</СПОЙЛЕР>============================================================================================
$(document).ready(function () {
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
//</СПОЙЛЕР>============================================================================================


//<КЛИК НА ЛЮБУЮ ОБЛАСТЬ>//</СПОЙЛЕР>============================================================================================
jQuery(function ($) {
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".sing-up__body"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("_active"); // скрываем его
		}
	});
	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".sing-in__body"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("__active"); // скрываем его
		}
	});
});

//<КЛИК НА ЛЮБУЮ ОБЛАСТЬ>//</СПОЙЛЕР>============================================================================================

//<HEIGHT EL>============================================================================================
$(window).resize(function () {
	var h = $(window).outerHeight();
	$('.header').css({
		height: h
	});
});
//</HEIGHT EL>============================================================================================
