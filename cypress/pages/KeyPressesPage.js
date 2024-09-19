class KeyPressesPage {
    visit() {
      cy.visit('/key_presses')
    }
  
    pressKey(key) {
      cy.get('body').type(key)
    }
  
    pressShiftKey(char) {
      cy.get('body').type(`{shift}${char}`)
    }
  
    verifyKeyResult(expectedResult) {
      cy.get('#result').should('contain.text', expectedResult)
    }
  }
  
  export default KeyPressesPage
  