'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    watch: {
      bower: {
        files: ['client/bower.json'],
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
        files: ['client/styles/**/*.{scss,sass}'],
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
          'client/**/*.html',
          'client/styles/**/*.css',
          'client/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

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
              connect.static('client')
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
              connect.static('client')
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: 'build/client'
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
        ignorePath:  /\.\.\//
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
    'copy',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
