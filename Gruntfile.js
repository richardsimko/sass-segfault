'use strict';


module.exports = function(grunt) {
      require('load-grunt-tasks')(grunt);
      grunt.initConfig({
        sass: {
            test: {
                files: [
                    {
                        expand: true,
                        cwd: 'test',
                        src: '**/*.scss',
                        dest: 'build',
                        ext: '.css'
                    }
                ]
            }
        }
      })
}
