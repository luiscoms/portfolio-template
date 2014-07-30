module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    notify: {
      buid: {
        options: {
          message: 'Buid completed'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('default', ['notify:buid']);
};
