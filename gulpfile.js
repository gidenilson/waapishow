// including plugins
var gulp = require('gulp'), 
    less = require("gulp-less"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');

// task
gulp.task('default', function () {
    gulp.src(['./src/less/*.less']) // path to your file
            .pipe(less())
            .pipe(concat('app.css'))
            .pipe(minifyCss())
            .pipe(gulp.dest('./public/css'));

    gulp.src(['./bower_components/jquery/dist/jquery.js', './src/js/main.js'])
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./public/js'));

   
});