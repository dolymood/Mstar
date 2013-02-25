/**
 *
 */
define(['Mstar', '../View', '../View/ItemsView'], function(M, View, ItemsView) {

    var ListView = M.factory(View, {
	    
		init: function(options) {
			options && (options.tplId || (options.tplId = 'tpl_list'));
			View.call(this, options);
			var that = this;
			this.itemsView = new ItemsView({
			    model: this.model
			}).bind('finishRender', function() {
			    that.trigger('finishRender');
			});
		},
		
		render: function() {
		    this.constructor._super.render.call(this);
			this.$el.append(this.itemsView.render().$el);
			return this;
		}
		
	});
	
	return ListView;
});