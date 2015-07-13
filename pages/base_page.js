var BasePage = function() {
  var eleLeftMenuBar = $('.navbar.navbar-fixed-left');
  var btnLogOut = $('.logout');

  this.logOut = function() {
    btnLogOut.click();
    
    return require('./login_page');
  };

  this.isLoggedIn = function() {
    return browser.isElementPresent(eleLeftMenuBar).then(function(present) {
        return present == true;
      });
  };

  this.isLoggedOut = function() {

  };
};

module.exports = new BasePage();