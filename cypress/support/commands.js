Cypress.Commands.add("login", (useremail, password) => {
  // cy.clearCookies()
  // cy.clearLocalStorage()
  cy.get("#user-email").type(useremail);
  cy.get("#user-password").type(password);
  cy.get(".btn").contains("Log in").click();
});

Cypress.Commands.add("clickSidebar", (link) => {
  cy.get("#sidebar").contains(link).click();
});
