/// <reference types="Cypress" />
import HomePage from '../examples/pageObjects/HomePage'

describe('My Second Test Suite Using Fixtures', function () {

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('My FirstTest case', function () {
        const homePage=new HomePage()

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        //Verifying two ways binding 
        // cy.get('form-comp > div > h4 > input').should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getRadioButton().should('be.disabled')
        homePage.getShopingCardMenu().click()
       
        
         this.data.FproductName.forEach(function(element){
            cy.selectProduct(element)
        });
    })
})