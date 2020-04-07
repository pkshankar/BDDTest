package stepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	WebDriver driver;
	WebDriverWait wait;

	@Given("^user is on free crm login page$")
	public void user_on_login_page() {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\pkshank\\eclipse-workspace\\MakeMyTrip_Framework\\Browser Drivers\\chromedriver_New.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
	}

	@When("^title of the page is Cogmento CRM$")
	public void title_page_cogmento_crm() {

		Assert.assertEquals("Cogmento CRM", driver.getTitle());
	}

//	@Then("^user enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_uid_pwd(String uName, String pwd) {
//
//		driver.findElement(By.name("email")).sendKeys(uName);
//		driver.findElement(By.name("password")).sendKeys(pwd);
//
//	}

	@Then("^user enters username and password and clicks login$")
	public void user_enters_uid_pwd(DataTable userCredentials) {

		// List<Map<String, String>> creds = userCredentials.asMaps(String.class,
		// String.class)
		for (Map<String, String> creds : userCredentials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("email")).sendKeys(creds.get("username"));
			driver.findElement(By.name("password")).sendKeys(creds.get("password"));
			driver.findElement(By.xpath("//div[text()='Login']")).click();
		}

	}

//	@Then("^user clicks on login button$")
//	public void click_login() {
//
//		driver.findElement(By.xpath("//div[text()='Login']")).click();
//	}

//	@Then("^user lands on home page$")
//	public void user_lands_home_page() {
//
////		wait.until(ExpectedConditions
////				.visibilityOf(driver.findElement(By.xpath("//div[@class='right menu']/span[@class='user-display']"))));
//
////		Assert.assertEquals("Shankar P K",
////				driver.findElement(By.xpath("//div[@class='right menu']/span[@class='user-display']")).getText());
//
//		Assert.assertTrue(driver.findElement(By.xpath("//input[@placeholder='Search']")).isDisplayed());
//	}
//	
//	Given given scenario 1
//	When when scenario 1
//	Then then scenario 1
	
	@Before
	public void setUp() {
		
		System.out.println("setup");
	}
	
	@After
	public void tearDown() {
		
		System.out.println("teardown");
	}
	
	@Before("@Second")
	public void before_Second() {
		
		System.out.println("before second");
	}
	
	@After("@Second")
	public void after_Second() {
		
		System.out.println("after second");
	}
	
	@Given("^given scenario 1$")
	public void given_1() {
		
		System.out.println("given scenario 1");
	}
	
	@When("^when scenario 1$")
	public void when_1() {
		
		System.out.println("when scenario 1");
	}
	
	@Then("^then scenario 1$")
	public void then_1() {
		
		System.out.println("then scenario 1");
	}
	
	@Given("^given scenario 2$")
	public void given_2() {
		
		System.out.println("given scenario 2");
	}
	
	@When("^when scenario 2$")
	public void when_2() {
		
		System.out.println("when scenario 2");
	}
	
	@Then("^then scenario 2$")
	public void then_2() {
		
		System.out.println("then scenario 2");
	}
	
	@Given("^given scenario 3$")
	public void given_3() {
		
		System.out.println("given scenario 3");
	}
	
	@When("^when scenario 3$")
	public void when_3() {
		
		System.out.println("when scenario 3");
	}
	
	@Then("^then scenario 3$")
	public void then_3() {
		
		System.out.println("then scenario 3");
	}



}
