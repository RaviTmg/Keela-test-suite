describe('Log In to Keela', () => {
  it('Should not Log In to Keela', () => {
    cy.visit('https://dev.keela.co/contacts') // 1.
    cy.fixture("user").then((user) => {
      const { email, password, invalidemail, invalidpassword } = user;
      
  cy.get("#user-email").clear().type(email);
  cy.get("#user-password").clear().type(invalidpassword);
  cy.get(".btn").contains("Log in").click();
  cy.get(".notification-title").should("contain"," Incorrect password ");

  cy.get("#user-email").clear().type(invalidemail);
  cy.get("#user-password").clear().type(password);
  cy.get(".btn").contains("Log in").click();
  cy.get(".notification-title").should("contain"," User not found ");
  cy.login(email,password);
  cy.get(".breadcrumb-item").should("contain", "All Contacts");
  })
})
})