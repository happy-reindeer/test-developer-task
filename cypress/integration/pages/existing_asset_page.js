export default class ExistingAssetPage {

    existingAssetLink = ".ui .menu .item:nth-child(3)"
    showEntriesDropdown = "[data-test='datatable'] .custom-select"
    assetIdParent = "[data-test='datatable-table'] td"
    nextPageLink = "[aria-label='Next']"
    searchInput = "[data-test='datatable-input']"
    tableHeader = ".App [data-test='datatable-head']"

    clickOnExistingAssetLink(){
        cy.get(this.existingAssetLink).click()
    }

    clickOnNextPageLink(){
        cy.get(this.nextPageLink).click()
    }

    selectShowEntries(option){
        cy.get(this.showEntriesDropdown).select(option)
    }

    enterAssetName(assetName){
        cy.get(this.searchInput).clear()
        cy.get(this.searchInput).type(assetName)
    }

    clickOnTableHeader(){
        cy.get(this.tableHeader).click()
    }

    getAssetIds(){
        this.selectShowEntries("100");
        return cy.get(this.assetIdParent)
    }
}
