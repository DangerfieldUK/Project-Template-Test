const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

async function minifyjs() {
    gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./wwwroot/js/'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./wwwroot/js/'))
};
exports.minifyjs = minifyjs;

async function minifycss(callback) {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./wwwroot/css'))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./wwwroot/css'));
}
exports.minifycss = minifycss