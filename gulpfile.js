var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create();



// Start gulp
gulp.task('start', ['watch']);

// Static Server + watching scss/html files
gulp.task('watch', ['html', 'sass', 'browser-sync'], function() {

    gulp.watch("./src/scss/styles.scss", ['sass']);
    gulp.watch("src/*.html", ['html']);
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./dest"
        }
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return sass('./src/scss/styles.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./dest/css'))
        //.pipe(concat('./dest/css/style.css'))
        .pipe(browserSync.stream());
});



gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./dest'))
        .pipe(browserSync.stream());
});


