App = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
	LOG_ACTIVE_GENERATION: true,
	LOG_RESOLVER: true
});

App.Router.map(function(){
	this.resource('about');
	this.resource('forums', function(){

	});
	this.resource('threads');
	this.resource('posts');
	this.resource('members', function(){
		this.resource('members', {path: 'members/:member_id'});
		this.route('new');
	});
});

App.Router.reopen({
	rootURL: '/emberSails',
	location: 'history'
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:1337'
});

App.ApplicationSerializer = DS.RESTSerializer.extend({
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }
});

App.ApplicationStore = DS.Store.extend({});

Ember.DSModelRoute = Ember.Route.extend({
    deactivate: function() {
	    var model = this.get('controller.model');
	    model.rollback();
	    if (model.get('isNew')) {
	    	model.deleteRecord();
	    }
	},
	actions: {
    	willTransition: function(transition) {
    		var model = this.get('controller.model');
    	if (model.get('isDirty') && !this.willTransitionConfirm(transition)) {
        	transition.abort();
    	}
    }
	},
	willTransitionConfirm: function(transition) {
		/*jshint unused:false*/
		return true;
	}
});

App.Member = DS.Model.extend({
	username: DS.attr('string'),
	type: DS.attr('string'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date'),
});

App.MembersIndexRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('member');
	}
});

App.MembersNewRoute = Ember.DSModelRoute.extend({
	model: function(){
		return this.store.createRecord('member');
	},
	setupController : function(controller, model){
        controller.set("model", model);
    }
});

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
			this.store.createRecord('member', {username: this.get('model.username'), type: this.get('model.type')}).save();
			this.transitionToRoute('members.index');
		}
	}
});