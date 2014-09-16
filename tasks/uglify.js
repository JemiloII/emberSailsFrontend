module.exports = {
	options: {
		banner: '/*! <%= grunt.template.today("mm/dd/yyyy") %> */\n'
	},
	dist:{
		files: {
			'.tmp/thefancysnarks.min.js': '.tmp/thefancysnarks.js',
			'.tmp/libs.min.js': '.tmp/libs.js'
		}
	}
};