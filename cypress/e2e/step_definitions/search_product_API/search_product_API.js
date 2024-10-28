import { Given } from 'cypress-cucumber-preprocessor/steps'

Given ('the user makes a GET request to the product search API', () => {

    cy.request({
        method: 'GET', 
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
        qs: {
            name: "HP ElitePad 1000 G2 Tablet"
        }
    }).as('apiResponse') 
})

Then ('Receive status code 200', () => {

    cy.get('@apiResponse')
    .then((response) => {
        expect(response.status).to.eq(200)

        expect(response.body[0].products[0]).has.property('productName', 'HP ElitePad 1000 G2 Tablet')
        
        console.log(response.body)
      })  
})