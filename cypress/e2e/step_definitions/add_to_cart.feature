Feature: Adicionar um produto ao carrinho

    Como um usuário
    Eu quero adicionar um produto ao carrinho

    Background:
     Given I select the product

    Scenario: Add product to cart
     And I change the color to Gray
     And I add the quantity to 5
     And I click on the "add to cart" button
     And a modal appears with a "checkout" button
     When I click on the "checkout" button
     Then I should see the checkout page with the product