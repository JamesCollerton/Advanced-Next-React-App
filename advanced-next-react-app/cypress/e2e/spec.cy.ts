describe('Cypress Page', () => {
  it('Alert window opens', () => {

    // Arrange
    const stub = cy.stub()  
    cy.on ('window:alert', stub)

    // Act
    cy.visit('http://localhost:3000/cypress')
    cy.get('[id="button-test-id"]').click().then(() => {

      // Assert
      expect(stub.getCall(0)).to.be.calledWith('Fail this test!')      
    })  
  })
})