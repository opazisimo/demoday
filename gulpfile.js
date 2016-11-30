var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function(){
  //code
});

gulp.task('lab', function(){
  console.log("Hola");
});

gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});