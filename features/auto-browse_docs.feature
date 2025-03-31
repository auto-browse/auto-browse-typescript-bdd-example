Feature: Auto-Browse Documentation
  As a developer
  I want to navigate Auto-Browse documentation
  So that I can learn how to use the library

  Scenario: Reading Quickstart Guide
    Given navigate to 'https://typescript.docs.auto-browse.com/'
    When CLick on quickstart guide
    Then assert the page description
