/**
 *
 */
define(['Mstar', '../View', '../View/ListView', '../View/MoreView'], function(M, View, ListView, MoreView) {

    var TimelineView = M.factory(View, {
	    
		init: function(options) {
		    options && (options.tplId || (options.tplId = 'tpl_body'));
			View.call(this, options);
			var that = this;
			this.listView = new ListView({
			    model: this.model
			}).bind('finishRender', function() {
			    that.trigger('finishRender');
			});;
			this.moreView = new MoreView({
			    model: this.model
			});
		},
		// 重写render
		render: function() {
		    this.constructor._super.render.call(this);
			this.$el.find('.wrapper').append(this.listView.render().$el).append(this.moreView.render().$el);
			return this;
		}
		
	});
	
	return TimelineView;
});