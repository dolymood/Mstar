/**
 *
 */

define(['Mstar'], function(M) {
    
	var Model = M.Model = M.factory({
	    
		Implements: M.Event, // 从Event中混入属性
		
		init: function() {
		    this.mid = M.uniqueId('model');
			
		},
		
		
		
	});
	
	return Model;
});