/**
 *
 */
define(['Mstar', 'jq', '../Module', '../Model/BaseModel', '../View/TimelineView', '../Controller/TimelineController'],
function(M, $, Module, BaseModel, TimelineView, TimelineController) {
	
    var TimelineModule = M.factory(Module, {
        
        init: function(options) {
			this.constructor._superClass.call(this, options);
			if (!this.model) {
			    this.model = new BaseModel(options);
			}
			if (!this.view) {
				this.view = new TimelineView({
				    model: this.model,
					tplId: 'tpl_body'
				});
			}
			if (!this.controller) {
				this.controller = new TimelineController({
				    model: this.model,
					view: this.view
				});
			}
        },
        
        destroy: function() {
            this.constructor._super.destroy.call(this);
        }
        
    });
    
	return TimelineModule;
});