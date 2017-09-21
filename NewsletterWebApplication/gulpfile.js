var gulp = require('gulp'),
    minifyCSS = require('gulp-csso'),
    newer = require('gulp-newer'),
    htmlclean = require('gulp-htmlclean'),
    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    stripdebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream');


gulp.task('css', function () {
    return gulp.src('./Content/main.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('html', function () {
    return gulp.src('Views/Form/*.html')
        .pipe(newer('build/html/'))
        .pipe(htmlclean())
        .pipe(gulp.dest('build/html'));
});

gulp.task('js', function () {
    return gulp.src('Scripts/App/*.js')
        .pipe(deporder())
        .pipe(concat('main.js'))
        .pipe(stripdebug())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('webpack', function () {
    return gulp.src('Scripts/App/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('default', ['css', 'html', 'js', 'webpack']);
