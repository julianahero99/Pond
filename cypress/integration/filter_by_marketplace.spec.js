/// <reference types="cypress"/>
import signinAuthentication from '../support/signinAuthentication'

describe('Open Orders', () => {
    beforeEach(() =>{
        cy.visit('https://ponds-panel.hero99.guide/login')
        signinAuthentication.firstAuthentication()
        cy.contains('Orders').click()
        cy.visit('https://ponds-panel.hero99.guide/orders?orderOrigin')
        cy.get('.css-1j397tk').click()
      
    })

    
    it('Check new order origins', ()=>{
        cy.contains('Order origin')
        cy.get('[type="checkbox"]').should('not.be.visible').check('marketplace',{ force: true
        })
        cy.get('[type="checkbox"]').should('not.be.visible').check('shopify',{ force: true
        })
        cy.get('.css-pzw73w').click()
    })

})