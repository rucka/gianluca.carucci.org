module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
                   publish: 'publish',
               },
        copy: {
                  target: {
                        cwd: 'client',
                        expand: true,
                        src:['**','!css/**','!images_github/**', '!*.js', '!scripts/**','!vendor/**'], 
                        dest: 'publish/'
                    },
                    cssdev: {
                        cwd: 'client',
                        expand: true,
                        src:['css/**'],
                        dest: 'publish/'
                    }
              },
        browserify: {
            main: {
                options: {
                    shim: {
                        jquery: {
                            path : 'client/vendor/jquery.js',
                            export: '$'
                        },
                        'jquery.html5loader' : {
                            path: 'client/vendor/jquery.html5loader/jquery.html5loader.js',
                            export: null,
                            depends: {jquery:'$'}
                        },
                        'jquery.html5Loader.line' : {
                            path: 'client/vendor/jquery.html5loader/animations/jquery.html5Loader.line.js',
                            export: null,
                            depends: {jquery:'$'}
                        },
                        waypoints: {
                            path: 'client/vendor/waypoints.js',
                            export: null,
                            depends: {jquery:'$'}
                        },
                        'jquery.knob': {
                            path: 'client/vendor/jquery.knob.js',
                            export: null,
                            depends: {jquery:'$'}
                        },
                        'jquery.scrollTo': {
                            path: 'client/vendor/jquery.scrollTo.js',
                            export: null,
                            depends: {jquery:'$'}
                        },
                        'jquery.awesomeCloud': {
                            path: 'client/vendor/jquery.awesomeCloud.js',
                            export: null,
                            depends: {jquery:'$'}
                        },
                    },
                    alias: [
                        'client/vendor/jquery.js:jquery', 
                        'client/vendor/jquery.html5loader/jquery.html5Loader.js:jquery.html5loader', 
                        'client/vendor/jquery.html5loader/animations/jquery.html5Loader.line.js:jquery.html5Loader.line',
                        'client/vendor/waypoints.js:waypoints',
                        'client/vendor/jquery.awesomeCloud.js:jquery.awesomeCloud',
                        'client/vendor/jquery.knob.js:jquery.knob',
                        'client/vendor/jquery.scrollTo.js:jquery.scrollTo',
                        'client/app.js:app'
                    ],
                    bundleOptions:{
                        debug:true, 
                    },
                },
                src : ['client/loader.js'],
                dest: 'publish/app.js'
            }
        },
        uglify: {
            html5 : {
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                },
                files: {
                    'publish/html5.js': 'client/vendor/html5.js'                    
                }   /*[{
                    cwd: 'client/',
                    src: ['vendor/html5.js'],
                    dest: '../publish/',
                    //expand: true,
                }]*/
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-exorcise');
    grunt.registerTask('default', ['clean','copy', 'browserify', 'uglify']);    
};
