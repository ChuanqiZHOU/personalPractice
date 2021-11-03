const gulp = require('gulp');

gulp.task('first', async() => {

    await gulp.src('./src/default.html')
        .pipe(gulp.dest('./dist'));

});