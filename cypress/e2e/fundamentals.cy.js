describe('Fundamental test', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Contain correct header text', () => {
    // cy.visit('/fundamentals')
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    // 1. cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals')
  })
  it('Accordian works correctly', () => {
    // cy.visit('/fundamentals')
    cy.contains(/Your tests will/i).should('not.be.visible')
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will/i).should('not.be.visible')
  })
})