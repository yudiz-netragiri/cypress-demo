describe('Various Examples', () => {
    beforeEach(()=>{
        cy.visit('/examples')
      })
it("multiple page testing",()=>{

    //after click redirect to the designated routes test cases
    cy.getDataTest("nav-why-cypress").click()
    cy.location("pathname").should("equal", "/") 

    cy.getDataTest("nav-overview").click()
    cy.location("pathname").should("equal", "/overview") 

    cy.getDataTest("nav-fundamentals").click()
    cy.location("pathname").should("equal", "/fundamentals") 

    // cy.getDataTest("nav-examples").click()
    // cy.location("pathname").should("equal", "/examples") 

    // cy.getDataTest("nav-why-cypress").click()
    // cy.location("pathname").should("equal", "/") 
})

it.only("intercepts",()=>{
    cy.intercept("POST",'http://localhost:3000/examples',{
        fixture: "example.json"
        // body: {
        //     message: "successfull "
        // }
    })
    cy.getDataTest("post-btn").click()
})
})