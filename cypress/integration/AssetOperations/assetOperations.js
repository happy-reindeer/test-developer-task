import { After, Before, Given, Then } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../pages/add_asset_page"
import ExistingAssetPage from "../pages/existing_asset_page"

const addAssetPage = new AddAssetPage()
const existingAssetPage = new ExistingAssetPage()

var runtimeDict = {}

Before(() => {

});

Given('I store {string} in the {string}', (value, key) => {
    runtimeDict[key] = value;
});


Given('I generate unique asset name and store value in key {string}', (key) => {
    var valid = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var random_string = "";
    for (var i = 0; i < 4; i++)
        random_string += valid.charAt(Math.floor(Math.random() * valid.length));
    var random_number = Math.floor(Math.random() * 9000000000) + 1000000000;
    runtimeDict[key] = random_string + random_number
});

Given('I open the application', () => {
    cy.visit(Cypress.config('baseUrl'))
});

When('I click on send button', () => {
    addAssetPage.clickOnSendButton()
});

Given('I navigated to Add Asset tab', () => {
    addAssetPage.clickOnAddAssetLink()
});

Given('I enter asset name {string}', (assetName) => {
    if (assetName in runtimeDict){
        assetName = runtimeDict[assetName]
        }
    addAssetPage.enterAssetName(assetName)
});

Then('I should see dialog pop up with the message {string}', (message) => {
    if (message.includes('[')){
        var startIndex = message.indexOf("[");
        var endIndex = message.indexOf("]");
        var key = message.substring(startIndex + 1, endIndex);
        message = message.substring(0, message.indexOf("[")) + runtimeDict[key]
        + message.substring(message.indexOf("]") + 1, message.length)
    }
    addAssetPage.getModalContent().should('have.text', message)
});

When('I close the dialog pop up', () => {
    addAssetPage.clickOnPopUpCloseButton()
});

Then('I should not see dialog pop up', () => {
    addAssetPage.getDialogPopup().should('not.exist')
});

Then('I should see correct validation text {string}', (validationText) => {
    addAssetPage.getCorrectValidation().should('have.text', validationText)
});

Then('I should see incorrect validation text {string}', (validationText) => {
    addAssetPage.getInValidFormatMessage().should('have.text', validationText)
});

Then('I can see the asset {string} in existing asset lists', (assetName) => {
    if (assetName in runtimeDict){
        assetName = runtimeDict[assetName]
    }
    existingAssetPage.selectShowEntries("100")
    const assetList = []
    existingAssetPage.getAssetIds().each((assets, i) => {
        assetList.push(assets.text())
    })
    cy.then(()=>{
        expect(assetList.includes(assetName)).to.be.true;
    })
});

Given('I navigated to Existing Asset tab', () => {
    existingAssetPage.clickOnExistingAssetLink()
});

Given('I search asset name {string}', (assetName) => {
    if (assetName in runtimeDict){
        assetName = runtimeDict[assetName]
        }
    existingAssetPage.enterAssetName(assetName)
});

When('I click header tab to sort', () => {
    existingAssetPage.clickOnTableHeader()
});

Then('The assets should be sorted {string}', (sort) => {
     if (sort == "ASC"){
        existingAssetPage.getAssetIds().then(($assets) => {
           const assetList = Cypress._.map($assets, (asset) => asset.textContent)
           expect(assetList).to.be.ascending
        })
     }
     else {
        existingAssetPage.getAssetIds().then(($assets) => {
           const assetList = Cypress._.map($assets, (asset) => asset.textContent)
           expect(assetList).to.be.descending
        })
    }
})

Then('All the assets should contain {string}', (filter) => {
       existingAssetPage.getAssetIds().then(($assets) => {
           const assetList = Cypress._.map($assets, (asset) => asset.textContent)
           assetList.forEach((asset) => {
           expect(asset).to.include(filter)
           })
       })
})