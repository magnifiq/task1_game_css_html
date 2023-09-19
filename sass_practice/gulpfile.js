const {src, dest, watch, series}=require('gulp') //we import here methods that we will use
const sass=require('gulp-sass')(require('sass')) //we set here sass
const purgecss=require('gulp-purgecss');

function buildStyles(){
    return src('shinobi/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({content:['*.html']}))
    .pipe(dest('css'))
}

function watchTask(){
    watch(['shinobi/**/*.scss', '*.html'], buildStyles)
}

exports.default=series(buildStyles,watchTask);