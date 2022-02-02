const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("watch", async () => {
  gulp.watch("assets/sass/*.scss", async () => {
    gulp.src("assets/sass/*.scss").pipe(sass()).pipe(gulp.dest("assets/css"));
  });
});
