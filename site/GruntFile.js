module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ["build"],
      dist: ["dist"]
    },
    concat: {
      options: {
        stripBanners: {
          block: true
        },
      },
      js: {
        separator: ';',
        src: [
          'js/jquery.min.js',
          'js/jquery.easing.1.3.js',
          // 'js/jquery.isotope.min.js',
          // 'js/jquery.elastislide.js',
          // 'js/jquery.prettyPhoto.js',
          // 'js/klass.min.js',
          // 'js/code.photoswipe.jquery-3.0.4.min.js', // requires klass
          // 'js/jquery.jtwt.min.js', // twitter
          'js/jquery.sidr.min.js', // menu bar
          // 'js/responsiveslides.min.js',
          'js/scripts.js'
        ],
        dest: 'build/js/scripts.js'
      },
      css: {
        separator: ';',
        src: [
          'css/o-responsive.css',
          'css/style.css',
          'css/sugar.css',
          // 'css/prettyPhoto.css',
          // 'css/photoswipe.css',
          'css/glyphicons.css'
        ],
        dest: 'build/css/style.css'
      }
    },
    copy: {
      build: {
        files: [{
          src: 'fonts/**/*',
          dest: 'build/'
        },{
          src: 'images/**/*',
          dest: 'build/'
        }]
      }
    },
    notify: {
      build: {
        options: {
          message: 'Buid completed'
        }
      }
    },
    processhtml: {
      build: {
        options: {
          process: true,
          data: {
            title: 'My app',
            message: 'This is production distribution'
          }
        },
        files: {
          'build/index.html': ['index.html']
        }
      }
    },
    sass: {
      build: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/o-responsive.css': 'css/o-responsive.css',
          'build/css/style.css': 'css/style.css',
          'build/css/sugar.css': 'css/sugar.css',
          // 'build/css/prettyPhoto.css': 'css/prettyPhoto.css',
          // 'build/css/photoswipe.css': 'css/photoswipe.css',
          'build/css/glyphicons.css': 'css/glyphicons.css'
          // 'build/css/style.css': 'css/style.scss'
        }
        // files: [{
        //   expand: true,
        //   // cwd: 'styles',
        //   src: ['css/*.css'],
        //   dest: 'build',
        //   ext: '.css'
        // }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.registerTask('build', ['clean', 'concat', 'processhtml:build', 'copy:build', 'notify:build']);
  grunt.registerTask('default', ['build']);
};
