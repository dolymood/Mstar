/**
 * 
 */
(function(M, $) {
    var $body = $(document.body);
	
	function clickHandler(e) {
	    $(e.target).trigger('tap', e);
	}
	
	function orientationChangeHandler() {}
	
	function tapHandler(e) {
	    var target = $(e.target);
		var href = target.attr('data-href') || (target = target.closest('[data-href]')) && target.attr('data-href');
		var hash = '';
		if ((hash = href.match(/^#.*$/))) {
			M.router.route({
			    el: target,
				hash: hash
			});
		}
	}
	
	function touchStartHandler(e) {
	    var target = $(e.target);
		
		// touchSelector
		if (target.length && (target.attr('data-href') || (target = target.closest('[data-href]')) && target.attr('data-href'))) {
		    target.addClass('active');
		}
		target.on('touchmove', function() {
			target.removeClass('active');
		});

		target.on('touchend', function() {
			target.unbind('touchmove touchend');
		});
	}
	
	var navigator = M.navigator = {
	    _start: false,
		start: function() {
		    if (navigator._start) {
			    throw 'navigator has started.';
			}
			$body.bind('click', clickHandler)
			     .bind('orientationchange', orientationChangeHandler)
                 .bind('tap', tapHandler)
                 .bind('touchstart', touchStartHandler)
                 .trigger('orientationchange');
			navigator._start = true;
		}
	};
	
	navigator.start();
	
})(Mstar, $);