/**
 *
 */
define(['Mstar', 'jq', '../Module', '../Model/HeaderModel', '../View/HeaderView', '../Controller/HeaderController'],
function(M, $, Module, HeaderModel, HeaderView, HeaderController) {
	
    var HeaderModule = M.factory(Module, {
        
        init: function(options) {
			this.constructor._superClass.call(this, options);
			if (!this.model) {
			    this.model = new HeaderModel(options);
			}
			if (!this.view) {
				this.view = new HeaderView({
				    model: this.model,
					tplId: 'tpl_header'
				});
			}
			this.view.render();
			if (!this.controller) {
				this.controller = new HeaderController({
				    view: this.view
				});
			}
        },
        
        destroy: function() {
            this.constructor._super.destroy.call(this);
        }
        
    });
    
	return HeaderModule;
});