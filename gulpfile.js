var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');



gulp.task('styles', function() {
    gulp.src('./src/scss/*.scss')
        .pipe(gulp.dest('./css'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./css/*.css',['styles']);
}); 

gulp.task('js', function () {
    return gulp.src('./js/*.js')
        // .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./'));
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('css-watch', ['css'], browserSync.reload);

gulp.task('serve', ['js', 'html', 'styles'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.js", ['js-watch']);
    gulp.watch("./*.html", ['html-watch']);
    gulp.watch("./*.css", ['styles']);
});
