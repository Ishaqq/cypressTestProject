describe('Test Suit to handle UI Elements', function(){
    it('My first test case', function(){
        //visit Url through environment variable
     //   cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     cy.visit(Cypress.env('url'))
        cy.get('#checkbox-example').as('checkBoxExample');
        
            const checkBoxOptions = ["Option1", "Option3"];
            
            for (var i = 0; i < checkBoxOptions.length; i++) {
                const Option=checkBoxOptions[i];
                cy.log(checkBoxOptions[i]);
                cy.get('@checkBoxExample').find('label').each(($el, index, $list) => {
                    const checkBoxName=$el.text();
                     cy.log(checkBoxName);
                    if(checkBoxName.includes(Option)){
                        cy.get($el.find('input[type="checkbox"]')).check().should('be.checked');
                    }
                });
             }

             //Static Dropdown (You can pass option text OR value attribute)
            cy.get('select').select('option3').should('have.value','option3')

            //Dianamic Dropdown
            cy.get('#autocomplete').type('Pa');
            cy.get('li .ui-menu-item-wrapper').each(($el, index, $list) => {
                if ($el.text()==='Pakistan') {
                 cy.wrap($el).click();
                } 
              })
              //autocomplete

            cy.get('#autocomplete').should('have.value','Pakistan')
            //visible invisible
            cy.get('#displayed-text').should('be.visible')
            cy.get('#hide-textbox').click()
            cy.get('#displayed-text').should('not.be.visible')
            cy.get('#show-textbox').click()
            cy.get('#displayed-text').should('be.visible')
 
            //radio buttons
 
            cy.get('[value="radio3"]').check().should('be.checked')
        })
       
    })

    






