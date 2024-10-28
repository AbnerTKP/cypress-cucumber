# Projeto Cypress com Integração Cucumber 🥒
Este projeto utiliza o Cypress para testes end-to-end com suporte ao Cucumber, permitindo escrita de testes em linguagem natural (Gherkin). Abaixo está o passo a passo para configurar o ambiente, realizar a instalação das dependências e rodar os testes.

# 🚀 Pré-requisitos
Node.js e npm - Certifique-se de ter o Node.js e o npm instalados: ` node -v npm -v `

Instalação do Cypress e Cucumber:

O projeto requer Cypress e cypress-cucumber-preprocessor para rodar testes com Cucumber.
# 🔧 Configuração do Projeto
Inicie o Projeto: ` mkdir nome-do-projeto cd nome-do-projeto npm init -y ` Este comando inicializa um novo projeto e cria o arquivo package.json.

Instale as Dependências: ` npm install cypress cypress-cucumber-preprocessor prettier `

### Cypress: Framework de testes E2E.
### cypress-cucumber-preprocessor: Permite escrever cenários de teste usando Cucumber.
### Prettier: Para formatação de código. (opcional)
### Configuração do Prettier (opcional): Crie o arquivo .prettierrc com as seguintes opções para padronizar o estilo do código:  

``{ 
"semi": false, 
"useTabs": true, 
"tabWidth": 4, 
"singleQuote": true }``

* semi: Define se as declarações de código terminam com ponto e vírgula.
  
* useTabs: Define se o Prettier usa tabs em vez de espaços.
  
* tabWidth: Define o tamanho da indentação em 4.
  
* singleQuote: Define o uso de aspas simples.
Abrindo o Cypress: Após a instalação, execute o comando para abrir o Cypress pela primeira vez e criar a estrutura de diretórios padrão: (backticks) npx cypress open (backticks) Após abrir, você verá a pasta cypress com os diretórios e2e, fixtures e support.

### Configuração do Cucumber🥒 no Cypress:

Abra o arquivo cypress.config.js e adicione o seguinte: ` const cucumber = require('cypress-cucumber-preprocessor').default; `

Ainda no cypress.config.js adicione dentro do parâmetro pré configurado **e2e** o seguinte: `specPattern: 'cypress/e2e/step_definitions/**/*.feature'`

No package.json, adicione as configurações do cypress-cucumber-preprocessor: ` "cypress-cucumber-preprocessor": { "nonGlobalStepDefinitions": true } `

* nonGlobalStepDefinitions: Define se os arquivos de step definitions são organizados por funcionalidade.

Estrutura de Arquivos: Estrutura recomendada para organizar seus arquivos:

**e2e/step_definitions/ → Pasta para organizar as step definitions.**

**e2e/step_definitions/add_to_cart.feature → Exemplo de arquivo .feature.**

**e2e/step_definitions/add_to_cart/add_to_cart.js → Arquivo com os steps do cenário add_to_cart.**

# 🚀 Executando os Testes
Para rodar os testes em modo interativo: ` npx cypress open ` Isso abrirá a interface interativa do Cypress, onde você pode escolher e executar os testes.

Para rodar os testes em modo headless (CI/CD): ` npx cypress run `

# 🔍 Exemplo de Cenário e Step Definitions
Exemplo de como escrever um cenário de teste com Cucumber:

Arquivo .feature (e2e/add_to_cart.feature): ` Feature: Adicionar ao Carrinho `

Scenario: Usuário adiciona um produto ao carrinho 

``Given I open the e-commerce site`` 

``When I search for "Tablet"``

``And I add the first result to the cart``

``Then I see the confirmation message ``

Após isso é de extrema importância que a pasta e o arquivo` .js ` estejam do mesmo nome que o arquivo `.feature`

Arquivo Step Definition (e2e/step_definitions/add_to_cart/add_to_cart.js): (backticks) import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

`Given('I open the e-commerce site', () => { cy.visit('https://example-ecommerce.com'); });`

`When('I search for {string}', (product) => { cy.get('input[placeholder="Search"]').type(product); cy.get('button[type="submit"]').click(); });`

`And('I add the first result to the cart', () => { cy.get('.product-list').first().contains('Add to cart').click(); });`

`Then('I see the confirmation message', () => { cy.contains('Product added to cart!').should('be.visible'); }); (backticks)`
