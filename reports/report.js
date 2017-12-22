$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Purcase of a product",
  "description": "\r\nThis feature file deals with the product search and add to cart.\r\nIf a product is available in the web page, then it can be added to the cart.\r\nIf a product is not available, then it can be posted on request by a mail.",
  "id": "purcase-of-a-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13305335591,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Product on stock",
  "description": "",
  "id": "purcase-of-a-product;product-on-stock",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.after({
  "duration": 33979,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#When I search for a iphone"
    },
    {
      "line": 11,
      "value": "#And I choose the first autofill option"
    },
    {
      "line": 12,
      "value": "#And I add the first product to cart"
    },
    {
      "line": 13,
      "value": "#Then I should be able to checkout the cart"
    },
    {
      "line": 14,
      "value": "## maximun 7 to 10 line as by standard and When condition is not too much"
    }
  ],
  "line": 18,
  "name": "Product on stock2",
  "description": "",
  "id": "purcase-of-a-product;product-on-stock2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am able to access http://flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I search for a apple phone",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I add the first product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to checkout the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://flipkart.com",
      "offset": 20
    }
  ],
  "location": "Stepder.i_am_able_to_access_http_flipkart_com(String)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 8433254339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple phone",
      "offset": 15
    }
  ],
  "location": "Stepder.i_search_for_a_apple_phone(String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 2118997253,
  "status": "passed"
});
formatter.match({
  "location": "Stepder.i_choose_the_first_autofill_option()"
});
formatter.result({
  "duration": 3439172633,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: \nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027WKS60086\u0027, ip: \u0027172.21.64.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 57.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 6128, moz:profile: C:\\Users\\himanshu.sugandhi\\..., moz:webdriverClick: false, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 8e24946d-9a83-4633-9e45-730977777d38\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.isobar.ecom.Flipkart.Stepder.i_choose_the_first_autofill_option(Stepder.java:89)\r\n\tat ✽.And I choose the first autofill option(feature/Test.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepder.i_add_the_first_product_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepder.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17384,
  "status": "passed"
});
});