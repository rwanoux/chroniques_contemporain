var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('C:\Users\Erwan\AppData\Local\FoundryVTT\Data\modules\chroniques_contemporain/scss/styles.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('C:\Users\Erwan\AppData\Local\FoundryVTT\Data\modules\chroniques_contemporain/css'))
  });