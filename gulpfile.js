const gulp = require('gulp'),
		http = require('http'),
		series = require('gulp-series'),
		clean = require('gulp-clean'),
		merge = require('gulp-merge'),
		watch = require('gulp-watch'),
		sass = require('gulp-sass'),
		imagemin = require('gulp-imagemin'),
		uglify = require('gulp-uglify'),
		uglifycss = require('gulp-uglifycss');

		sass.compiler = require('node-sass');




	gulp.task('copy-files',function(done){
		
		let bootstrap = gulp.src(['node_modules/bootstrap/dist/css/bootstrap-grid.min.css','node_modules/bootstrap/dist/css/bootstrap-grid.min.css.map'],{base:'node_modules/bootstrap/dist/css/'})
							.pipe(gulp.dest('css/lib/')),

			fontawesome = gulp.src(['node_modules/font-awesome/fonts/**','node_modules/font-awesome/css/*.min.css'],{base:'node_modules/'})
							.pipe(gulp.dest('fonts/'));



		console.log('--------- Files have been copied !---------' + '\r\n');
		done();
		return merge(bootstrap,fontawesome);

	});



	gulp.task('build-css',function(){
			return (
				gulp.src('dist/scss/*.scss')
				.pipe(sass())
				.pipe(uglifycss())
				.pipe(gulp.dest('css/'))
			);
	});


	gulp.task('minify-js',function(){
			return(
				gulp.src('dist/js/**/*.js')
				.pipe(uglify())
				.pipe (gulp.dest('js/'))
			);
	});


	gulp.task('imagemin',function(){
		return(
			gulp.src('dist/images/**/*')
				.pipe(imagemin())
				.pipe(gulp.dest('images/'))
		);
	})

	gulp.task('watch',function(x){
		x();
		return(
			gulp.watch('dist/scss/**/*.scss',gulp.series('build-css')),
			gulp.watch('dist/js/**/*.js',gulp.series('minify-js')),
			gulp.watch('dist/images',gulp.series('imagemin'))
		);		
	});

	gulp.task('remove-node_modules',function(){
		return(
			gulp.src('./node_modules')
			.pipe(console.clean())
		);
		console.log('Now, we can dev! :s \r\n')

	});

	gulp.task('http_req',function(){
		console.log(http);
	})


	gulp.task('default',gulp.series(['copy-files','watch']));