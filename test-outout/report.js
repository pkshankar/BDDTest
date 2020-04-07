$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/pkshank/eclipse-workspace/BDDTest/src/test/java/features/FreeCrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Features",
  "description": "",
  "id": "free-crm-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-features;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on free crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters email address and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_on_login_page()"
});
formatter.result({
  "duration": 10792582271,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_page_cogmento_crm()"
});
formatter.result({
  "duration": 33918940,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_uid_pwd()"
});
formatter.result({
  "duration": 552018208,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_login()"
});
formatter.result({
  "duration": 116564815,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_lands_home_page()"
});
formatter.result({
  "duration": 195229802,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@placeholder\u003d\u0027Search\u0027]\"}\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WKWIN5154091\u0027, ip: \u002710.102.71.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.11 (eaaae9de6b899..., userDataDir: C:\\Users\\pkshank\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:50634}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2ff4c12f0f94dd32e357875647d39c34\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027Search\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinition.LoginStepDefinition.user_lands_home_page(LoginStepDefinition.java:57)\r\n\tat ✽.Then user lands on home page(C:/Users/pkshank/eclipse-workspace/BDDTest/src/test/java/features/FreeCrm.feature:9)\r\n",
  "status": "failed"
});
});