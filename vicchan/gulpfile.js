// trae dependencias
// TRAER DEPENDIENCIAS
 var gulp = require("gulp"); 
 var concat = require("gulp-concat");
 var uglify = require("gulp-uglify");
 var sass =require("gulp-sass");
 var cleanCSS=require("gulp-clean-css")
// TASK 
gulp.task("devjs", function(){
    gulp.src([
        "node_modules/bootstrap/dist/*.js",
        "node_modules/jquery/dist/*.js",
        "assets/js/*.js"
        ])
    .pipe(concat("main.js"))
    .pipe(uglify().on("error", function(e){
        console.log(e);
    }))
    .pipe(gulp.dest("js/"));
});
gulp.task("devcss", function(){
    gulp.src([
        "node_modules/bootstrap/scss/**/*.scss",
        //"node_modules/jquery/dist/*.js"
        // "assets/js/vendors/*.js",
        "assets/sass/**/*.scss"
        ])
    .pipe(sass().on("error",sass.logError))
    .pipe(concat("main.css"))
    //.pipe(uglify().on("error", function(e){
       // console.log(e);
    //}))
    .pipe(gulp.dest("css/"));
});
gulp.task("prodjs", function(){
    gulp.src([
        "node_modules/bootstrap/dist/*.min.js",
        "node_modules/jquery/dist/*.min.js",
        "assets/js/*.js"
        ])
    .pipe(concat("main.js"))
    .pipe(uglify().on("error", function(e){
        console.log(e);
    }))
    .pipe(gulp.dest("js/"));
});
gulp.task("prodcss", function(){
    gulp.src([
        "node_modules/bootstrap/scss/**/*.scss",
        //"node_modules/jquery/dist/*.js"
        // "assets/js/vendors/*.js",
        "assets/sass/**/*.scss"
        ])
    .pipe(sass().on("error",sass.logError))
    .pipe(concat("main.min.css"))
    .pipe(uglify().on("error", function(e){
       // console.log(e);
    //}))
    .pipe(gulp.dest("css/"));
});
gulp.task("default", function(){
	gulp.watch("assets/sass/**/*.scss",['devcss']);
	gulp.watch("assets/js/**/*.js",['devjs']);
});

