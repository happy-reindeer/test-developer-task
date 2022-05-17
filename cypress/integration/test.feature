Feature: Home page validations

    I wanted to validate the menu list in home page and tab titles

    Scenario: Navigate to Home page and validate the website content
        Given I navigate to the website
        And I get the Navigation menu list
        Then I validate menu list items length

    Scenario: Description tab validation
        Given I navigate to the website
        And I get Description tab and click
        Then I validate content in description page

    Scenario: Add asset tab validation for correct formate
        Given I navigate to the website
        And I get Add asset tab and click
        And I validate content in Add asset page
        And I Add the new asset to the list and validate the success formate
        Then I Validate the success message of new asset adding

    Scenario: Existing asset tab validation
        Given I navigate to the website
        And I get Existing Assets tab and click
        And I validate content in Existing Assets page
        And I verify the table dropdown selection and number of pages validation
        And I Verify the Searh functionality
        Then I validate the get assets api response
       


