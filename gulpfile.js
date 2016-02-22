var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('styles', function() {
    gulp.src('./public/css/*.css')
        .pipe(reload({stream:true}));
});

gulp.task('js', function () {
    return gulp.src('./public/js/*.js')
        // .pipe(concat('all.js'))
        // .pipe(gulp.dest('./public/js'))
        .pipe(reload({stream:true}));
});

gulp.task('html', function () {
    return gulp.src('./**/*.html')
        .pipe(reload({stream:true}));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('./public/css/*.css',['styles']);
    gulp.watch('./public/js/*.js',['js']);
    gulp.watch('./**/*.html', ['html']);
});

gulp.task('default', ['js', 'html', 'styles', 'watch'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
