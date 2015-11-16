'use strict';

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	minifyJs = require('gulp-minify');

gulp.task('styles', function(){
	return sass('src/sass/*.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 2 version'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
	gulp.src('src/js/*.js')
    .pipe(minifyJs({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function(){
	// Watch .scss files
	gulp.watch('src/sass/*.scss', ['styles']);
	// Warch .js files
	gulp.watch('src/js/*.js', ['scripts']);
});