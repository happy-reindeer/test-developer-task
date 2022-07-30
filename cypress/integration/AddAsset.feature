Feature: Asset Management System
    As a user, I can add new assets to the system and search, filter and sort existing assets

Background: Launch application
    Given I open the application

     Scenario: User should be able to add new assets to the system
        Given I generate unique asset name and store value in key 'asset_name'
        And I navigated to Add Asset tab
        And I enter asset name "asset_name"
        When I click on send button
        Then I should see dialog pop up with the message 'Asset [asset_name] was added to the list'
        When I close the dialog pop up
        Then I should see correct validation text 'Correct format'
        Given I navigated to Existing Asset tab
        And I can see the asset 'asset_name' in existing asset lists

    Scenario: User should be able to add new assets with a mixed combination of 10 digits and 4 alphabets
        Given I navigated to Add Asset tab
        And I enter asset name "1234567890ABCD"
        When I click on send button
        Then I should see dialog pop up with the message 'Asset 1234567890ABCD was added to the list'
        When I close the dialog pop up
        Then I should see correct validation text 'Correct format'
        Given I navigated to Existing Asset tab
        And I can see the asset 'asset_name' in existing asset lists

    Scenario: User should not be able to add assets with invalid format
        Given I navigated to Add Asset tab
        And I enter asset name "123e1"
        When I click on send button
        Then I should not see dialog pop up
        Then I should see incorrect validation text 'Incorrect format'

    Scenario: User should not be able to add assets with more than 10 chars
        Given I navigated to Add Asset tab
        And I enter asset name "ABCD12345678901"
        When I click on send button
        Then I should not see dialog pop up

    Scenario: User should not be able duplicate assets
        Given I generate unique asset name and store value in key 'asset_name'
        And I navigated to Add Asset tab
        And I enter asset name "asset_name"
        When I click on send button
        Then I should see dialog pop up with the message 'Asset [asset_name] was added to the list'
        When I close the dialog pop up
        Then I should see correct validation text 'Correct format'
        Given I enter asset name "asset_name"
        When I click on send button
        Then I should see dialog pop up with the message 'Asset name should be unique. Assert with this name already exists'

    Scenario: User can search for an existing asset
        Given I generate unique asset name and store value in key 'asset_name'
        And I navigated to Add Asset tab
        And I enter asset name "asset_name"
        When I click on send button
        Then I should see dialog pop up with the message 'Asset [asset_name] was added to the list'
        When I close the dialog pop up
        Then I should see correct validation text 'Correct format'
        Given I navigated to Existing Asset tab
        And I search asset name 'asset_name'
        And I can see the asset 'asset_name' in existing asset lists

    Scenario: User can sort assets in ascending and descending order
        Given I generate unique asset name and store value in key 'asset_name'
        And I navigated to Add Asset tab
        And I enter asset name "asset_name"
        When I click on send button
        Then I should see dialog pop up with the message 'Asset [asset_name] was added to the list'
        When I close the dialog pop up
        Then I should see correct validation text 'Correct format'
        Given I navigated to Existing Asset tab
        When I click header tab to sort
        And The assets should be sorted 'ASC'
        When I click header tab to sort
        And The assets should be sorted 'DSC'

    Scenario: User can filter assets
        Given I navigated to Existing Asset tab
        And I search asset name 'A'
        Then All the assets should contain 'A'

