/// <reference types="cypress"/>

describe('Shopify plataform', () => {
    beforeEach(() =>{
        cy.visit('https://ponds.hero99.guide/shopify?token=')
        cy.contains('Shopify Domain').type('it-is-now-merchadise.myshopify.com')
        cy.contains('Access Token').type('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')
        cy.get('.css-zi8e67').click()
    })

    it('create a new product', ()=>{
        cy.contains('Products').click()
        cy.contains('Create product').click()
        cy.get('.css-tskt9p > :nth-child(3)').click()
        cy.contains('Product *').click()
          .select('Marcos Pasquim T-shirt')


    })

})