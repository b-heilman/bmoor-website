var $ = require('gulp-load-plugins')(),
	del = require('del'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	argv = require('yargs').argv,
	webpack = require('webpack'),
	template = require('gulp-template'),
	sourcemaps = require('gulp-sourcemaps'),
	runSequence = require('run-sequence'),
	webpackStream = require('webpack-stream');

gulp.task( 'clean', function(){
	return del(['./dist/**/*','./dist/*']);
});

gulp.task( 'build-scss', function () {
	// writes to timeline.css
	return gulp.src( 'styles/scss/main.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass().on('error', sass.logError) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest('./dist') );
});

gulp.task( 'build-index', function(){
	var target = argv.env ? argv.env.toLowerCase() : 'dev',
		path = './conf/env/'+target+'.js',
		env;

	try {
		env = require( path );
	} catch ( ex ){
		console.log( 'could not load env:', target );
		env = {};
	}

	return gulp.src( ['templates/*.html'] )
		.pipe( template({
			app: require('./app/info.js').name,
			env: JSON.stringify( env ),
			build: +(new Date()),
			envVar: env
		}) )
		.pipe( gulp.dest('./dist') )
});

gulp.task('build-app', function() {
	var plugins = [
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				filename: 'vendor.bundle.js'
			})
		];

	if ( argv.env === 'server' ){
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				minimize: true
			})
		);
	}

	return gulp.src('/src')
		.pipe(webpackStream({
			entry: {
				app: './app/index.js',
				vendor: [
					'angular',
					'angular-ui-router',
					'oclazyload'
				]
			},
			module: {
				rules: [{
					test: /\.js$/,
					loader: "babel-loader",
					options: {
						presets: ['es2015']
					}
				},{
					test: /\.html$/,
					use: [
						'html-loader'
					]
				},{
					test: /\.scss$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					]
				}]
			},
			output: {
				filename: 'app.js'
			},
			devtool: 'source-map',
			plugins: plugins
		}, webpack))
		.pipe(gulp.dest('./dist'));
});

gulp.task( 'copy', function(){
	return gulp.src(['./content/**/*'])
		.pipe(gulp.dest('./dist'));
});

gulp.task( 'watch', function(){
	gulp.watch( 'styles/scss/**.scss', ['build-scss'] );
	gulp.watch( 'templates/*.html', ['build-index'] );
	gulp.watch( ['app/**/*','modules/**/*'], ['build-app'] );
});

gulp.task( 'build', function( cb ){
	runSequence(
		['clean'],
		[
			'build-scss',
			'build-index',
			'build-app'
		],
		['copy'],
		cb
	)
});

gulp.task( 'serve', ['build','watch'], function(){
	gulp.src('./dist').pipe(
		$.webserver({
			port: 9000,
			host: 'localhost',
			//fallback: 'index.html',
			livereload: true,
			open: true,
		})
	);
});

gulp.task( 'default', ['serve'] );
