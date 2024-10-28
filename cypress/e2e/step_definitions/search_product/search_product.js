import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open the Advantage demo', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
})

And ('I click on the search icon', () => {

    cy.get('#menuSearch')
    .should('be.visible')
    .click()
})

And ('I type "tablet" in the search bar', () => {

    cy.get('#autoComplete')
    .should('be.visible')
    .type('tablet')
})

When ('I select an item from the autocomplete search bar', () => {

    cy.get('a[href="#/product/16"]')
    .click()
})

Then ('I should see the product page', () => {
    
    cy.url()
    .should('eq', 'https://advantageonlineshopping.com/#/product/16')
    
})