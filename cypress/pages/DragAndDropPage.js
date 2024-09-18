class DragAndDropPage {
    visit() {
      cy.visit('/drag_and_drop')
    }
  
    getColumnA() {
      return cy.get('#column-a')
    }
  
    getColumnB() {
      return cy.get('#column-b')
    }
  
    dragAtoB() {
      cy.get('#column-a').dragAndDrop('#column-b')
    }
  
    dragBtoA() {
      cy.get('#column-b').dragAndDrop('#column-a')
    }
  
    verifyColumnAContains(text) {
      this.getColumnA().should('contain.text', text)
    }
  
    verifyColumnBContains(text) {
      this.getColumnB().should('contain.text', text)
    }
  }
  
  export default DragAndDropPage
  