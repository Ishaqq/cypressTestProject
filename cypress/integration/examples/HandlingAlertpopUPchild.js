/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
// or
//require('cypress-iframe');
import 'cypress-iframe';
describe('My first test Suit', function(){
    it('My first test case', function(){
        //all testcases will go here
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        //window:alert
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //Handling Child browser tab
        cy.get('#opentab').invoke('removeAttr','target').click();

        // Handling Navigation back and forward
        cy.go('back');
        // cy.wait(500);
        // cy.go('forward');

        //Handling Table Elements
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const text=$e1.text()
            if(text.includes("Python"))
            {
                //Find imediate Sibling of td  .text is non cypress here so we should resolve promise in this case
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('25')
                })
            }
        })

        //Cypress don't Support Mouse hover so we can handle it like this
        cy.get('#mousehover').invoke('show');
       // cy.get('#top').click();
       cy.contains('Top').click({force : true});
        cy.url().should('include','#top');

        //handling IFRAME
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('ul  li:nth-child(8)').eq(0).click()        
        
    })

    
})