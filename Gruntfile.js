module.exports = function (grunt) {
    grunt.initConfig({
      // Watch task config
      watch: {
        sass: {
          files: "assets/scss/*.scss",
          tasks: ['sass']
        }
      },
      // SASS task config
      sass: {
          dev: {
              files: {
                  // destination         // source file
                  "assets/css/styles.css" : "assets/scss/styles.scss"
              }
          }
      },
      browserSync: {
        default_options: {
          bsFiles: {
            src: [
              "assets/css/*.css",
              "*.html"
            ]
          },
          options: {
            watchTask: true,
            server: {
              baseDir: "./"
            }
          }
        },
    }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync','watch','sass']);
  };