// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath'
const xpath = require('xpath');
  

Cypress.Commands.add('GetOTP', (email) => {

  cy.visit('https://yopmail.com/')

  cy.origin('https://yopmail.com', { args: { email } }, ({ email }) => {
    cy.wait(2000)
    cy.get('input[id="login"]').type(email).type('{enter}');
    cy.wait(20000)
    
    cy.get('#ifmail').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      const xpathResult = document.evaluate('/html/body/main/div/div/div/table/tbody/tr/td/div/div/div/div/div/div/table[3]/tbody/tr/td/div/p[2]/text()[2]', $body[0], null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
      const element = xpathResult.snapshotItem(0)
      const text = element.textContent.trim()
      console.log(text)
      return text;
    

    })
    cy.go('back')
    cy.go('back')

 
    
  })    
});




    
    




  




