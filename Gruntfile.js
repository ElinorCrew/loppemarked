// Generated on 2015-03-28 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/**/*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var config = {
      app: 'client',
      dist: 'build',
      server: 'server'
    },

    bowerJson = require('./client/bower.json'),
    bowerFolder = 'client/bower_components',

    bowerDependencyPaths = function(bowerJson, componentFolder, dependencyTypes) {
      var paths = [];

      dependencyTypes.forEach(function(type) {
        for (var dep in bowerJson[type]) {
          paths.push(componentFolder + '/' + dep + '/' + dep + '.js');
        }
      });

      return paths;
    };

  // Define the configuration for all the tasks
  grunt.initConfig({

    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['<%= config.app %>/bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: [
          './server/**/*.js',
          './client/**/*.js',
          '!./client/bower_components/**',
          '!./client/spec/**'
        ],
        tasks: ['newer:jshint:code'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['./client/spec/**/*.js'],
        tasks: ['newer:jshint:spec', 'karma']
      },
      compass: {
        files: ['<%= config.app %>/styles/**/*.{scss,sass}'],
        tasks: ['compass', 'autoprefixer:all']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/**/*.html',
          '<%= config.app %>/styles/**/*.css',
          '<%= config.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35730
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static(config.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('spec'),
              connect.static(config.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= config.dist %>/client'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      code: {
        src: [
          './server/**/*.js',
          './client/**/*.js',
          '!./client/bower_components/**',
          '!./client/spec/**'
        ]
      },
      spec: {
        options: {
          jshintrc: './client/spec/.jshintrc'
        },
        src: ['./client/spec/**/*.js']
      }
    },

    // Automatically inject Bower components into 
    wiredep: {
      app: {
        cwd: config.app,
        src: ['<%= config.app %>/index.html'],
        ignorePath:  /\.\.\//
      }
      // Currently not in use.
      // Following tags must be placed in index.html at desired location:
      // <!-- bower:css -->
      // <!-- endbower -->
      // sass: {
      //   src: ['<%= config.app %>/styles/**/*.{scss,sass}'],
      //   ignorePath: /(\.\.\/){1,2}bower_components\//
      // }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      dist: {
        options: {
          sassDir: '<%= config.app %>/styles',
          cssDir: '<%= config.app %>/styles',
          httpPath: "/",
          imagesDir: "img",
          javascriptsDir: "js",
          relativeAssets: true,
          lineComments: false
        }
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      all: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          flatten: true,
          src: '<%= config.app %>/styles/*.css',
          dest: '<%= config.app %>/styles/'
        }]
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: [config.dist],
      css: ['<%= config.app %>/styles/**/*.css']
    },

    copy: {
      app: {
          src: [
            'client/**/*', 
            '!client/bower_components/**/*', 
            '!client/app/**/*',
            '!client/scripts/**/*'
          ],
          dest: 'build/',
      },
      bower: {
        files: [{
          expand: true,
          src: ['client/bower_components/*/*.min.js'],
          dest: 'build/',
          ext: '.js'
        }]
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      app: {
        files: [{
          expand: true,
          cwd: 'client/app',
          src: '**/*.js',
          dest: 'build/client/app'
        }]
      },
      scripts: {
        files: [{
          expand: true,
          cwd: 'client/app',
          src: '**/*.js',
          dest: 'build/client/app'
        }]
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'wiredep',
      'compass',
      'autoprefixer:all',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    // 'wiredep',
    // 'useminPrepare',
    // 'concurrent:dist',
    // 'autoprefixer',
    // 'concat',
    // 'ngAnnotate',
    'copy',
    // 'cdnify',
    // 'cssmin',
    'uglify'
    // 'filerev',
    // 'usemin',
    // 'htmlmin'
  ]);


  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
