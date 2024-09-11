class AddRemovePage {
    visit() {
      cy.visit('/add_remove_elements/')
    }
  
    clickAddElement(times = 1) {
      for (let i = 0; i < times; i++) {
        cy.contains('Add Element').click()
      }
    }
  
    deleteFirstElement() {
      cy.get('.added-manually').eq(0).click()
    }
  
    verifyElementCount(count) {
      cy.get('.added-manually').should('have.length', count)
    }
  
    verifyNoElements() {
      cy.get('.added-manually').should('not.exist')
    }
  }
  
  export default AddRemovePage
  