Feature: Home page validations

    I wanted to validate the menu list in home page and tab titles

    Scenario: Navigate to Home page and validate the website title
        Given I navigate to the Elinvar website
        Then I validate the website title

    Scenario: Menu list Validation
        Given I navigate to the Elinvar website
        And I validate the lenght of menu list items
        And I validate the href links of Menu
        Then I Validate the language mousehover


    Scenario: Contact tab validation1
        Given I navigate to the Elinvar website
        And  I click on contact menu item
        And I validate the redirection part by the end point url for contact
        And  I find the contact form
        And I entered the contact data
            | Surname | Name   | Email              | Company |
            | Yarra   | Anusha | anusha@yopmail.com | TI      |
        And I click on submit button


    Scenario: Contact tab validation2
        Given I navigate to the Elinvar website
        And  I click on contact menu item
        And  I find the contact form
        And I entered the contact data1
        And I click on submit button


    Scenario:  Your Platform tab validation
        Given I navigate to the Elinvar website
        And  I click on Your Platform menu item
        And  validate the redirection part by the end point url for platform
        Then I Validate the api success status for platform

    Scenario:  Team tab validation
        Given I navigate to the Elinvar website
        And  I click on Team menu item
        And I Validate the api success status for Team
        And I Validate the text validation for team management title

    Scenario:  News tab validation
        Given I navigate to the Elinvar website
        And I click on News menu item
        And I Validate the api success status for News
        And I Validate the text validation for news section
        And I validate the press functionality
        And I validate the twitter functionality
        And I validate the media functionality