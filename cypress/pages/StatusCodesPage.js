class StatusCodesPage {
    visit() {
      cy.visit('/status_codes')
    }
  
    clickStatusCodeLink(statusCode) {
      cy.contains('a', statusCode).click()
    }
  
    verifyStatusCodeInURL(statusCode) {
      cy.url().should('include', `status_codes/${statusCode}`)
    }
  
    verifyStatusCodePageContent(statusCode) {
      cy.get('p').should('contain.text', statusCode)
    }
  
    goBackToStatusCodesPage() {
      cy.go('back')
    }
  }
  
  export default StatusCodesPage
  