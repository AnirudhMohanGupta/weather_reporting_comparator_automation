Feature: Validate weather information from https://www.ndtv.com/.

  Scenario Outline: Weather Information Test Scenario

    Given User navigates to ndtv website
    When title of home page is "NDTV: Latest News, India News, Breaking News, Business, Bollywood, Cricket, Videos & Photos"
    Then User navigate to weather section of ndtv website
    Then User enters city as "<Search_city>" in Pin your city section on the left of the screen to search & select any given city
    When user selects searched city
    Then user validate on selecting city on the map reveals the weather details
    Then Logout from Application


    Examples:
      | Search_city |
      | Bhopal      |