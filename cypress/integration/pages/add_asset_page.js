export default class AddAssetPage {

    addAssetLink = "a[testid='add-asset']"
    assetNameInput = "#defaultFormAddAsset"
    sendButton = "button[type='submit']"
    validFormatMessage = ".valid-feedback"
    invalidFormatMessage = ".invalid-feedback"
    modalTitle = ".modal-title"
    modalBody = ".modal-body"
    closeButton = ".modal-footer button"
    closeCrossIcon = ".modal-content .close"

    clickOnAddAssetLink(){
        cy.get(this.addAssetLink).click()
    }

    enterAssetName(assetName){
        cy.get(this.assetNameInput).clear()
        cy.get(this.assetNameInput).type(assetName)
    }

    clickOnSendButton(){
        cy.get(this.sendButton).click()
    }

    getModalHeaderTitle(){
        return cy.get(this.modalTitle)
    }

    getModalContent(){
        return cy.get(this.modalBody)
    }

    getValidFormatMessage(){
        return cy.get(this.validFormatMessage)
    }

    getInValidFormatMessage(){
        return cy.get(this.invalidFormatMessage)
    }

    clickOnPopUpCloseButton(){
        cy.get(this.closeCrossIcon).click()
    }

    getCorrectValidation(){
        return cy.get(this.validFormatMessage)
    }

    getDialogPopup(){
        return cy.get(this.closeButton)
    }
}
    