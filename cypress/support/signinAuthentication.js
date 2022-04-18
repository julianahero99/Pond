class Authentication {
    firstAuthentication (){    
        cy.get('.css-1fbsp5d').click()
        cy.get('.css-1fbsp5d').type('admin@admin.com')
        cy.get('.css-rj0vax').click()
        cy.get('.css-rj0vax').type('admin')
        cy.get('.css-kthvbe').click()
        cy.get('form').submit()
        cy.get('.css-1qjm3lg').click()
    }
}

export default new Authentication()