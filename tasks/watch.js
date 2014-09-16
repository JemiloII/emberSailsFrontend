module.exports = {
	templates: {
		files: ['templates/**/*.hbs'],
		tasks: ['emberTemplates']
	},
	api :{
		files: ['api/**/*.js'],
		tasks: ['jshint', 'concat', 'uglify']
	},
	config:{
		files: ['config/**/*.js'],
		tasks: ['jshint', 'concat', 'uglify']
	}
};