App.MembersIndexRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('member');
	}
});