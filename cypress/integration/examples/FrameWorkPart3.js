/// <reference types="Cypress" />
import HomePage from './pageObjects/HomePage'
import ProductPage from './pageObjects/ProductPage'

describe('My Second Test Suite Using Fixtures', function () {

    this.beforeEach(function(){
        
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('My FirstTest case', function () {
        //configration for specific file
       // Cypress.config('defaultCommandTimeout',8000) // will applicable for this only
        //Handling globaly environment variables
       // cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.visit(Cypress.env('url')+'/angularpractice/')
        const homePage=new HomePage()

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getRadioButton().should('be.disabled')
    })

    it('My Second case', function () {    
        var sum=0
        const homePage=new HomePage()
        const productPage=new ProductPage()
        homePage.getShopingCardMenu().click()
         this.data.FproductName.forEach(function(element){
            cy.selectProduct(element)
        });
        productPage.getCheckOutButton().click()

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
        //   cy.pause()

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
})