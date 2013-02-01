$(function() {
(function(window, document, iScroll) {
    M.start();
	var scroller = new iScroll($('#box1 .body')[0], {useTransition: true});
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
	
	$(document.body).tap(function(e) {
		var target = $(e.target);
		if (target.hasClass('back')) {
		    return false;	
		}
		var href = '';
		if ((href = target.attr('data-href'))) {
		    
		}
	});
	// hash
	(function() {
	    var hisFor = [];
		var hisBac = [];
		window.history.onhashchange = function(e) {
			alert(e);
		};
	})();
	
	
})(window, document, iScroll);
});
