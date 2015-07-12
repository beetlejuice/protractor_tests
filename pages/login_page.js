var LoginPage = function() {
  var url = '#/';
  var txtLogin = $('#inputLogin');
  var txtPassword = $('#inputPassword');
  var btnLogin = $('button[type="submit"]');

  this.go = function() {
    browser.get(url);
  };

  this.login = function(username, password) {
    username = username === undefined ? browser.params.login.username : username;
    password = password === undefined ? browser.params.login.password : password;

    txtLogin.clear();
    txtLogin.sendKeys(username);
    txtPassword.clear();
    txtPassword.sendKeys(password);
    btnLogin.click();
    
    return require('./presentationsgallery_page');
  };
};

module.exports = new LoginPage();