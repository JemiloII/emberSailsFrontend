// Uses HTML5 Location History.
App.Router.reopen({
	rootURL: '/emberSails',
	location: 'history'
});

// Application Routes
App.Router.map(function(){
	this.resource('about');
	this.resource('forums', function(){

	});
	this.resource('threads');
	this.resource('posts');
	this.resource('members', function(){
		this.route('show', {path: ':member_id'});
		this.route('edit', {path: 'edit/:member_id'});
		this.route('new');
	});
});