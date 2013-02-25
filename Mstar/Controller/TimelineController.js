/**
 *
 */
define(['Mstar', 'jq', '../Controller', '../Controller/MoreController'], function(M, $, Controller, MoreController) {

    var TimelineController = M.factory(Controller, {
	
	    init: function(options) {
		    if (!options.events) {
			    options.events = {
				    
				};
			}
			this.constructor._superClass.call(this, options);
			this.moreController = new MoreController({
			    view: this.view.moreView,
				model: this.model
			});
		},
		
		onFinishRender: function() {
		    if (!this.scroller) {
			    this.scroller = new iScroller(this.view.$el[0], {useTransition: true});
			} else {
			    this.scroller.refresh();
			}
			console.log('tlinerender');
			this.constructor._super.onFinishRender.call(this);
		}
	
	});
	
	return TimelineController;
});