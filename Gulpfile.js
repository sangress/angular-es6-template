var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var templateCache = require('gulp-angular-templatecache');

var mainJsFileName = 'app.js';
var mainJsFilePath = 'src/js/' + mainJsFileName;
var mainJsDistFilePath = 'dist/app.js';

gulp.task('browserify', function() {
    gulp.src('src/js/app.js')
        .pipe(browserify({transform: 'babelify'}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));
    gulp.src('src/style/**/main.css')
        .pipe(gulp.dest('dist/style'));
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('less', function () {
    gulp.src('src/style/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/style'));
});

gulp.task('build', ['less', 'angularTplCache'], function () {
    gulp.start('default');
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch(['src/**/*.*', 'src/style/*.less'], ['build']);
    //gulp.watch('src/style/*.less', ['less', 'copy']);
});

gulp.task('angularTplCache', function () {
    return gulp.src('src/js/components/**/*.html')
        .pipe(templateCache('templates.js', {
            standalone: true,
            root: 'components'
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('dev', ['build'], function () {
    gulp.start('watch');
});

