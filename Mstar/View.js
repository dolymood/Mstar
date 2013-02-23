/**
 *
 */
define(['jq', 'Mstar', 'template', 'Model'], function($, M, Tpl, Model) {
    
	var ADD_TO_THIS = ['model', 'tpl'];
    
    function bindSysEvents() {
        var model = this.model;
        if (model && model instanceof Model) {
            model.bind('initialized', this.onModelInit, this);
            model.bind('reset', this.onModelReset, this);
            model.bind('change', this.onModelChange, this);
            model.bind('clear', this.onModelClear, this);
            model.bind('destroy', this.onModelDestroy, this);
        }
    }
    
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
            bindSysEvents.call(this);
		},
		
		// 修改。。
		setEle: function(elem) {
		    this.trigger('beforeChangeElem');
			this.$el = $(elem);
			this.trigger('changeElem');
			// 
		},
		
		setModel: function(model) {
		    if (!model) return this;
			var pre = this.model;
			if (pre) this.trigger('beforeChangeModel', pre);
			this.model = model;
			if (pre) this.trigger('changeModel', model);
			// this.render();
		},
		
		setTpl: function(tplId) {
		    if (!tplId) return this;
			var pre = this.tplId;
			if (pre) this.trigger('beforeChangeTpl', pre);
			this.tplId = tplId;
			if (pre) this.trigger('changeTpl', tplId);
			// this.render();
		},
		
        dom: function(func, context) {
            context = context || this;
            this.trigger('beforeDomChange');
            var ret = func.call(context, this);
            this.trigger('domChange');
            return ret;
        },
        
		render: function() {
		    var model = this.model;
			var tplId = this.tplId;
			if (!tplId) throw 'View.js : the tpl cannot be null.';
			this.trigger('beforeRender');
			 this.$el.html(Tpl.render(tplId, (model ? model.get(function(data) {return data;}) : {})));
			this.trigger('finishRender');
		},
		
		clear: function() {
		    this.$el.html('');
			this.trigger('clear');
		},
		
		remove: function() {
		    this.$el.remove();
			this.trigger('remove');
		},
        
        onModelInit: function() {},
        onModelReset: function() {
            this.render();
        },
        onModelChange: function() {
            // var changed = this.model.changed;
            // this.dom(function() {
                
            // });
        },
        onModelClear: function() {
            this.clear();
        },
        onModelDestroy: function() {
            this.remove();
        }
	});
	
	return (M.View = View);
});