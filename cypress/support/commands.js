Cypress.Commands.add("login", (useremail, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()  
  cy.get("#user-email").clear().type(useremail);
  cy.get("#user-password").clear().type(password);
  cy.get(".btn").contains("Log in").click();
});
Cypress.Commands.add("clickSidebar", (link) => {
  cy.get("#sidebar").contains(link).click();
});

Cypress.Commands.add("pageHeader", (link2) => {
  cy.get("#page-header").contains(link2).click();
});

Cypress.Commands.add("mainContainer", (link3) => {
  cy.get("#main-container").contains(link3).click();
});

