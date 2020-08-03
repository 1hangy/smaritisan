 const gulp = require('gulp');
 const html = require('gulp-minify-html');
 gulp.task('small', function() {
     return gulp.src('src/*')
         .pipe()
 });

 gulp.task('hehe', function() { //新建gulp任务。
     return gulp.src('src/*.html') //引入所有的html文件
         .pipe(html()) //压缩
         .pipe(gulp.dest('dist/')); //输出
 });