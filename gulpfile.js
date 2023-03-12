var gulp = require('gulp')
var bs = require('browser-sync').create() // create a browser sync instance.

gulp.task('serve', function () {
	bs.init({
		server: {
			baseDir: './src',
		},
	})

	gulp.watch('src/*.html').on('change', bs.reload)
	gulp.watch('src/css/*.css').on('change', bs.reload)
	gulp.watch('src/js/*.js').on('change', bs.reload)
})
