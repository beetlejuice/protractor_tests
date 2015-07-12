var secrets = require('./secrets');
var HtmlReporter = require('protractor-html-screenshot-reporter');

var timeStamp = new Date().toISOString();

var reporter = new HtmlReporter({
  baseDirectory: './tmp/results/' + timeStamp,
  takeScreenShotsOnlyForFailedSpecs: true
});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./specs/login_spec.js'],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: secrets.url,

  params: {
    login: secrets.credentials
  },

  // framework: 'jasmine2',

  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  }
};