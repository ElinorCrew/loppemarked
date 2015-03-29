module.exports = function(grunt) {
 
    grunt.initConfig({
        uglify: {
            my_target: {
              files: {
                // Simple rule, just to get started
                'build/client/controllers/market-list-ctrl.js': ['client/controllers/market-list-ctrl.js']
              }
            }
        },

        jshint: {
            all: [
                'client/{,*/}*.js',
                'server/{,*/}*.js',
                'spec/{,*/}*.js'
            ]
        },

        clean: ['build/'],

        copy: {
            main: {
                src: 'client/*',
                dest: 'build/',
            },
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
 
    grunt.registerTask('build', ['clean', 'jshint', 'copy', 'uglify']);

    grunt.registerTask('clean-all', ['clean']);
};