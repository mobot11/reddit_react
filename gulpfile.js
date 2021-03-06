'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/js/client.jsx')
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'));
});


gulp.task('default', ['browserify']);
