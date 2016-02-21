var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('styles', function() {
    gulp.src('./src/css/*.css')
        .pipe(reload({stream:true}));
});

gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        // .pipe(concat('all.js'))
        // .pipe(gulp.dest('./src/js'))
        .pipe(reload({stream:true}));
});

gulp.task('html', function () {
    return gulp.src('./**/*.html')
        .pipe(reload({stream:true}));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('./src/css/*.css',['styles']);
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./**/*.html', ['html']);
});

gulp.task('default', ['js', 'html', 'styles', 'watch'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
