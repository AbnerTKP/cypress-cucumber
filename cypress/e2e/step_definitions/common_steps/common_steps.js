import { Given } from 'cypress-cucumber-preprocessor/steps'


Given ('I select the product', () => {

    cy.visit('https://advantageonlineshopping.com/#/')

    cy.get('#menuSearch')
    .should('be.visible')
    .click()

    cy.get('#autoComplete')
    .should('be.visible')
    .type('tablet')

    cy.get('a[href="#/product/16"]')
    .click()

    cy.url()
    .should('eq', 'https://advantageonlineshopping.com/#/product/16')
})
