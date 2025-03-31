Feature: Playwright Home Page

  Scenario: Check title
    Given navigate to 'https://playwright.dev/'
    When click link "Get started"
    Then Verify in title "Installation"
