/// <reference types="cypress" />

import { And, Given, Then } from "cypress-cucumber-preprocessor/steps"
import { pageObjects } from "../PO/pageObjects"

let contact, menu

before(() => {
    cy.fixture('example.json').then(data => (contact = data));
    cy.fixture('example.json').then(data => (menu = data));
});

Given('I navigate to the Elinvar website', () => {
    cy.visit('/');
})
// Scenario 1
Then('I validate the website title', () => {
    pageObjects.IncludeInUrl('elinvar.co.uk');
    pageObjects.getByText('The WealthTech Platform as a Service').should('be.visible');
})
// Scenario 2
And('I validate the lenght of menu list items', () => {
    pageObjects.topNavigationLinks().should('have.length', 9);
})

And('I validate the href links of Menu', () => {
   pageObjects.menuValidation(menu);
})

Then('I find the list and validate the language of website for each language', () => {
    pageObjects.getByText("EN").trigger('mouseover', { fixture : true });
})

//Scenario 3

And('I click on contact menu item', () => {
    pageObjects.clickByByText('Contact');
})

And('I validate the redirection part by the end point url for contact', () => {
    pageObjects.shouldIncludeInUrl('/contact/');
})

And('I find the contact form', () => {
    cy.scrollTo('center');
})

And('I entered the contact data', (datatable) => {
    datatable.hashes().forEach(row => {
        pageObjects.addContactForm1(row.Surname, row.Name, row.Email, row.Company, row.PhoneNumber, row.Message);
    });

})

And('I click on submit button', () => {
    pageObjects.submitButton();
})

//Scenario 4

And('I entered the contact data1', () => {
    pageObjects.addContactForm2(contact.contactDetails);

})

//Scenario 5

And('I click on Your Platform menu item', () => {
    pageObjects.clickByByText('Your Platform');
})

And('I validate the redirection part by the end point url for platform', () => {
    pageObjects.IncludeInUrl('your-platform/');
})

Then('I Validate the api success status for platform', () => {
    pageObjects.getAPiResponseStutusforYourPlatform();
})

//Scenario 6

And('I click on Team menu item', () => {
    pageObjects.clickByByText('Team');
})
And('I Validate the api success status for Team', () => {
    pageObjects.getAPiResponseStutusforTeam();
})

And('I Validate the text validation for team management title', () => {
    pageObjects.getByText('Our Management').should('be.visible');
})

// Scenarios 7

And('I click on News menu item', () => {
    pageObjects.clickByByText('News');
})
And('I Validate the api success status for News', () => {
    pageObjects.getAPiResponseStutusforNews();
})

And('I Validate the text validation for news section', () => {
    pageObjects.getByText('Welcome to our news section').should('be.visible');
})


And('I validate the press functionality', () => {
    pageObjects.clickOnhref("#press");
    pageObjects.IncludeInUrl('/news/#press');
    pageObjects.getByText("Press releases").should('be.visible');
})

And('I validate the twitter functionality', () => {
    pageObjects.clickOnhref("#twitter");
    pageObjects.IncludeInUrl('/news/#twitter');
    pageObjects.getByText("Last Tweets").should('be.visible');
})

And('I validate the media functionality', () => {
    pageObjects.clickOnhref("#media");
    pageObjects.IncludeInUrl('/news/#media');
    pageObjects.getByText("Here you find a selection of media reports on Elinvar").should('be.visible');
})
