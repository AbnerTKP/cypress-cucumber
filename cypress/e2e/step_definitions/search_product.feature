Feature: Realizar a busca de um produto

    Como um usuário
    Eu quero realizar a busca de um produto na loja

    Scenario: Search product
     Given I open the Advantage demo
     And I click on the search icon
     And I type "tablet" in the search bar
     When I select an item from the autocomplete search bar
     Then I should see the product page