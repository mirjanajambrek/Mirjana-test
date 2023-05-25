describe("Login", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
    cy.visit("/login");
  });

  // afterEach(() => {
  //   cy.get("div").contains("DS").click();
  //   cy.get("p").contains("Logout").click();
  //   cy.get("button").contains("Login").should("exist");
  // }),
  it("Login with a valid data", () => {
    const Email = Cypress.env("Email");
    const Password = Cypress.env("Password");

    cy.get("[name=email]").type(`${Email}`);
    cy.get("[name=password]").type(`${Password}`);
    cy.get("button").contains("Login").click();
    cy.get("p").contains("Leave").should("be.visible");
  });
});
