App.MembersEditRoute = Ember.DSModelRoute.extend({
	model: function(params){
		return this.store.find('member', params.member_id);
	},
	setupController : function(controller, model, params){
        controller.set("model", model);
    }
});