/**
 * 
 */
(function(M, $) {
    
	function createBox(hash) {
	    return new M.Frame({
		    
		});
	}
	
	function getBox(hash) {
	    var box = $(hash);
		if (box.length < 1) {
		    createBox(hash)
		}
	}
	
	M.router = {
	    
		route: function(opts) {
		    var el = opts.el;
			var hash = opts.hash;
			var direction = el.attr('data-direction') || 'left';
			var targetBox = getBox();
		}
		
	};
	
})(Mstar, $);