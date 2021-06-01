describe("Create a new Volunteering Activity", () => {
    it("Add Volunteering Activity", () => {
      const link = "Contacts"; 
      const link2 = "Volunteering";

      cy.visit("https://dev.keela.co");
        cy.fixture("user").then((user) => {
             const { email, password ,firstName, lastName, activityName, description} = user;

          cy.login(email, password);
          cy.clickSidebar(link);

          cy.get("#main-container").get(".content-scroll-header").get(".btn").contains("Add Contact").click();
              cy.get('[data-tracking-input="contacts-PersonContacts-firstName"]').within(() => {
               cy.get("input").type(firstName)
            }); 
              cy.get('[data-tracking-input="contacts-PersonContacts-lastName"]').within(() => {
                cy.get("input").type(lastName)
              });
                 cy.get(".btn").contains("Save").click();
                   cy.pageHeader(link2);

            
                cy.get("#main-container").get(".block").get(".btn").contains("Add Activity").click();
                cy.get('[data-tracking-input="contact-volunteering-VolunteerRecords-name"]').within(() => {
                cy.get("input").type(activityName)
                });

                cy.get('[data-tracking-input="contact-volunteering-VolunteerRecords-description"]').within(() => {
                  cy.get("textarea").type(description)
                });  

                cy.get("#modals-container").get(".block-content").get(".btn").contains("Save").click();
              
                    cy.get(".vue-notification-group").should("contain", " Volunteering Activity Successfully added ")
                  //  cy.get('[data-tracking-table="contact-volunteering-VolunteerRecords-0-0"]').within(()=>{
                  //   cy.get("td").get(".font-w500").should("contain", activityName)
                  });
                });
              });
              