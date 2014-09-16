module.exports = {
	compile: {
		options: {
			templateName: function(sourceFile) {
				return sourceFile.replace(/templates\//, '');
			}
		},
		files: {
			".tmp/templates.js": "templates/**/*.hbs"
		}
	}
};