import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.*;
import util.ObjectRepository;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.Properties;

public class BaseDriver {


    public static WebDriver driver;

    static Properties loadObj() {
        String path = System.getProperty("user.home");
        System.out.println(path);
        File file = new File(path + "//AutomationConfig//application.properties");
        FileInputStream fs = null;

        try {
            fs = new FileInputStream(file);
        }catch (Exception e){
            e.printStackTrace();
        }
        Properties prop = new Properties();
        try {
            prop.load(fs);
        }catch (Exception e){
            e.printStackTrace();
        }

        return prop;
    }


    @Given("^User navigates to ndtv website$")
    public void user_navigates_to_ndtv_website() throws Throwable {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-notifications");
        System.setProperty("webdriver.chrome.driver","/Users/anirudh/Downloads/chromedriver");
        driver =new ChromeDriver(options);
        String demoURL = "https://www.ndtv.com/";
        driver.get(demoURL);
        driver.manage().window().maximize();
    }


    @When("^title of home page is \"([^\"]*)\"$")
    public void title_of_home_page_is(String expectedTitle) throws Throwable {
        Thread.sleep(10000);
       String title = BaseDriver.driver.getTitle();
       System.out.println(title);
      Assert.assertEquals(expectedTitle, title);
    }



    public static void button_xpath (String element) {
        driver.findElement(By.xpath(element)).click();

    }

    public static void waitTillVisible(String element){
        WebDriverWait wait = new WebDriverWait(driver,30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(element)));


    }

    public static void waitTillClickable(String element){
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath(element)));


    }

    public static void send_Keys(String text_to_enter,String element) {
        driver.findElement(By.xpath(element)).clear();
        driver.findElement(By.xpath(element)).sendKeys(text_to_enter);
    }

    public static boolean resultsAppearForWeatherSearch(String element) {

        return isElementPresent(By.xpath(element));
    }



    private static void waitForSearchResultsToAppear(String element) {
        Wait<WebDriver> wait = new WebDriverWait(driver, 30L);
        wait.until(BaseDriver.visibilityOfElementLocated(By.xpath(element)));
    }

    private static ExpectedCondition<WebElement> visibilityOfElementLocated(final By locator) {
        return new ExpectedCondition<WebElement>() {
            public WebElement apply(WebDriver driver) {
                WebElement toReturn = driver.findElement(locator);
                return toReturn.isDisplayed() ? toReturn : null;
            }
        };
    }

    public static boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (NoSuchElementException var3) {
            return false;
        }
    }



    public static void appLogout() throws Exception{
        driver.close();
    }
}
