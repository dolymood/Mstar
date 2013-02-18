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
		if ((time = options.time)) {
		    el.css('-webkit-transition', '-webkit-transform ' + time + 'ms ' + (options.timFn || 'ease'));
		}
		var x = options.x || 0,
		    y = options.y || 0;
		var aniEnd = function() {
			clearTimeout(timeout);
			options.callback(el);
			el.trigger('animationEnd', options);
		}
		var timeout = setTimeout(function() {
		    aniEnd();
		}, time || 0);
		el.bind('webkitTransitionEnd', aniEnd);
		el.css('-webkit-transform', 'translate3d(' + x + ', ' + y + ', 0)');
	}
	
	M.animate = function(el, options) {
		ani(el, options);
	};
	
	return M;
});