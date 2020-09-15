import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.jsoup.Connection;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import util.ObjectRepository;

import java.util.Iterator;
import java.util.Set;

public class ndtv_weather_page {



    @Then("^User navigate to weather section of ndtv website$")
    public void user_navigate_to_weather_section_of_ndtv_website() throws Throwable {

    }

    @Then("^User enters city as \"([^\"]*)\" in Pin your city section on the left of the screen to search & select any given city$")
    public void user_enters_city_as_in_Pin_your_city_section_on_the_left_of_the_screen_to_search_select_any_given_city(String arg1) throws Throwable {

    }

    @When("^user selects searched city$")
    public void user_selects_searched_city() throws Throwable {

    }

    @Then("^user validate on selecting city on the map reveals the weather details$")
    public void user_validate_on_selecting_city_on_the_map_reveals_the_weather_details() throws Throwable {

    }

    @Then("^Logout from Application$")
    public void logout_from_Application() throws Throwable {

        BaseDriver.appLogout();


    }

}
