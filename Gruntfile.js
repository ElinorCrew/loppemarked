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

    // Simple version, to be replaced with setup under
    copy: {
        main: {
            src: 'client/**/*',
            dest: 'build/',
        },
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: [{
            expand: true,
            cwd: 'client/app',
            src: '**/*.js',
            dest: 'build/client'
        }]
      }
    }

    // Copies remaining files to places other tasks can use
    // copy: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       dot: true,
    //       cwd: '<%= config.app %>',
    //       dest: '<%= config.dist %>',
    //       src: [
    //         '*.{ico,png,txt}',
    //         '.htaccess',
    //         '*.html',
    //         'views/**/*.html',
    //         'images/**/*.{webp}',
    //         'styles/fonts/**/*.*'
    //       ]
    //     }, {
    //       expand: true,
    //       cwd: '.tmp/images',
    //       dest: '<%= config.dist %>/images',
    //       src: ['generated/*']
    //     }]
    //   },
    //   styles: {
    //     expand: true,
    //     cwd: '<%= config.app %>/styles',
    //     dest: '.tmp/styles/',
    //     src: '**/*.css'
    //   }
    // },

    // Renames files for browser caching purposes
    // filerev: {
    //   dist: {
    //     src: [
    //       '<%= config.dist %>/app/**/*.js',
    //       '<%= config.dist %>/styles/**/*.css',
    //       '<%= config.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= config.dist %>/styles/fonts/*'
    //     ]
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    // useminPrepare: {
    //   html: '<%= config.app %>/index.html',
    //   options: {
    //     dest: '<%= config.dist %>',
    //     flow: {
    //       html: {
    //         steps: {
    //           js: ['concat', 'uglifyjs'],
    //           css: ['cssmin']
    //         },
    //         post: {}
    //       }
    //     }
    //   }
    // },

    // Performs rewrites based on filerev and the useminPrepare configuration
    // usemin: {
    //   html: ['<%= config.dist %>/**/*.html'],
    //   css: ['<%= config.dist %>/styles/**/*.css'],
    //   options: {
    //     assetsDirs: [
    //       '<%= config.dist %>',
    //       '<%= config.dist %>/images',
    //       '<%= config.dist %>/styles'
    //     ]
    //   }
    // },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/styles/main.css': [
    //         '.tmp/styles/**/*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/app/scripts.js': [
    //         '<%= config.dist %>/app/scripts.js'
    //       ]
    //     }
    //   }
    // },

    // concat: {
    //   dist: {}
    // },

    // imagemin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.app %>/images',
    //       src: '**/*.{png,jpg,jpeg,gif}',
    //       dest: '<%= config.dist %>/images'
    //     }]
    //   }
    // },

    // svgmin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.app %>/images',
    //       src: '**/*.svg',
    //       dest: '<%= config.dist %>/images'
    //     }]
    //   }
    // },

    // htmlmin: {
    //   dist: {
    //     options: {
    //       collapseWhitespace: true,
    //       conservativeCollapse: true,
    //       collapseBooleanAttributes: true,
    //       removeCommentsFromCDATA: true,
    //       removeOptionalTags: true
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.dist %>',
    //       src: ['*.html', 'views/**/*.html'],
    //       dest: '<%= config.dist %>'
    //     }]
    //   }
    // },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    // ngAnnotate: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '.tmp/concat/scripts',
    //       src: '*.js',
    //       dest: '.tmp/concat/scripts'
    //     }]
    //   }
    // },

    // Replace Google CDN references
    // cdnify: {
    //   dist: {
    //     html: ['<%= config.dist %>/*.html']
    //   }
    // },

    // Run some tasks in parallel to speed up the build process
    // concurrent: {
    //   server: [
    //     'compass:server'
    //   ],
    //   test: [
    //     'compass'
    //   ],
    //   dist: [
    //     'compass:dist',
    //     'imagemin',
    //     'svgmin'
    //   ]
    // }

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
    'uglify',
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
