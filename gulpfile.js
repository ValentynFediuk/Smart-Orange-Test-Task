// Gulpfile.js: SCSS, CSS, HTML, images, JS (webpack) + BrowserSync
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const { spawn } = require('child_process');
const cheerio = require('gulp-cheerio');

const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    main: 'src/scss/styles.scss',
    dest: 'dist/assets/css'
  },
  html: {
    src: 'src/*.html',
    dest: 'dist'
  },
  js: {
    dest: 'dist/assets/js'
  },
  images: {
    src: 'src/images/**/*',
    dest: 'dist/assets/images'
  }
};

// ------------------ TASKS ------------------

// SCSS dev with sourcemaps
function stylesDev() {
  return gulp.src(paths.scss.main)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// SCSS prod build + minify
function buildCss() {
  return gulp.src(paths.scss.main)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.scss.dest));
}

// Copy HTML
function html() {
  return gulp.src(paths.html.src)
    .pipe(cheerio(function ($) {
      $('img').each(function () {
        const src = $(this).attr('src');
        $(this).attr('src', '/assets/images/' + src.split('/').pop());
      });
    }))
    .pipe(gulp.dest(paths.html.dest));
}
// Copy images
function images() {
  return gulp.src(paths.images.src, { allowEmpty: true }) // allowEmpty щоб не падав, якщо папка пуста
    .pipe(gulp.dest(paths.images.dest));
}

// Webpack watch dev
let webpackProcess;
function webpackWatch(done) {
  webpackProcess = spawn('npx', ['webpack', '--config', 'webpack.config.js', '--watch', '--mode=development'], {
    stdio: 'inherit',
    shell: true
  });
  done();
}

// BrowserSync + watch
function serve() {
  browserSync.init({
    server: { baseDir: 'dist' },
    open: false,
    notify: false
  });

  gulp.watch(paths.scss.src, stylesDev);
  gulp.watch(paths.html.src, gulp.series(html, reload));
  gulp.watch('dist/assets/js/**/*.js').on('change', browserSync.reload);
  gulp.watch(paths.images.src, gulp.series(images, reload));
}

// Reload helper
function reload(done) {
  browserSync.reload();
  done();
}

// Cleanup webpack
function cleanUp() {
  if (webpackProcess) webpackProcess.kill();
}

// ------------------ EXPORTS ------------------
exports.stylesDev = stylesDev;
exports.buildCss = buildCss;
exports.html = html;
exports.images = images;
exports.serve = serve;

// Build for prod
exports.build = gulp.series(html, buildCss, images);

// Dev with watch
exports.default = gulp.series(html, stylesDev, webpackWatch, images, serve);

// Optional alias
exports['build:css'] = buildCss;

// Kill webpack on exit
process.on('exit', cleanUp);
process.on('SIGINT', () => { cleanUp(); process.exit(); });
