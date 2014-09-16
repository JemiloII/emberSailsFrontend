App.MembersEditController = Ember.ObjectController.extend({
	types: [
		"Member",
		"Creator",
		"Producer",
		"Moderator",
		"Administer"
	],
	actions: {
		update: function(params){
			this.get("model").save();
			this.transitionToRoute('members.show', this.get('model.id'));
		}
	}
});