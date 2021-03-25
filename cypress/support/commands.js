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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('auto_login', (email = 'andreitishchenko777@gmail.com', password = 'test12345') => {
	

    cy.get('#signin_email').type(email)
    cy.get('#signin_password').type(password)
    cy.get('#signin_submit').click()
})
Cypress.Commands.add('signup', () => {
	cy.get('.register-link a').click()
	const user = generateRandomNewUser();
    cy.get('#input-email-address').type(user['email'])
    cy.get('#input-password').type(user['password'])
    cy.get('[data-testid=label-consent__insights__24-yes]').click()
    cy.get('[data-testid=register-button]').click()
})
function generateRandomNewUser() {
	var user = [];

	var strValues="abcdefghiklmnopqrstuvwxyz"; 
	var strEmail = "";
	var strPass = ""; 
	var strTmp; 
	for (var i=0;i<6;i++) { 
	strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
	strEmail = strEmail + strTmp; 
	} 
	strTmp = ""; 
	user['email'] = strEmail + "@gmail.com"; 
	for (var i=0;i<8;i++) { 
	strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
	strPass = strPass + strTmp; 
	} 
	user['password'] = strPass;
	return user;
}