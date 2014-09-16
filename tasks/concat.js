module.exports = {
	option: {
		separator: ';\n'
	},
	app: {
		src: [
			'config/app.js',
			'config/**/*.js',
			'api/models/**/*.js',
			'api/controllers/**/*.js',
			'api/routes/**/*.js',
			'api/**/*.js'
		],
		dest: '.tmp/<%= pkg.name %>.js'
	},	
	lib: {
		src: [
			'libs/jquery-2.1.1.min.js',
			'libs/sails.io.js',
			'libs/handlebars-1.3.0.js',
			'libs/ember.js',
			'libs/ember-data.js',
			'libs/**/*.js'
		],
		dest: '.tmp/libs.js'
	}
};