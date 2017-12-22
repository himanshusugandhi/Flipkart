package com.isobar.ecom.Flipkart;

import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepder {
	private static WebDriver driver;
	
	static Scenario s;
	
	public static void screenshot() {
		
		   try {
			    byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			    s.embed(screenshot, "image/png");
			   } catch (WebDriverException somePlatformsDontSupportScreenshots) {
			    System.err.println(somePlatformsDontSupportScreenshots.getMessage());
			   }
			  }
	
	@Before ("@tag1")
	public void before(Scenario scenario) {
	driver = new FirefoxDriver();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	//Object scenario;
	s = scenario;
	
		
		System.out.println("This is brfore hook");
	}
  @After 
  public void after(Scenario scenario) {
//	  driver.quit();
	  
		   
	  
  }


@Given("^I am able to access ([^\"]*)$")
public void i_am_able_to_access_http_flipkart_com(String url) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver.get(url);
    WebElement close = driver.findElement(By.xpath("//button[text()='✕']"));
    close.click();
    screenshot();
    
}

@When("^I search for a (.*)$")
public void i_search_for_a_apple_phone(String product) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	WebElement search_bar = driver.findElement(By.name("q"));
	search_bar.sendKeys(product);
	WebElement first = driver.findElement(By.xpath("//*[starts-with(text(),'iphone')]"));
	first.click();
	screenshot();
	
	
  
}

@When("^I choose the first autofill option$")
public void i_choose_the_first_autofill_option() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Thread.sleep(3000);
	WebElement search_bar = driver.findElement(By.name("q"));
	search_bar.click();
	search_bar.sendKeys(Keys.ESCAPE);
	WebElement first = driver.findElement(By.className("_1va75j"));
	first.click();
	screenshot();
	
    
}

@When("^I add the first product to cart$")
public void i_add_the_first_product_to_cart() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    WebElement first_Product = driver.findElement(By.className("_3wU53n"));
    first_Product.click();
    Set<String> windows = driver.getWindowHandles();
    Object[] wins = windows.toArray();
    driver.switchTo().window (wins[1].toString());
    WebElement buy = driver.findElement(By.xpath("//button[@data-reactid='116' or @data-reactid='111')]"));
    		buy.click();
    		screenshot();
}

@Then("^I should be able to checkout the cart$")
public void i_should_be_able_to_checkout_the_cart() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   
}


}
