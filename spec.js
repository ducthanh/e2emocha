var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
 
const mochaTimeOut = 30000; //ms
 
test.before(function(){
	this.timeout(mochaTimeOut);
	driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build(); 
}
	);

test.describe('Ralph Says', function() {
  this.timeout(mochaTimeOut);
  test.it('shows a quote container', function () {
    
    driver.get('http://ralphsays.github.io');
    driver.isElementPresent(webdriver.By.id('quote')).then(function(present) {
      assert.equal(present, true, "Quote container not displayed");
    });
  });


test.it('show a non-empty quote', function() {
  driver.get('http://ralphsays.github.io');
  driver.findElement(webdriver.By.id('quote')).getText().then(function(text){
  assert.notEqual(text, '', 'Quote is empty');
  });
  });
});

test.after(function(){
	driver.manage().deleteAllCookies();
})

test.after(function(){
	driver.quit();
});