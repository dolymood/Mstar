/**
 *
 */
define(['Mstar', 'jq', '../Controller'], function(M, $, Controller) {

    var MoreController = M.factory(Controller, {
	
	    init: function(options) {
		    if (!options.events) {
			    options.events = {
				    
				};
			}
			this.constructor._superClass.call(this, options);
			var that = this;
		    this.view.$el.each(function() {
			    var el = $(this);
				if (el.hasClass('more')) {
				    el.bind('tap', M.bind(that.getMore, that));
				}
			});
		},
		
		getMore: function() {
		    console.log('more');
			var model = this.model;
			var data = this.model.getAttr();
			model.update(function() {
			    // this -- model
				this.changed = {
				    rows: M.clone(data.rows).reverse()
				};
				this.attributes.rows.push.apply(this.attributes.rows, this.changed.rows);
			});
			// this.model
		}
	
	});
	
	return MoreController;
});