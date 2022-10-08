class HomePage{
    getEditBox(){
         return  cy.get('form > div:nth-child(1) > input')
    }
 
    getGender(){
         return cy.get('#exampleFormControlSelect1')
    }

    getRadioButton(){
     return cy.get('#inlineRadio3')
    }
    getShopingCardMenu(){
     return  cy.get('nav > ul > li:nth-child(2) > a')
    }
 }
 
 export default HomePage;