function config(name){
	return require('./tasks/' + name +'.js');
}

module.exports = function(grunt){

	//configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: config('concat'),
		jshint: config('jshint'),
		emberTemplates: config('emberTemplates'),
		uglify: config('uglify'),
		watch: config('watch')
	});

	//load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['concat', 'jshint', 'emberTemplates', 'uglify']);
};