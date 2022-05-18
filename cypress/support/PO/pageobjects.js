
export default class CypressPageObject {

  includeUrl(url) {
    return cy.url().should('include', url);
  }
  topNavigationLinks() {
    return cy.get('.container > .ui');
  }

  getAPiResponseStutusforGetAssets() {
    cy.request('getAssets').then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  menuValidation(menu) {
    let expectedMenuLinks = Object.values(menu.menulinks);
    cy.get('div[class*="menu"]').find('a').each(($li, index, $list) => {
      cy.wrap($li).invoke('attr', "href").then((href) => {
        expect(href).to.be.equal(expectedMenuLinks[index]);
        expect($list.length).to.be.equal(expectedMenuLinks.length);
      })
    })
  }

  getTextfield(email
    ) {
    cy.get('#defaultFormAddAsset').type(email);
  }

  getByText(key) {
    return cy.contains(key);
  }

  clickByText(key) {
    this.getByText(key).click()
  }

  clickOnhref(key) {
    cy.get(`[href="${key}"]`).click({ timeout: 1000 });
  }

  clickbyheader(key, value) {
    cy.get(key).contains(value)
  }

  get generateCorrect() {
    return 'ISIN00002' + Math.floor(Math.random() * 100000);
  }

  pageDropDown() {
    cy.get('.custom-select').select('100');
    cy.scrollTo('bottom');
    cy.get('ul>li').eq(2).should('have.length', 1)
  }

  searchFunctionality() {
    cy.get('[data-test=datatable-input]').type("ISIN0000044807");
    cy.get('td').should("have.text", "ISIN0000044807");
  }

}
export const pageObjects = new CypressPageObject();
