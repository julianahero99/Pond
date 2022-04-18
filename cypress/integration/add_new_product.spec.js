/// <reference types="cypress"/>
import signinAuthentication from '../support/signinAuthentication'

describe('Add a product', () => {
    beforeEach(() =>{
        cy.visit('https://ponds-panel.hero99.guide/login')
        signinAuthentication.firstAuthentication()
        cy.contains('Products').click()
    })

    it('add data from a new product', ()=>{
        //General info
        cy.contains('Add product').click()
        cy.get('.modal-component__header').click();
        cy.get('.css-1gv7ucu:nth-child(2) > .css-kthvbe').click();
        cy.contains('General info')
        cy.contains('Product name').type('teste automatizado')
        cy.contains('Product code').type('teste')
        cy.contains('Weight in ounces').type('30')
        cy.contains('Harmonized Tariff Schedule').type('teste')
        cy.get('.css-12i1dz6').click();
        cy.get('.css-1gv7ucu').click();
        cy.get('input:nth-child(5)').attachFile('dogo.jpg');
        cy.contains('Delete')
        cy.contains('Reupload')
        cy.contains('View')
        cy.contains('Continue').click()

        //Color and Size
         cy.get('.css-1e727j4').click()
         cy.get(':nth-child(2) > .css-10f58n3 > .react-select-container > .react-select__control').type('red{enter}')
         cy.get(':nth-child(2) > .css-10f58n3 > .react-select-container > .react-select__control').type('blue{enter}')
         cy.get(':nth-child(2) > .css-10f58n3 > .react-select-container > .react-select__control').type('yellow{enter}')
         cy.get(':nth-child(3) > .css-10f58n3 > .react-select-container > .react-select__control').type('P{enter}')
         cy.get(':nth-child(3) > .css-10f58n3 > .react-select-container > .react-select__control').type('M{enter}')
         cy.get(':nth-child(3) > .css-10f58n3 > .react-select-container > .react-select__control').type('G{enter}')
         cy.contains('Continue').click()

        //Printing Location
         cy.contains('New Printing Location').type('FRONT')
         cy.get('.css-1w9tw97 > svg > path').click()
         cy.get('#front').attachFile('TemplateDTF.pdf')
         cy.wait('')
         cy.contains('Delete')
         cy.contains('Reupload')
         cy.contains('View')
                

        //Pricing
        cy.contains('Pricing').click()
        cy.contains('Base cost per unit').type('U$50.00')
        cy.contains('Aditional cost').type('U$3.00')
        cy.contains('Continue').click()

        //Restrictions
        cy.get('.react-switch-bg').click({force:true})
        cy.contains('Restrict').should('be.visible')
        cy.get('.react-select__value-container').type('Pixel{enter}')
        cy.contains('Save product').click()
        
    })


   
})
