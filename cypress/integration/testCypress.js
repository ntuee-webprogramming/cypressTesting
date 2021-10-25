describe('Cypress Testing', () => {
    // Each it is a testcase
    // Two slashes represents comment
    it('Each "it" is a testcase', () => {
        cy.visit('/')
        cy.get('header').should('have.class', 'App-header')
      
    })
    it('Use CSS selector to check the relationships and properties of tags', () => {
        cy.get('.App-header > img:nth-child(1)').should('have.class', 'App-logo')
            .invoke('attr', 'src')
            .should('equal', '/static/media/logo.6ce24c58.svg')
    })
    it('Demonstrate onclick checking', () => {
      cy.get('button').should('have.id','inc').click()
      cy.get('button').should('have.id','inc').click()
      cy.get('button').should('have.id','inc').click()
      cy.get('button').should('have.id','inc').click()
      cy.get('button').should('have.id','inc').click()
      cy.get('.wrapper > p:nth-child(2)').contains('5')
    })
})