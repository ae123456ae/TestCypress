///<reference types="cypress" />

describe('Context: My First Test',()=>{
    
    beforeEach(() =>{

        cy.clearCookies();
        cy.visit('/login');
    })

    it('check figgerent locators strategies', ()=> {
        cy.get("input[name='username']").type("CydeoStudent");
        cy.get("[type='text']").clear();

        cy.get("input").each((item,index,list)=>{
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
    })




})

