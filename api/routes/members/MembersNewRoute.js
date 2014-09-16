App.MembersNewRoute = Ember.DSModelRoute.extend({
	model: function(){
		return this.store.createRecord('member');
	},
	setupController : function(controller, model){
        controller.set("model", model);
    }
});