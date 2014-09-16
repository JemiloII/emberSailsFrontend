// Deletes Object Models that are not saved when client lives page.
Ember.DSModelRoute = Ember.Route.extend({
    deactivate: function() {
	    var model = this.get('controller.model');
	    model.rollback();
	    if (model.get('isNew')) {
	    	model.deleteRecord();
	    }else if (model.get('isDirty')) {
	    	model.rollback();
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