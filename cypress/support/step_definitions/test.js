
/// <reference types="cypress" />


import { And, Given, Then } from "cypress-cucumber-preprocessor/steps"
import { pageObjects } from "../PO/pageObjects"


let contact, menu

before(() => {
    cy.fixture('example.json').then(data => (contact = data));
    cy.fixture('example.json').then(data => (menu = data));
});

Given('I navigate to the website', () => {
    cy.visit('/');
})

//Scenario 1

And('I get the Navigation menu list', () => {
    pageObjects.topNavigationLinks().should('be.visible');
})

Then('I validate menu list items and their size', () => {
    pageObjects.menuValidation(menu);
})

//Scenario 2

And('I get Description tab and click', () => {
    pageObjects.clickOnhref('#/');
})

Then('I validate content in description page', () => {
    pageObjects.includeUrl("#/");
    pageObjects.clickbyheader("h2", "System requirements");
    pageObjects.getByText("User has abbility to see").should("be.visible");
})

//Scenario 3

And('I get Add asset tab and click', () => {
    pageObjects.clickOnhref('#/add');
})

And('I validate content in Add asset page', () => {
    pageObjects.includeUrl("#/add");
    pageObjects.getByText("New Asset").should("be.visible");
})

And('I Add the new asset to the list and validate the success formate', ()=>{
    pageObjects.getTextfield(pageObjects.generateCorrect);
    pageObjects.getByText("Correct format")
    pageObjects.clickByText("Send");
})

Then('I Validate the success message of new asset adding', ()=>{
   pageObjects.getByText('Sucssess').should('be.visible');
   pageObjects.clickByText('Close');    
})

//Scenario 4
And('I get Existing Assets tab and click', () => {
    pageObjects.clickOnhref('#/assets');
})

And('I validate content in Existing Assets page', () => {
    pageObjects.includeUrl("#/assets");
    pageObjects.getByText("Existing Assets").should("be.visible");
    cy.wait(1000);
    pageObjects.getByText("Show entries").should("be.visible");
})  

And('I verify the table dropdown selection and number of pages validation', () => {
    pageObjects.pageDropDown();
})

And('I Verify the Searh functionality', () => {
   pageObjects.searchFunctionality();
   pageObjects.getByText('Showing 1 to 1 of 1 entries').should("be.visible");
})

Then('I validate the get assets api response', () => {
pageObjects.getAPiResponseStutusforGetAssets();
})



