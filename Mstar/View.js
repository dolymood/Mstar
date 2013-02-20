/**
 *
 */
define(['jq', 'Mstar'], function($, M) {
    
	var View = M.factory({
	    
		Implements: M.Event, // 从Event中混入属性
		
		init: function() {
		    
		}
		
	});
	
	return (M.View = View);
});