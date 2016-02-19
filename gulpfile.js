// including plugins
var gulp = require('gulp'),
        less = require("gulp-less"),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        minifyCss = require('gulp-minify-css');
        //copy = require('gulp-copy');

// task
gulp.task('default', function () {
    gulp.src(['./src/less/*.less',
              './bower_components/font-awesome/less/font-awesome.less']) // path to your file
            .pipe(less())
            .pipe(concat('app.css'))
            .pipe(minifyCss())
            .pipe(gulp.dest('./public/css'));

    gulp.src(['./bower_components/interact/dist/interact.js',
         './src/js/main.js',
        './src/js/class/*.js',
        './src/js/factory/ui/partials/*.js',
        './src/js/factory/ui/*.js',
        './src/js/factory/*.js',
        './src/js/service/*.js',
        './src/js/module/*.js',
        './tests/tests.js'])
            .pipe(concat('app.js'))
            //.pipe(uglify())
            .pipe(gulp.dest('./public/js'));
    
    gulp.src(['./bower_components/font-awesome/fonts/*.*'])
            .pipe(gulp.dest('./public/fonts'));
  

});