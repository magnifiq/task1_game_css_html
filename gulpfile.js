const gulp=require("gulp");
const imagemin=require('gulp-imagemin');
const uglify=require('gulp-uglify');
const sass=require('gulp-sass');
const concat=require('gulp-concat');

gulp.task('mes', function(){
    return console.log("woooo")
})

gulp.task('default', function(){
    return console.log("ooops! I'm working")
})

gulp.task("copy", function(){
    gulp.src("src/*.html")
    .pipe(gulp.dest('dist'))
})

gulp.task("imageMin", function(){
    gulp.src("src/images/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

gulp.task("minify", function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
})

get.task('sass', function(){
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
})


gulp.task('default', ['mes', 'copy', 'imageMin', 'sass', 'concatScripts'])


gulp.task("concatScripts", function(){
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})


gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['concatScripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copy']);
})