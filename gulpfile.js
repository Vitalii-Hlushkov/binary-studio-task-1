var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();

var config = {
  htmlAssetsSrcDir: 'idex.html',
  htmlAssetsDestDir: 'index.html',
  scssAssetsSrcDir: 'src/scss/style.scss',
  cssAssetsDestDir: 'build/stylesheets/',
  jsAssetsSrcDir: 'src/js/*.js',
  jsAssetsDestDir: 'build/javascript/',
  imgAssetsSrcDir: 'src/img/**/*',
  imgAssetsDestDir: 'build/images/',
  production: !!plugins.util.env.production,
  sourceMaps: !plugins.util.env.production
};

//Minify HTML
gulp.task('html', function() {
  gulp.src(config.htmlAssetsSrcDir)
    .pipe(plugins.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.htmlAssetsDestDir))
});

// Compile CSS from Sass files and process it
gulp.task('stylesheets', function () {
  gulp.src(config.scssAssetsSrcDir)
    .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.init()))
    // .pipe(plugins.rubySass({style: 'compressed'}))
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({ browsers: ['last 2 versions'] }))
    // .pipe(plugins.uncss({
    //         html: ['index.html', 'posts/**/*.html', 'http://example.com']
    //     }))
    .pipe(config.production ? plugins.cleanCSS( {debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }) : plugins.util.noop())
    .pipe(plugins.csso())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.write('.')))
    .pipe(gulp.dest(config.cssAssetsDestDir));
});

// Concatenate & Minify JS
gulp.task('scripts', function () {
  gulp.src(config.jsAssetsSrcDir)
    .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.init()))
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.write('.')))
    .pipe(gulp.dest(config.jsAssetsDestDir));
});

//JS syntax verifiing
gulp.task('lint', function() {
  gulp.src(config.jsAssetsSrcDir)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

//Images processing
gulp.task('images', function() {
  gulp.src(config.imgAssetsSrcDir)
    .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.imgAssetsDestDir));
});

// Watch for changes in files
gulp.task('watch', function () {
   // Watch .js files
  gulp.watch(config.jsAssetsSrcDir, ['scripts']);
   // Watch .scss files
  gulp.watch(config.scssAssetsSrcDir, ['stylesheets']);
   // Watch image files
  gulp.watch(config.imgAssetsSrcDir, ['images']);
 });

 // Default Task
gulp.task('default', ['scripts', 'stylesheets', 'images', 'watch']);