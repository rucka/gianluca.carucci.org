module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
                   publish: 'publish'
               },
        copy: {
                  target: {
                        cwd: 'client',
                        expand: true,
                        src:['**','!css/**','!images_github/**',  '!scripts/**','!vendor/**'], 
                        dest: 'publish/'
                    },
                    cssdev: {
                        cwd: 'client',
                        expand: true,
                        src:['css/**'],
                        dest: 'publish/'
                    }
              },
        uglify: {
            options : {
                sourceMap: true,
                sourceMapIncludeSources:true,
            },
            javascript : {    
                files : [{
                    cwd: 'client/',
                    src: ['**/*.js'],
                    dest: 'publish/',
                    expand: true,
                    rename: function (dest, src) {
                                    var folder = src.substring(0, src.lastIndexOf('/'));
                                                    var filename = src.substring(src.lastIndexOf('/'), src.length);

                                                                    filename = filename.substring(0, filename.lastIndexOf('.'));

                                                                                    return dest + folder + filename + '.js';
                                                                                                }
            }]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['clean','copy', 'uglify']);    
};
