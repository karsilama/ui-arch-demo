var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

gulp.task('reload', ['less'], browserSync.reload ) ;

gulp.task('less', function(){
  return gulp.src('./src/less/**/*')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/assets/css/'))
})

gulp.task('watch', function(){
  gulp.watch('./src/*.html', ['reload']) ;
  gulp.watch('./src/app/**/*', ['reload']) ;
})

gulp.task('serve', ['less'], function() {
  browserSync({
    server : {
      baseDir : './src',
      routes : {
        '/bower_components' : 'bower_components'
      }
    }
  })
} )

gulp.task('default', ['serve','less','watch'] ) ;