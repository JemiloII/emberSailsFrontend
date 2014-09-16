App.MembersNewController = Ember.ObjectController.extend({
	selectedType: "Member",
	types: [
		"Member",
		"Creator",
		"Producer",
		"Moderator",
		"Administer"
	],
	actions: {
		create: function(){
			// console.log('ADDED NEW MEMBER');
			// console.log("Username: "+this.get('model.username') + " Type: " +this.get('model.type'));
			// console.log({username: this.get('model.username'), type: this.get('model.type')});
			this.get('model').save();
			this.transitionToRoute('members.index');
		}
	}
});