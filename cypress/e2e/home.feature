Feature: View Home
    The user can see the home

    Scenario: User Clicks Play Button and Activates Timer
      Given the user is in index page
      When the user clicks the play button
      Then timer content is less than 25:00
    
    Scenario: Timer Default Value
      Given the user is in index page
      Then timer content is 25:00