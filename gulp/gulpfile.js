/**
 * Created by apple on 17/3/12.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');



gulp.task('test',function(){
    console.log('haha');
});

gulp.task('test2',function(){
    console.log('hehe');
});

gulp.task('default',['test','test2']);
//复制
gulp.task('task1',function(){
    gulp.src('index.html').pipe(gulp.dest('dest')).pipe(connect.reload());
});
//检测html
gulp.task('watch-html',function(){
    gulp.watch('index.html',['task1']);

});

gulp.task('copy-img',function(){
    //gulp.src('src/images/*.png').pipe(gulp.dest('dest/img'));
    gulp.src('src/images/**/*.png').pipe(gulp.dest('dest/img'));

});

gulp.task('sass',function(){
    gulp.src('src/sass/*.scss').pipe(sass()).pipe(gulp.dest('dest/css'))
});

//创建服务

gulp.task('servers',function(){
    connect.server({
        root:'dest',
        livereload:true
    })
});

gulp.task('a',['servers','watch-html']);

















