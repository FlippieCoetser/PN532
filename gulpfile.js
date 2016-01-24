'use strict'

var gulp = require('gulp'),
  bump = require('gulp-bump'),
  git = require('gulp-git'),
  filter = require('gulp-filter'),
  tagVersion = require('gulp-tag-version'),
  inquirer = require('inquirer');
  
  
  gulp.task('bump', function(){
      var questions = [
          {
              type: 'input',
              name: 'bump',
              message: 'Are you sure you want to bump the prerelease version? [Y/N]'
          }
      ]
      
      inquirer.prompt( questions, function( answers){
          if(answers.bump === 'Y'){
              return gulp.src(['./package.json'])
                .pipe(bump({type: 'prerelease'}))
                .pipe(gulp.dest('./'))
                .pipe(git.commit('bump pathc version'))
                .pipe(filter('package.json'))
                .pipe(tagVersion());
          }
      })
    
  })