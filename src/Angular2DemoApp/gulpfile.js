var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

var destPath = './wwwroot/libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath).pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
                'es6-shim/es6-shim.min.js',
                'systemjs/dist/system-polyfills.js',
                'systemjs/dist/system.js',
                'reflect-metadata/Reflect.js',
                'rxjs/**',
                'zone.js/dist/**',
                '@angular/**',
                'jquery/dist/jquery.*js',
                'bootstrap/dist/js/bootstrap.*js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));

    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css'])
        .pipe(gulp.dest('./wwwroot/libs/css'));
});

var tsProject = ts.createProject('scripts/tsconfig.json');


gulp.task("ts", function (done) {
    var tsResult = gulp.src(["scripts/**/*.ts"]).pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/app'));
});


gulp.task('sass', function () {
    return gulp.src('content/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./wwwroot/libs/css'));
});


gulp.task("systemjs", function () {
    gulp.src(["scripts/systemjs.config.js"]).pipe(gulp.dest("wwwroot"));
});

gulp.task("watch", ["watch.ts", "watch.scss"]);


gulp.task("watch.ts", ["ts"], function () {
    return gulp.watch("scripts/**/*.ts", ["ts"]);
});

gulp.task("watch.scss", ["sass"], function () {
    return gulp.watch("content/sass/*.scss", ["sass"]);
});

gulp.task("default", ["systemjs", "scriptsNStyles", "ts", "sass", "watch"]);