/**
 *
 */
define(['jq', 'Mstar', 'template'], function($, M, Tpl) {
    
	var ADD_TO_THIS = ['model', 'tpl']; 
	
	var View = M.factory({
	    
		Implements: M.Event, // 从Event中混入属性
		
		init: function(elem, options) {
		    this.mid = M.uniqueId('view');
			this.$el = $(elem);
		    options || (options = {});
			var tmp;
			ADD_TO_THIS.forEach(function(key) {
			    if ((tmp = options[key])) {
				    this[key] = tmp;
					delete options[key];
				}
			});
			this.options = options;
		},
		
		setEle: function() {
		    
		},
		
		setModel: function(model) {
		    if (!model) return this;
			var pre = this.model;
			if (pre) this.trigger('beforeChangeModel', pre);
			this.model = model;
			if (pre) this.trigger('changeModel', model);
			this.render();
		},
		
		setTpl: function(tplId) {
		    if (!tplId) return this;
			var pre = this.tplId;
			if (pre) this.trigger('beforeChangeTpl', pre);
			this.tplId = tplId;
			if (pre) this.trigger('changeTpl', tplId);
			this.render();
		},
		
		render: function() {
		    var model = this.model;
			var tplId = this.tplId;
			if (!tplId) throw 'View.js : the tpl cannot be null.';
			this.trigger('beforeRender');
			Tpl.render(tplId, (model ? model.get(function(data) {return data;}) : {}));
			this.trigger('finishRender');
		},
		
		clear: function() {
		    this.$el.html('');
		},
		
		remove: function() {
		    this.$el.remove();
		}
	});
	
	return (M.View = View);
});