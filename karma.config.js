module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'jasmine-matchers'],
    preprocessors: {
      '*.js': ['coverage']
    },
    files: [
      './custom-matchers.js',
      '*.js',
      '*.spec.js'
    ],
    plugins: ['karma-jasmine',
     'karma-jasmine-matchers',
      'karma-chrome-launcher',
      'karma-coberage'
    ],
    reporters: ['dots', 'coverage'],            //report results in this format
    color: true,                   // enable / disable colors in the output (reporters and logs)
    port: 9876,                    // web server port
    browsers: ['ChromeHeadless'],  //run in Chrome
    singleRun: true                //just run once by default
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' }
      ]
    }
  });
};
