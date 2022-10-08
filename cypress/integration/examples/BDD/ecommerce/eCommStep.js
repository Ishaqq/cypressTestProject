/// <reference types="Cypress" />
import HomePage from '../../pageObjects/HomePage'
import ProductPage from '../../pageObjects/ProductPage'

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
//add cucumber report options in package.json -> output.json
//user html report plugin /create js file (pass the details of output.json)
//run js file htmlreport.js by node js


let name="";
var sum=0
const homePage=new HomePage()
const productPage=new ProductPage()
// Given('I open Ecommerce Page', function(){  OR/
Given('I open Ecommerce Page', ()=>{
    cy.visit(Cypress.env('url')+'/angularpractice/')
})

When('I add items to Cart',function(){
    
        
        homePage.getShopingCardMenu().click()
         this.data.FproductName.forEach(function(element){
            cy.selectProduct(element)
        });
        productPage.getCheckOutButton().click()
})
And('Validate the total price',()=>{
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const price=$el.text()
    //   cy.log(price)
        var ActualPrice=price.split(" ")
            ActualPrice=ActualPrice[1].trim()
        // cy.log(ActualPrice)

        //convert it to Number
        sum=sum+Number(ActualPrice)
        // cy.log(sum)
      })
      
      cy.get('h3 > strong').then(function(element){
        var total=element.text()
            total=total.split(" ")
            total=total[1].trim()
            total=Number(total)
        cy.log(total)
        expect(total).to.equal(sum)
      })
})

Then('Select the country submit  and verify Thankyou',()=>{
    cy.contains('Checkout').click()
    cy.get('#country').type('Pakistan')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox').click({force: true})
    cy.get('.ng-untouched > .btn').click()
//    cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
        const actualText=element.text()
        expect(actualText.includes('Success!')).to.be.true
    })
})

When('I fill the form detail',function(dataTable){
     name=dataTable.rawTable[1][0]
    cy.get('form > div:nth-child(1) > input').type(name)
    cy.get('#exampleFormControlSelect1').select(dataTable.rawTable[1][1])
})
Then('validate the forms behaviour',function(){
    cy.get('form-comp > div > h4 > input').should('have.value',name)
    cy.get('form > div:nth-child(1) > input').should('have.attr','minlength','2')
    cy.get('#inlineRadio3').should('be.disabled')
})
And('Select the Shop Page',function(){
    cy.get('nav > ul > li:nth-child(2) > a').click()
})
