const { src, dest, parallel, watch } = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//browser
function browser(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch('*.html').on('change', browserSync.reload);

}

function  sass(log){
    return src('./sass/import.scss')
        .pipe(gulpSass())
        .pipe(dest('./css/'))
        .pipe(browserSync.stream())
}

function watcher(done) {
    watch('./sass/', sass)
    done();
}

module.exports = {
    browser: parallel(browser, watcher)
}