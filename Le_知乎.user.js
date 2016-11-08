// ==UserScript==
// @name        Le_知乎
// @namespace   Le
// @include     https://www.zhihu.com/question/*
// @version     1
// @brief       知乎只显示女性答案
// ==/UserScript==

$(function() {
	$('#zg-top-nav ul').append('<li class="zu-top-nav-li" id="female"><a class="zu-top-nav-link">女性</a></li>')
	$('#female').click(function(){
		hideMale();
	});
});

function hideMale(){
	var authors = $('a.author-link').map(function() { return $(this).attr('href'); });
    authors.each(function(i, author) {
        $.get(author).done(function(data) {
            if (!$(data).find('.icon-profile-female').length) {
                console.log('Hiding ' + author);
                $('a[href="' + author + '"]').parent().parent().parent().hide();
            }
        });
    });
}