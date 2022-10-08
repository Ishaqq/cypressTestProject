class ProductPage{
    getCardTitle(){
         return  cy.get('h4.card-title')
    }
 
    getAddToCart(){
         return cy.get('#exampleFormControlSelect1')
    }

    getCheckOutButton(){
          return cy.get('#navbarResponsive > ul > li > a')
    }
 }
 
 export default ProductPage;