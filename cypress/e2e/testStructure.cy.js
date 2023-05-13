///<reference types="cypress" />

describe('Context: My First Test',()=>{
    before(()=> {

    })
    beforeEach(() =>{
        cy.clearCookies();
    })
    after(()=>{
    
    })
    afterEach(()=>{


    })
    it('Opening a web application', ()=> {
        cy.visit('/registration_form');
    })
    it('Test2', ()=>{
        expect(false).to.equal(false);
    })
    it('Test3', ()=>{
        expect(false).not.to.equal(true);
    })
    it('Test4', ()=>{
        expect(5).to.equal(5);
    })
    it('Test5', ()=>{
        expect(true).to.equal('5'==5);
    })


})

