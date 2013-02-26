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
			// 加载更多 先绑定事件 后render
			this.view.listView.itemsView.bind('finishRender', M.bind(this.onFinishRender, this));
			this.view.render();
			this.moreController = new MoreController({
			    view: this.view.moreView,
				model: this.model
			});			
		},
		
		onFinishRender: function() {
			console.log('tlinerender');
			this.constructor._super.onFinishRender.call(this);
			if (!this.scroller) {
			    this.scroller = new iScroll(this.view.$el[0], {useTransition: true});
			} else {
			    setTimeout(function(scroller) {
				    scroller.refresh();
				}, 100, this.scroller);
				// alert(this.model.getAttr().rows.length);
			}
		}
	
	});
	
	return TimelineController;
});