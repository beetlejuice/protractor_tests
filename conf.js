var secrets = require('./secrets');

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

  framework: 'jasmine2',

  onPrepare: function() {
    require('jasmine-reporters');
    var ScreenshotReporter = require('./screenshotReporter');
    jasmine.getEnv().addReporter(new ScreenshotReporter());
  }
};