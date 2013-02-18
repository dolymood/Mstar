define([
    'jq',
	'navigator'],
function($, M) {
    //$(function() {
		
		M.start();
		var list = $('.list');
		var items = list.html();
		list.tap(function(e) {
			var target = $(e.target);
			if (target.hasClass('item') || (target = target.closest('.item'))) {
				if (target.length > 0) {
					var html = target.html();
					
				}
			}
			e.stopPropagation();
		});
		$('.more').tap(function() {
			list.html(list.html() + items);
			scroller.refresh();
		});
		//var scroller = new iScroll($('#box1 .body')[0], {useTransition: true});
	//});
});

