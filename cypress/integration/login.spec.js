describe("login with Fixture data and custom command", () => {
  it("Should Log in successfuly", () => {
    cy.visit("https://dev.keela.co");
    cy.fixture("user").then((user) => {
      const {email, password} = user;
      cy.login(email, password);
    });
  });
});