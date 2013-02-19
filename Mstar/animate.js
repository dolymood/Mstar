/**
 *
 */
define(['Mstar', 'jq'], function(M, $) {

	var fn = function() {};
	var feat = $.feat;
	// ...考虑用同一个时间线统一管理动画
	
	function ani(el, options) {
	    var callback = options.callback || fn;
		el.unbind('webkitTransitionEnd');
		el.trigger('animationStart', options);
		var time;
		if ((time = (options.time || 0))) {
		    el.css('-webkit-transition', '-webkit-transform ' + time + 'ms ' + (options.timFn || 'ease'));
		} else {
		    el.css('-webkit-transition', '');
		}
		var x = options.x || 0,
		    y = options.y || 0;
		var aniEnd = function() {
			clearTimeout(timeout);
			el.trigger('animationEnd', options);
			callback(el);
		}
		if (time) {
			el.bind('webkitTransitionEnd', aniEnd);
		}
		var timeout = setTimeout(function() {
			aniEnd();
		}, (time ? (time + 50) : 0));
		el.css('-webkit-transform', 'translate' + feat.cssTransformStart + x + ', ' + y + feat.cssTransformEnd);
	}
	
	M.animate = function(el, options) {
		options = options || {};
		ani(el, options);
	};
	
	return M;
});