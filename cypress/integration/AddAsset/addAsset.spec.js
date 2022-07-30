import { Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../pages/add_asset_page";


const addAssetPage = new AddAssetPage()
Before(() => {
    
});

Given(`I open the application`, () => {
    cy.visit(Cypress.config('baseUrl'))
});

Given('I enter asset name {string}', (assetName) => {
    addAssetPage.clickOnAddAssetLink()
    addAssetPage.enterAssetName(assetName)
    addAssetPage.clickOnSendButton()
});

Then('I should see dialog pop up with the message {}', (message) => {
    addAssetPage.getModalContent().should('have.text', 'Existing list')
});

Then('I can see the asset in existing asset list', () => {
    addAssetPage.getModalContent().should('be.equal').to('Success')
})