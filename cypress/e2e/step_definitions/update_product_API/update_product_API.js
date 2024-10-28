import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

let authToken
const product = {
    userId: 155173241,
    color: 'gray',
    source: 'celular',
    productId: 16
}



Given('I autenticate in login', () => {
    cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login?',
        headers: { 'Content-Type': 'application/json' },
        body: {
            loginPassword: "Password1234",
            loginUser: "AdminTKP"
        }
    })
        .then((response) => {

            authToken = response.body.statusMessage.token
            expect(response.status).to.eq(200)
            expect(response.body.statusMessage).has.property('userId', product.userId)

            console.log(response.body)
        })

})

/* 
    Comentado o bloco de código  abaixo, tentei diversas soluções para a conversão da imagem para binário para enviar o form data porém nada resolveu, 
    inclusive analisei esse tópico que durou 3 anos: https://github.com/cypress-io/cypress/issues/1647, se souberem como realizar 
    isso eu gostaria muito de saber por favor.
/*

/*
When('I Update the image', () => {
    cy.fixture('imagem.png', 'binary').then(image => {
        const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
        const formData = new FormData();
        formData.append('image', blob, 'imagem.png');

        cy.request({
            method: 'POST',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${product.userId}/${product.source}/${product.color}?product_id=${product.productId}`,
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + authToken
            },
            body: formData
        })

    })
})*/