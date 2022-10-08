describe('My first test Suit', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data 
            //this.data will globalize this data to whole suit
        })
    })

    it('My first test case', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(1) > .form-control').type(this.data.name);
        cy.get('#exampleFormControlSelect1').select(this.data.gender);
      
    })

//Cut it and put it in command.js in support folder for customization
    // it('Shoping Cart', function(){
    //     cy.get('nav ul li:nth-child(2)  a').click(); 
    //   cy.get('h4.card-title').each(($el,index,$list)=>{
    //         if($el.text().includes('Blackberry'))
    //        cy.get('button.btn.btn-info').eq(index).click()
    //     })

        it('Shoping Cart', function(){
            cy.get('nav ul li:nth-child(2)  a').click(); 
            cy.selectProduct('Blackberry')
            cy.selectProduct('Samsung Note 8')
        })


    after(function(){

    })
    
})