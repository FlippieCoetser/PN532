'use strict'
var gulp = require('gulp'),
   tsc = require('gulp-typescript'),
   merge = require('merge2');
   
var tsProject = tsc.createProject('tsconfig.json');

gulp.task('Build', function(){
   var tsResult = tsProject.src()
       .pipe(tsc(tsProject));
   
   return merge([
      tsResult.dts.pipe(gulp.dest('lib')),
      tsResult.js.pipe(gulp.dest('lib'))     
   ]);
   
});
  
  
