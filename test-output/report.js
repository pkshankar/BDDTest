$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/pkshank/eclipse-workspace/BDDTest/src/test/java/features/FreeCrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Features",
  "description": "",
  "id": "free-crm-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 353920,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario Outline: Free CRM login test scenario"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM login test scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "##Given user is on free crm login page"
    },
    {
      "line": 8,
      "value": "##When title of the page is Cogmento CRM"
    },
    {
      "line": 9,
      "value": "##Then user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 10,
      "value": "##Then user clicks on login button"
    },
    {
      "line": 11,
      "value": "##Then user lands on home page"
    },
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "##Examples:"
    },
    {
      "line": 14,
      "value": "##\t| username \t\t\t   | password      |"
    },
    {
      "line": 15,
      "value": "##\t| shankarpk89@gmail.com| freecrm@Pks89 |"
    },
    {
      "line": 16,
      "value": "##\t|jackC@gmail.com       | jack132\t   |"
    },
    {
      "line": 17,
      "value": "#"
    },
    {
      "line": 18,
      "value": "#"
    },
    {
      "line": 19,
      "value": "#"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 21,
      "value": "#Given user is on free crm login page"
    },
    {
      "line": 22,
      "value": "#When title of the page is Cogmento CRM"
    },
    {
      "line": 23,
      "value": "#Then user enters username and password and clicks login"
    },
    {
      "line": 24,
      "value": "#\t| username              | password      |"
    },
    {
      "line": 25,
      "value": "#\t| shankarpk89@gmail.com | freecrm@Pks89 |"
    },
    {
      "line": 26,
      "value": "#\t| jim@gmail.com         | jim123        |"
    },
    {
      "line": 27,
      "value": "#Then user clicks on login button"
    }
  ],
  "line": 29,
  "name": "scenario 1",
  "description": "",
  "id": "free-crm-features;scenario-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "given scenario 1",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "when scenario 1",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "then scenario 1",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.given_1()"
});
formatter.result({
  "duration": 317009620,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.when_1()"
});
formatter.result({
  "duration": 116439,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.then_1()"
});
formatter.result({
  "duration": 116440,
  "status": "passed"
});
formatter.after({
  "duration": 102990,
  "status": "passed"
});
formatter.before({
  "duration": 127411,
  "status": "passed"
});
formatter.before({
  "duration": 90957,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "scenario 2",
  "description": "",
  "id": "free-crm-features;scenario-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "given scenario 2",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "when scenario 2",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "then scenario 2",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.given_2()"
});
formatter.result({
  "duration": 238188,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.when_2()"
});
formatter.result({
  "duration": 84941,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.then_2()"
});
formatter.result({
  "duration": 102990,
  "status": "passed"
});
formatter.after({
  "duration": 228632,
  "status": "passed"
});
formatter.after({
  "duration": 75385,
  "status": "passed"
});
formatter.before({
  "duration": 94143,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "scenario 3",
  "description": "",
  "id": "free-crm-features;scenario-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "given scenario 3",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "when scenario 3",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "then scenario 3",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.given_3()"
});
formatter.result({
  "duration": 207397,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.when_3()"
});
formatter.result({
  "duration": 211643,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.then_3()"
});
formatter.result({
  "duration": 84233,
  "status": "passed"
});
formatter.after({
  "duration": 65475,
  "status": "passed"
});
});