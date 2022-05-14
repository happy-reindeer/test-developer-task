
export default class CypressPageObject {
  includeUrl(url) {
    return cy.url().should('include', url);
  }
  topNavigationLinks() {
    return cy.get('li[role = "menuitem"]');
  }
  submitButton() {
    return cy.get('input[type="submit"]').click()
  }
  getByPlaceholder(key) {
    return cy.get(`input[placeholder="${key}"]`);
  }
  getAPiResponseStutusforYourPlatform() {
    cy.request('https://elinvar.co.uk/your-platform/').then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  menuValidation(menu) {
    let expectedMenuLinks = Object.values(menu.menulinks);
    let actualMenuLinks = []
    this.topNavigationLinks().each(($menuitem) => {
      cy.get($menuitem).then(($menu) => {
        cy.wrap($menu).find('a').invoke('attr', 'href').then((href) => {
          actualMenuLinks.push(href);
          this.validateLink(href, expectedMenuLinks);
        })
      });
    });
  }

  validateLink(href, expectedMenuLinks){
    var expectedMenuLinks = expectedMenuLinks;
    if(expectedMenuLinks.indexOf(href)>0){
      cy.log(href + " " + "link is available");
    }
  }


  getAPiResponseStutusforTeam() {
    cy.request('https://elinvar.co.uk/team/').then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  getAPiResponseStutusforNews() {
    cy.request('https://elinvar.co.uk/news/').then((response) => {
      expect(response.status).to.eq(200)
    })
  }

  getByText(key) {
    return cy.contains(key);
  }

  clickByByText(key) {
    this.getByText(key).click()
  }

  clickOnhref(key) {
    cy.get(`a[href="${key}"]`).eq(1).click({ force: true });
  }

  //we can user data table from test feature file by this type of method
  addContactForm1(Surname, Name, Email, Company) {
    this.getByPlaceholder("Surname*").type(Surname)
    this.getByPlaceholder("Name*").type(Name)
    this.getByPlaceholder("Email*").type(Email)
    this.getByPlaceholder("Company").type(Company)
  }

  //we can get the data from fixtures file by this below method

  addContactForm2({ Surname, Name, Email, PhoneNumber, Company, Message }) {
    cy.get('#avia_1_1').type(Surname);
    cy.get('#avia_2_1').type(Name);
    cy.get('#avia_3_1').type(Email);
    cy.get('#avia_4_1').type(PhoneNumber);
    cy.get('#avia_5_1').type(Company);
    cy.get('#avia_5_1').type(Message);
  }

}
export const pageObjects = new CypressPageObject();
