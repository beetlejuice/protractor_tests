var mkdirp = require('mkdirp');
var fs = require('fs');
var path = require('path');

var ScreenshotReporter = function(dir_) {
  var dir = dir_ ? dir_ : 'tmp/screenshots';
  dir = path.join(dir, new Date().toISOString());
  var index = 0;

  var screenshot = function(testDescription, id) {
    var fname = testDescription.replace(/\s/g, '_') + '_' + id + '.png';
    mkdirp(dir);
    browser.takeScreenshot().then(function(png) {
      var stream = fs.createWriteStream(path.join(dir, fname));
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  };
  
  var originalAddExpectationResult = jasmine.Spec.prototype.addExpectationResult;
  jasmine.Spec.prototype.addExpectationResult = function() {
    ++index;
    if (!arguments[0]) {
      screenshot(this.result.fullName, index);
    }
    return originalAddExpectationResult.apply(this, arguments);
  };

  this.specDone = function(result) {
  // if (result.failedExpectations.length > 0) {
  //     screenshot(result.fullName, 'end');
  //   }
    index = 0;
  };
};

module.exports = ScreenshotReporter;
