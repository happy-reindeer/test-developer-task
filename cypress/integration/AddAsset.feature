Feature: Asset Management System
    As a user, I can add new assets to the system and search, filter and sort existing assets

Background: Launch application
    Given I open the application

Scenario: User should be able to add new assets to the system
    Given I enter asset name "NBDE1234567894"
    When I click on send button 
    Then I should see dialog pop up with the message 'Asset ISIN1234568893 was added to the list'
    Then I can see the asset in existing asset list

#Scenario: Your 2nd case
#
#Given yyy
#When I do this
#Then I see bigbadaboom 

#....

#Scenario: Your N-th case
#
#Given ...
#When ...
#And ...
#Then ....
