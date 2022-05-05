// import { faker } from "@faker-js/faker";

describe("Registration", () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit("/")
    })
it("Registration flow at Civey.com", () => {

    let user = 
    {
        gender:"female",
        birthYear:"1990",
        country:"CH",
        zipCode: "7500"
    }

    function signUp() {
        cy.get('[data-test="primary-navbar"]').contains('Anmelden').click()

        cy.contains("Willkommen zurück!").should('be.visible')

        cy.getByName("email").type("ang.test1@gmail.com")
        cy.get('[type="submit"]').should('be.visible').click()

        cy.get('[class^=signup-user-module]').should('contain', 'ang.test1@gmail.com')

        cy.get( `[for="${user.gender.toUpperCase()}"]`).click()
    
        cy.getByName("birth_year").type(user.birthYear)

        cy.getByName("zip").type(user.zipCode)

        cy.get('[data-test="country-select"]').click()
        cy.get('reach-portal').should('be.visible')
        cy.contains(user.country).click({force:true})

        
        cy.getByName("agreed_with_terms_of_use").click({force:true})

        cy.get('button[type="submit"]').click()

        cy.contains('Jetzt ins Postfach schauen!').should('be.visible')

    }
    signUp()
})


})

 