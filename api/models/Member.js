App.Member = DS.Model.extend({
	username: DS.attr('string'),
	type: DS.attr('string'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date'),
	usernameObserves: function(){

	}
});