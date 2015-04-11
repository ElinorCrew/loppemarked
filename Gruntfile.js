'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    express: {
      options: {
        port: 5000
      },
      web: {
        options: {
          script: 'server/server.js',
        }
      },
    },

    watch: {
      bower: {
        files: ['client/bower.json'],
        tasks: ['wiredep']
      },
      frontend: {
        options: {
          livereload: true
        },
        files: [
          'client/styles/**/*.css',
          'client/*.js',
          'client/**/*.js',
          'client/*.html',
          'client/**/*.html',
          '!./client/bower_components/**'

        ]
      },
      jsTest: {
        files: ['client/app/*.js',
          'client/app/*/*.js',
          'client/spec/*spec.js',
          'client/spec/**/*spec.js'
        ],
        tasks: ['newer:jshint:spec', 'karma']
      },
      compass: {
        files: ['client/styles/**/*.{scss,sass}'],
        tasks: ['compass', 'autoprefixer:all']
      },
      web: {
        files: [
          'server/**/*.js',
        ],
        tasks: [
          'express:web'
        ],
        options: {
          nospawn: true,
          atBegin: true,
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      code: {
        src: [
          './server/**/*.js',
          './client/**/*.js',
          'Gruntfile.js',
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

    wiredep: {
      app: {
        cwd: 'client',
        src: ['client/index.html'],
        ignorePath: /\.\.\//
      }
      // Currently not in use.
      // Following tags must be placed in index.html at desired location:
      // <!-- bower:css -->
      // <!-- endbower -->
      // sass: {
      //   src: ['client/styles/**/*.{scss,sass}'],
      //   ignorePath: /(\.\.\/){1,2}bower_components\//
      // }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'client/styles',
          cssDir: 'client/styles',
          httpPath: '/',
          imagesDir: 'img',
          javascriptsDir: 'js',
          relativeAssets: true,
          lineComments: false
        }
      }
    },

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
          src: 'client/styles/*.css',
          dest: 'client/styles/'
        }]
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    clean: {
      dist: ['build'],
      css: ['client/styles/**/*.css']
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
      bowerjs: {
        files: [{
          expand: true,
          src: ['client/bower_components/*/*.min.js'],
          dest: 'build/',
          ext: '.js'
        }]
      },
      bowermin: {
        files: [{
          expand: true,
          src: ['client/bower_components/*/*.min.js.map'],
          dest: 'build/'
        }]
      },
      bowercss: {
        files: [{
          expand: true,
          src: ['client/bower_components/*/*.css'],
          dest: 'build/'
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
    },
    parallel: {
      web: {
        options: {
          stream: true
        },
        tasks: [{
          grunt: true,
          args: ['watch:frontend']
        }, {
          grunt: true,
          args: ['watch:compass']
        }, {
          grunt: true,
          args: ['watch:web']
        }, {
          grunt: true,
          args: ['watch:bower']
        }, {
          grunt: true,
          args: ['watch:jsTest']
        }]
      },
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'copy',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'karma'
  ]);

  grunt.registerTask('start', 'Launch webserver and watch tasks', [
    'newer:jshint',
    'test',
    'wiredep',
    'compass',
    'autoprefixer:all',
    'parallel:web'
  ]);

  grunt.registerTask('default', [
    'start'
  ]);
};
