describe("Create a new Contact", () => {
  it("Should add a new Contact", () => {
    const link = "Contacts";

    cy.visit("https://dev.keela.co");
    cy.fixture("user").then((user) => {
      const { email, password, firstName, lastName } = user;
      cy.login(email, password);
      cy.clickSidebar(link);
      cy.get("#main-container").get(".content-scroll-header").get(".btn").contains("Add Contact").click();

      cy.get('[data-tracking-input="contacts-PersonContacts-firstName"]').within(() => {
        cy.get("input").type(firstName);
      });
      cy.get(".btn").contains("Save").click();
    });
  });
});
