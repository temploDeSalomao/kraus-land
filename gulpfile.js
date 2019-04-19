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
		
		let bootstrap = gulp.src('node_modules/bootstrap/dist/css/bootstrap-grid.min.css')
							.pipe(gulp.dest('css/lib/')),

			fontawesome = gulp.src(['node_modules/font-awesome/fonts/**','node_modules/font-awesome/css/*.min.css'],{base:'node_modules/'})
							.pipe(gulp.dest('fonts/')),

			slickjs = gulp.src(['node_modules/slick-carousel/slick/*.min.js','node_modules/slick-carousel/slick/*-theme.css'],{base:'node_modules/slick-carousel'})
						.pipe(gulp.dest('dist/js/lib/')),

			jquery = gulp.src('node_modules/jquery/dist/jquery.min.js')
						.pipe(gulp.dest('dist/js/lib/jquery'));			


		console.log('--------- Files have been copied !---------' + '\r\n');
		done();
		return merge(bootstrap,fontawesome,slickjs,jquery);

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

	gulp.task('watch',function(){
		return(
			gulp.watch('dist/scss/**/*.scss',gulp.series('build-css')),
			gulp.watch('dist/js/**/*.js',gulp.series('minify-js')),
			gulp.watch('dist/images',gulp.series('imagemin'))
		);		
	});

	gulp.task('remove-node_modules',function(){
		return(
			gulp.src('./node_modules')
			.pipe(clean())
		);
		console.log('Now, we can dev! :s \r\n')

	});

	gulp.task('http_req',function(){
		console.log(http);
	})


	gulp.task('default',gulp.series(['copy-files','watch']));
