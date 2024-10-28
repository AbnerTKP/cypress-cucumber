import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import '../common_steps/common_steps'

beforeEach(() => {
    cy.then(() => {
        Given('I select the product')
    })
})


 
And ('I change the color to Gray', () => {
    cy.get('span[title="GRAY"]')
    .click();
})

And ('I add the quantity to 5', () => {
    cy.get('input[name="quantity"]')
    .type('5')
})

And ('I click on the "add to cart" button', () => {
    cy.get('button')
    .contains('ADD TO CART')
    .click()
})

And ('a modal appears with a "checkout" button', () => {
    cy.get('#checkOutPopUp')
    .should('be.visible')
})

When ('I click on the "checkout" button', () => {
    cy.get('#checkOutPopUp')
    .click()
})

Then ('I should see the checkout page with the product', () => {
    
    //valido que estou na tela do checkout, estou validando por label pois a URL 
    cy.url()
    .should('eq', 'https://advantageonlineshopping.com/#/login')
    

    //valido que o produto selecionado anteriormente seja o mesmo do checkout
    cy.contains('HP ELITEPAD 1000 G2 TABLET')
    .should('exist')

    //valido que a quantidade selecionada na página do produto seja de 5
    cy.contains('QTY: 5')
    .should('exist')

    //valido que a cor Cinza que foi selecionada do tablet seja exibida no checkout
    cy.contains('span','GRAY')
    .should('exist')
})