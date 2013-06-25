module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          base: '_site'
        }
      }
    },
    exec: {
      jekyll: {
        cmd: 'jekyll'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      src: {
        files: [
          'javascripts/**/*.js',
          '*.html',
          'stylesheets/**/*.css'
        ],
        tasks: ['jekyll']
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('jekyll', 'exec:jekyll');
  grunt.registerTask('default', ['jekyll', 'connect:server' , 'watch']);
};
