var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('dist/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});


gulp.task('autoprefixer', () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
);

gulp.task('watch', function() {
    gulp.watch('dist/sass/**/*.scss', ['sass']);
});

