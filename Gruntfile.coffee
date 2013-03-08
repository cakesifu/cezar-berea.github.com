module.exports = (grunt) ->
  'use strict';

  grunt.initConfig {

    # Coffee to JS compilation
    coffee:
      compile:
        files:
          'javascripts/scripts.js': [
            'javascripts/**/*.coffee'
          ]

    compass:
      dist:
        # http://compass-style.org/help/tutorials/configuration-reference/#configuration-properties
        options:
          css_dir: 'stylesheets',
          sass_dir: 'sass',
          images_dir: 'images',
          javascripts_dir: 'javascripts',
          force: true

    jekyll:
      dev:
        src: ''
        desc: '_site'
        server: false
        pygments: true
        lsi: false
        safe: true

    reload:
      port: 3501,
      proxy:
        port: 3500,
        host: 'localhost'

    # default watch configuration
    watch:
      options:
        nospawn: true
      coffee:
        files: [
          'javascripts/**/*.coffee',
          'test/spec/**/*.coffee'
        ],
        tasks: 'coffee reload-all'
      compass:
        files: [
          'sass/**/*.{scss,sass}'
        ],
        tasks: 'compass reload-all'
      reload:
        files: [
          './*.{html,md,markdown}',
          './_layouts/*.{html,md,markdown}',
          './_includes/*.{html,md,markdown}',
          './_posts/*.{html,md,markdown}',
          'stylesheets/**/*.css',
          'javascripts/**/*.js',
          'images/**/*'
        ],
        tasks: 'reload-all'

    # Build configuration
    # -------------------

    # renames JS/CSS to prepend a hash of their contents for easier
    # versioning
    rev:
      js: 'javascripts/**/*.js',
      css: 'stylesheets/**/*.css',
      img: 'images/**'

    # usemin handler should point to the file containing
    # the usemin blocks to be parsed
#    'usemin-handler':
#      html: 'index.html'
#
    # update references in HTML/CSS to revved files
#    usemin:
#      html: ['**/*.html'],
#      css: ['**/*.css']

    connect:
      server:
        options:
          port: 3500,
          base: './_site'

  }

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-reload')
  grunt.loadNpmTasks('grunt-compass')
  grunt.loadNpmTasks('grunt-jekyll')

  grunt.registerTask 'reload-all', ['jekyll:dev', 'reload']
  grunt.registerTask 'build', ['coffee', 'compass']
  grunt.registerTask 'default', ['build', 'jekyll:dev', 'connect', 'reload', 'watch']
