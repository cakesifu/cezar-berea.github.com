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
    less: {
      dev: {
        files: {
          "stylesheets/less.css": "less/less.less"
        }
      }
    },
    watch: {
      less: {
        files: ["less/**/*.less"],
        tasks: ["less:dev"],
      },
      src: {
        files: [
          'javascripts/**/*.js',
          '*.html',
          'stylesheets/**/*.css'
        ],
        tasks: ['jekyll'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('jekyll', 'exec:jekyll');
  grunt.registerTask('default', ["less:dev", 'jekyll', 'connect:server' , 'watch']);
};
