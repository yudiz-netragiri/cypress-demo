describe("forms tests",()=>{
    beforeEach(()=>{
        cy.visit("/forms")
    })
    it("Test subscribe form",()=>{
        // cy.contains(/testing forms/i)
        cy.getDataTest("subscribe-form").find("input").as("subscribe-input")
        //use alias instead of writing this logic again and again   alias
        cy.get("@subscribe-input").type("abc@gmail.com")
        cy.contains(/Successfully subbed: abc@gmail.com/i).should('not.exist')
        cy.getDataTest("subscribe-button").click()
        cy.contains(/Successfully subbed: abc@gmail.com/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfullyc subbed: abc@gmail.com/i).should('not.exist')
    })
})