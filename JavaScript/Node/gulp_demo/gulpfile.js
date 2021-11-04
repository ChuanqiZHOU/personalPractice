const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const gulpcsso = require('gulp-csso');

gulp.task('first', async() => {

    await gulp.src('./src/default.html')
        .pipe(gulp.dest('./dist'));

});
//html code compressing
gulp.task('htmlmin', async() => {
    await gulp.src('./src/*.html')
        .pipe(fileinclude()) // extract common code
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));
});
// css code compressing
gulp.task('csso', async() => {
    await gulp.src('./src/css/*.css')
        .pipe(gulpcsso())
        .pipe(gulp.dest('./dist/css'));
})