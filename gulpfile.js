var gulp = require('gulp')
var browserSync = require('browser-sync').create()

function server() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

exports.server = server

// // 代理

// gulp.task('browser-sync', function() {
//   browserSync.init({
//     proxy: '你的域名或IP'
//   })
// })
