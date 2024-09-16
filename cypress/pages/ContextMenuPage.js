class ContextMenuPage {
    visit() {
      cy.visit('/context_menu')
    }
  
    getContextBox() {
      return cy.get('#hot-spot') // Select the context menu box
    }
  
    rightClickOnBox() {
      this.getContextBox().rightclick()
    }
  
    verifyAlertMessage(expectedMessage) {
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(expectedMessage)
      })
    }
  }
  
  export default ContextMenuPage
  