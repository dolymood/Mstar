/**
 *
 */
define(['Mstar'], function(M) {

	var fn = function() {};
	
	// ...考虑用同一个时间线统一管理动画
	
	function ani(el, options) {
	    var callback = options.callback || fn;
		el.trigger('animationStart', options);
		var time;
		if ((time = (options.time || 0))) {
		    el.css('-webkit-transition', '-webkit-transform ' + time + 'ms ' + (options.timFn || 'ease'));
		} else {
		    el.css('-webkit-transition', 'none');
		}
		var x = options.x || 0,
		    y = options.y || 0;
		var aniEnd = function() {
			if (time) {
			    clearTimeout(timeout);
				el.trigger('animationEnd', options);
			}
			options.callback(el);
		}
		if (time) {
			var timeout = setTimeout(function() {
				aniEnd();
			}, time || 0);
			el.unbind('webkitTransitionEnd').bind('webkitTransitionEnd', aniEnd);
			el.css('-webkit-transform', 'translate3d(' + x + ', ' + y + ', 0)');
		} else {
		    el.unbind('webkitTransitionEnd');
			el.css('-webkit-transform', 'translate3d(' + x + ', ' + y + ', 0)');
			aniEnd();
		}
		
	}
	
	M.animate = function(el, options) {
		ani(el, options);
	};
	
	return M;
});