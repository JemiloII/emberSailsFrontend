App.ApplicationSerializer = DS.JSONSerializer.extend({
	serializeIntoHash: function(hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    }
});
