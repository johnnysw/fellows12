/**
 * Created by apple on 17/3/12.
 */
var gulp = require('gulp');

gulp.task('test',function(){
    console.log('haha');
});

gulp.task('test2',function(){
    console.log('hehe');
});

gulp.task('default',['test','test2']);
//复制
gulp.task('task1',function(){
    gulp.src('index.html').pipe(gulp.dest('dest'));
})

gulp.task('watch-html',function(){
    gulp.watch('index.html',['task1']);
});

gulp.task('copy-img',function(){
    //gulp.src('src/images/*.png').pipe(gulp.dest('dest/img'));
    gulp.src('src/images/**/*.png').pipe(gulp.dest('dest/img'));

})








