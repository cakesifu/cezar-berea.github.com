module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          base: '_site',
          hostname: "*"
        }
      }
    },
    exec: {
      jekyll: {
        cmd: 'jekyll build --future --drafts'
      }
    },
    less: {
      options: {
        paths: [
          "./",
          "./bower_components"
        ]
      },
      dev: {
        files: {
          "styles/main.css": "less/main.less"
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
          'scripts/**/*.js',
          '*.html',
          'styles/**/*.css',
          '_posts/**/*.*',
          '_layouts/**/*.*',
          '_includes/**/*.*'
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
  grunt.registerTask('server', ["less:dev", 'jekyll', 'connect:server' , 'watch']);
  grunt.registerTask('build', ["less:dev", 'jekyll']);
};
