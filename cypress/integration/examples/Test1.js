describe('My first test Suit', function(){
    it('My first test case', function(){
        //all testcases will go here
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input[type=search]').type('ca');
        //instead of calling .product three times just store it in ALIAS and reuse it in various steps
        cy.get('.products').as('productLocator');

        cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').should('have.length',4);
       // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
       cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click();
       console.log('SF');
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text();
            cy.log(textVeg);
            // $el is a wrapped jQuery element
            if (textVeg.includes('Capsicum')) {
            //    $el.find('button').click();
             cy.wrap($el).find('button').click();
            } 
          })
        //   const logo=cy.get('.brand');
        //   cy.log(logo.text());
        //Resolving the above Promise
          cy.get('.brand').then(function(logo){
                cy.log(logo.text());
          })
          cy.get('.brand').should('have.text','GREENKART');
    })

    
})