/// <reference types="cypress"/>
import signinAuthentication from '../support/signinAuthentication'

describe('Open Orders', () => {
    beforeEach(() =>{
        cy.visit('https://ponds-panel.hero99.guide/login')
        signinAuthentication.firstAuthentication()
        cy.contains('Orders').click()

    })

    it('Select SUB edition inside the Incomplete Order and verify a msg to a default option', ()=>{
        cy.contains('Incomplete').click()
        cy.contains('#1018').click()
        cy.get('.css-ork8dy').click()
        cy.contains('SUB').click()
        cy.get('.react-select__control').click()
        .type('Cinch Bag{enter}')
        cy.get(':nth-child(2) > .react-select__control > .react-select__value-container').click()
        .type('Black{enter}')
        cy.contains('Next').click()
        cy.get('.react-select__value-container').click()
        cy.contains('This product has no options for sizes, please select a default value')
    })

    it ('Select DTF edition inside the Incomplete Order and verify a msg to a default option', ()=>{
        cy.contains('Incomplete').click()
        cy.contains('#1018').click()
        cy.get('.css-ork8dy').click()
        cy.contains('DTF').click()
        cy.get('.react-select__control').click()
        .type('DTF{enter}')
        cy.contains('Next').click({force:true})
        cy.get('.react-select__value-container').click()
        .type('XS{enter}')
        cy.contains('Next').click({force:true})
        cy.contains('This product has no options for sizes, please select a default value')

    })
})


