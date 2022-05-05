import { faker } from "@faker-js/faker";

describe("Registration", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/");
  });

  it("Registration flow at Civey.com", () => {
    let user = {
      email: faker.internet.email(),
      gender: faker.name.gender(true),
      birthYear: "1990",
      country: "CH",
      zipCode: "7500",
    };

    cy.get('[data-test="primary-navbar"]').contains("Anmelden").click();

    cy.contains("Willkommen zurück!").should("be.visible");
    cy.getByName("email").type(user.email);
    cy.get('[type="submit"]').should("be.visible").click();

    cy.get("[class^=signup-user-module]").should("contain", user.email);

    cy.get(`[for="${user.gender.toUpperCase()}"]`).click();
    cy.getByName("birth_year").type(user.birthYear);
    cy.getByName("zip").type(user.zipCode);
    cy.selectInDropdown("country-select", user.country)

    cy.getByName("agreed_with_terms_of_use").click({ force: true });
    cy.get('button[type="submit"]').click();

    cy.contains("Jetzt ins Postfach schauen!").should("be.visible");
  });
});
