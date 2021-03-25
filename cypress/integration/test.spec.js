/// <reference types="cypress" />
const search = require('../page-objects/search')
const myAccount = require('../page-objects/myAccount')

beforeEach(function () {
    cy.visit('https://www.zoopla.co.uk/')
    cy.get(search.elements.acceptCookie).click()
})

describe('Register and update alerts', function () {
    it('Should be able to register for a rent alert', function () {
        cy.get(search.elements.login).first().click()
        cy.signup()
        cy.get('#fancybox-close').click()
        cy.get(search.elements.headerMenu.toRent).click()
        cy.get(search.elements.searchModal.location).click({ force: true })
        cy.get(search.elements.searchModal.location).type(`London`)
        cy.get(search.elements.searchModal.firstResult).click()
        cy.get(search.elements.searchModal.minPrice).select('800')
        cy.get(search.elements.searchModal.maxPrice).select('1000')
        cy.get(search.elements.searchModal.bedrooms).select('1')
        cy.get(search.elements.searchModal.searchSubmit).click() 
        cy.get(search.elements.saveSearch).click()  
        cy.get(search.elements.searchModal.manage).click()  
        cy.get(myAccount.elements.alertsAndSearches.alertFrequency).last().select("3")
    })
})

describe('Search results', function () {
    it('Search for a particular property in the house prices search and confirm that it appears as the first result', function () {
        cy.get(search.elements.headerMenu.housePrices).click()
        cy.get(search.elements.searchModal.location).click({ force: true })
        cy.get(search.elements.searchModal.location).type('garage')
        cy.get(search.elements.searchModal.firstResult).click()
        cy.get(search.elements.searchModal.searchSubmit).click()
    })

    it('Save a search for property within 15 minutes drive of SE1 2LH.', function () {
        cy.get(search.elements.login).first().click()
        cy.auto_login()
        cy.get(search.elements.headerMenu.toRentTravelTime).click({ force: true })
        cy.get(search.elements.searchModal.location).type('SE1 2LH')
        cy.get(search.elements.searchModal.duration).select('900')
        cy.get(search.elements.searchModal.transport).select('driving')
        cy.get(search.elements.searchModal.searchSubmit).click()        
    })
    
     it('Save a search result.' , function() {
        cy.get(search.elements.saveSearch).click()        
        cy.get(search.elements.searchModal.return).click()
    })
})

