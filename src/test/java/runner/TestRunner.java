package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(value = Cucumber.class)
@CucumberOptions(features = "C:\\Users\\pkshank\\eclipse-workspace\\BDDTest\\src\\test\\java\\features\\FreeCrm.feature", 
glue = {
		"stepDefinition" }, 
plugin = { "pretty", "html:test-output","json:json-output/cucumber.json","junit:xml-output/cucumber.xml" }, 
monochrome = true, 
strict = true, 
dryRun = false)

public class TestRunner {

}
