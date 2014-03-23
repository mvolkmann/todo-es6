'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    clean: ['build'],
    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },
    csslint: {
      strict: {
        options: {
          ids: false // allows ids to be used in CSS selectors
        },
        src: ['styles/*.css']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'scripts/**/*.js']
    },
    traceur: {
      options: {
        //includeRuntime: true, // includes runtime code in generated file
        traceurOptions: '--experimental --sourcemap'
      },
      all: {
        files: {
          // Just need to transpile main file which imports others.
          'build/app.js': ['scripts/app.js']
        }
      }
    },
    watch: {
      options: { livereload: true },
      css: {
        files: ['styles/*.css'],
        tasks: ['csslint']
      },
      html: {
        files: ['*.html'],
        tasks: [] // just watching for changes
      },
      js: {
        files: ['Gruntfile.js', 'scripts/**/*.js'],
        tasks: ['jshint', 'traceur']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default',
    ['csslint', 'jshint', 'traceur', 'connect', 'watch']);
};
