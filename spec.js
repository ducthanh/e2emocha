var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
 
const mochaTimeOut = 30000; //ms
 
test.describe('Ralph Says', function() {
  this.timeout(mochaTimeOut);
  test.it('shows a quote container', function () {
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    driver.get('http://ralphsays.github.io');
    driver.isElementPresent(webdriver.By.id('quote')).then(function(present) {
      assert.equal(present, true, "Quote container not displayed");
    });
    driver.quit();
  });
});