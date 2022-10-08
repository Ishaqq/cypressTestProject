/// <reference types="Cypress" />

describe('My Second Test Suite Using Fixtures', function () {

    this.beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        cy.get('form > div:nth-child(1) > input').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        //Verifying two ways binding 
        cy.get('form-comp > div > h4 > input').should('have.value',this.data.name)
        cy.get('form > div:nth-child(1) > input').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        // cy.pause()
        cy.get('nav > ul > li:nth-child(2) > a').click()

        // this.data.FproductName.forEach(function(element){
        //     cy.selectProduct(element)
        // })

    })
    
    it('My 2nd test case case', function () {
         this.data.FproductName.forEach(function(element){
            cy.selectProduct(element)
        });
    })
})