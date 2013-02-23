/**
 *
 */
define(['Mstar'], function(M) {
    
	var ADD_TO_THIS = ['model', 'view'];
	var delegateEventSplitter = /^(\S+)\s*(.*)$/;
	
	function bindSysEvents() {
	    var model = this.model;
        var view = this.view;
	}
	
	var Controller = M.Controller = M.factory({
	    
		Implements: M.Event,
		
		init: function(options) {
		    options || (options = {}); 
			this.mid = M.uniqueId('controller');
			var tmp;
			ADD_TO_THIS.forEach(function(key) {
			    if ((tmp = options[key])) {
				    this[key] = tmp;
					delete options[key];
				}
			});
			this.options = options;
			this.delegateEvents();
			bindSysEvents.call(this);
		},
		
		delegateEvents: function() {
		    
		},
		
		undelegateEvents: function() {
		    
		},
		
		
		
	});
	
	return Controller;
});