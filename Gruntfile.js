'use strict';

module.exports = function (grunt) {

	grunt.initConfig({

		// Image min
		imagemin : {
			production : {
				files : [
					{
						expand: true,
						cwd: '_site/images',
						src: '**/*.{png,jpg,jpeg}',
						dest: '_site/images'
					}
				]
			}
		},

		// CSS Minify
		cssmin: {
		  minify: {
		    src: '_site/css/main.css',
		    dest: '_site/css/main.css'
		  }
		},

		// Minify JS
		uglify: {
			js: {
				files: [
				{
					expand:true,
					cwd: '_site/js',
					src: ['**/*.js'],
					dest: '_site/js'
				}]
			}
		},

		// Post CSS
		 postcss: {
		    options: {
		      map: true, // inline sourcemap
		      processors: [
		        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
		      ]
		    },
		    dist: {
		      src: '_site/css/main.css'
		    }
		  }

	});


	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('build', ['postcss', 'cssmin', 'uglify', 'imagemin']);

};