$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/WeatherInformation.feature");
formatter.feature({
  "line": 1,
  "name": "Validate weather information from https://www.ndtv.com/.",
  "description": "",
  "id": "validate-weather-information-from-https://www.ndtv.com/.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Weather Information Test Scenario",
  "description": "",
  "id": "validate-weather-information-from-https://www.ndtv.com/.;weather-information-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to ndtv website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of home page is \"NDTV: Latest News, India News, Breaking News, Business, Bollywood, Cricket, Videos \u0026 Photos\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigate to weather section of ndtv website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters city as \"\u003cSearch_city\u003e\" in Pin your city section on the left of the screen to search \u0026 select any given city",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user selects searched city",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user validate on selecting city on the map reveals the weather details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Logout from Application",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validate-weather-information-from-https://www.ndtv.com/.;weather-information-test-scenario;",
  "rows": [
    {
      "cells": [
        "Search_city"
      ],
      "line": 15,
      "id": "validate-weather-information-from-https://www.ndtv.com/.;weather-information-test-scenario;;1"
    },
    {
      "cells": [
        "Bhopal"
      ],
      "line": 16,
      "id": "validate-weather-information-from-https://www.ndtv.com/.;weather-information-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Weather Information Test Scenario",
  "description": "",
  "id": "validate-weather-information-from-https://www.ndtv.com/.;weather-information-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User navigates to ndtv website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of home page is \"NDTV: Latest News, India News, Breaking News, Business, Bollywood, Cricket, Videos \u0026 Photos\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigate to weather section of ndtv website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters city as \"Bhopal\" in Pin your city section on the left of the screen to search \u0026 select any given city",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user selects searched city",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user validate on selecting city on the map reveals the weather details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Logout from Application",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseDriver.user_navigates_to_ndtv_website()"
});
formatter.result({
  "duration": 13920969762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDTV: Latest News, India News, Breaking News, Business, Bollywood, Cricket, Videos \u0026 Photos",
      "offset": 23
    }
  ],
  "location": "BaseDriver.title_of_home_page_is(String)"
});
formatter.result({
  "duration": 10056974326,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Anirudhs-MacBook-Air.local\u0027, ip: \u00272409:4043:2408:1a92:bcb4:1d65:8e22:34d5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/9t/f5v0yk0x1pq...}, goog:chromeOptions: {debuggerAddress: localhost:49416}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: efdae97892d659412aabce9e48adba6f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\n\tat BaseDriver.title_of_home_page_is(BaseDriver.java:60)\n\tat ✽.When title of home page is \"NDTV: Latest News, India News, Breaking News, Business, Bollywood, Cricket, Videos \u0026 Photos\"(src/test/resources/WeatherInformation.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "ndtv_weather_page.user_navigate_to_weather_section_of_ndtv_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bhopal",
      "offset": 21
    }
  ],
  "location": "ndtv_weather_page.user_enters_city_as_in_Pin_your_city_section_on_the_left_of_the_screen_to_search_select_any_given_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ndtv_weather_page.user_selects_searched_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ndtv_weather_page.user_validate_on_selecting_city_on_the_map_reveals_the_weather_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ndtv_weather_page.logout_from_Application()"
});
formatter.result({
  "status": "skipped"
});
});