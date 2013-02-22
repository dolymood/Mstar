/**
 *
 */
define(['Mstar'], function(M) {
    
	var Controller = M.Controller = M.factory({
	    
		Implements: M.Event,
		
		init: function() {
		    this.mid = M.uniqueId('controller');
		}
		
	});
	
	return Controller;
});