package util;

public class ObjectRepository {

    //Screen Name : NDTV Home Page

    public static final String Home_page_MoreSubmenu_Xpath = "//a[@id='h_sub_menu']";
    public static final String Home_page_WeatherOption_Xpath = "//a[contains(text(),'WEATHER')]";

    //Screen Name : NDTV Weather Report Page
    public static final String Weather_page_PinYourCitySearchBox_Xpath = "//input[@id='searchBox']";
    public static final String Weather_page_City_Xpath = "//div[contains(text(),'Bhopal')]";
    public static final String Weather_page_CityDescription_Xpath = "//span[contains(text(),'Bhopal, Madhya Pradesh')]";
    public static final String Weather_page_CityTemp_Xpath = "(//span[contains(text(),'Bhopal, Madhya Pradesh')]/following::span/b)[4]";
    public static final String Weather_page_WeatherDetails_Xpath = "//span[contains(text(),'Bhopal, Madhya Pradesh')]/following::span/b";




}
