module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ["build"],
      dist: ["dist"]
    },
    concat: {
      dist: {
        src: [ 'js/jquery.min.js', 'js/jquery.easing.1.3.js', './js/jquery.isotope.min.js', 'js/jquery.elastislide.js', 'js/jquery.prettyPhoto.js', 'js/klass.min.js', 'js/code.photoswipe.jquery-3.0.4.min.js', 'js/jquery.jtwt.min.js', 'js/jquery.sidr.min.js', 'js/responsiveslides.min.js', 'js/scripts.js' ],
        dest: 'build/js/scripts.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        // files: {
        //   'build/css/style.css': 'css/style.css',
        // }
        files: [{
          expand: true,
          // cwd: 'styles',
          src: ['css/*.css'],
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    notify: {
      buid: {
        options: {
          message: 'Buid completed'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('default', ['clean', 'sass', 'concat', 'notify:buid']);
};
