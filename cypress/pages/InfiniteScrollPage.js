class InfiniteScrollPage {
    visit() {
      cy.visit('/infinite_scroll')
    }
  
    getParagraphs() {
      return cy.get('.jscroll-added')
    }
  
    scrollToBottom() {
      cy.scrollTo('bottom')
    }
  
    verifyParagraphCount(expectedCount) {
      this.getParagraphs().should('have.length.gte', expectedCount)
    }
  }
  
  export default InfiniteScrollPage
  