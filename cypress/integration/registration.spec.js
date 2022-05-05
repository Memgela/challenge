// import { faker } from "@faker-js/faker";

describe("Registration", () => {
    beforeEach(() => {
        cy.visit("/")
    })
it("Registration flow at Civey.com", () => {

    let user = 
    {
        gender:"female",
        birthYear:"1990",
        "country":"CH",
        "zipCode": "7728"
    }

    function signUp() {
        cy.get('[data-test="primary-navbar"]').contains('Anmelden').click()
        cy.get('input[name="email"]').type("ang.test@gmail.com")
        cy.get('button[type="submit"]').click()

        cy.get('[class^=signup-user-module]').should('contain', 'ang.test@gmail.com')

        cy.get( `[for="${user.gender.toUpperCase()}"]`).click()
    
        cy.get('[name="birth_year"]').type(user.birthYear)
        cy.get('[name="zip"]').type(user.zipCode)

        cy.get('[data-test="country-select"]').click()
        cy.get('reach-portal').should('be.visible')
        cy.contains(user.country).click({force:true})

        
        cy.get('[name="agreed_with_terms_of_use"]').click({force:true})

    }
    signUp()
})


})

 