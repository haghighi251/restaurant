
// @ts-ignore
describe('Testing top menu items and features', () => {
  it('Global test', () => {
    cy.visit('/')

    // Checking the value of contact information
    cy.get('#supportEmail').should('contain.text', Cypress.env('support_email'))
    cy.get("#supportAddress").should('contain.text', Cypress.env('address'))
    cy.get("#TopMenuPhoneNumber").should("contain.text", Cypress.env('support_phone'))

    // Checking the url of the menus
    cy.contains('Home').should('have.attr', 'href', '/')
    cy.contains('About').should('have.attr', 'href', '/about')
    cy.contains('Menu').should('have.attr', 'href', '/#')
    cy.contains('Blog').should('have.attr', 'href', '/blog')
    cy.contains('Contact').should('have.attr', 'href', '/contact')

    // Checking the subitems of the Menu item.
    cy.contains('Menu').trigger('mouseup').wait(1000)
    cy.get("#MenuSubItems").should('have.class', 'hidden')

    // Checking the contact us button functionality
    cy.contains("Contact Now").click()
    cy.url().should('include', '/contact')

  })
})
