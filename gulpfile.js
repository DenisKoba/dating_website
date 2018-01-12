
var sass = require("gulp-sass");

var gulp = require('gulp');

var runSequence = require('run-sequence');


gulp.task("sass", function(){
    return gulp.src('scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('scss/'))

});


//deafault
gulp.task('default', function(callback){
    runSequence('sass',
        callback
    )
});