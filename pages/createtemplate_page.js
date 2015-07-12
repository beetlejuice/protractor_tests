var CreateTemplatePage = function() {
  var eleTemplateWizard = $('.well');

  this.goToNextStep = function() {
    browser.driver.actions().flick_element(eleTemplateWizard, -500, -500, 1000).perform();
  };

  this.goToPreviousStep = function() {
    browser.driver.actions().flick_element(eleTemplateWizard, 500, 500, 1000).perform();
  };
};

module.exports = new CreateTemplatePage();