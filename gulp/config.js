var dest = './dist';
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**',
      '!' + dest + '/**/**.map'
    ]
  },
  sass: {
    src: src + '/sass/*.{scss}',
    dest: dest + '/css'
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/images'
  },
  js: {
    src: src + '/scripts/**/*.js'
  },
  markup: {
    src: src + '/htdocs/**',
    dest: dest
  }
};
