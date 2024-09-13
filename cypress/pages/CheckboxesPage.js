class CheckboxesPage {
    visit() {
      cy.visit('/checkboxes')
    }
  
    getAllCheckboxes() {
      return cy.get('input[type="checkbox"]')
    }
  
    checkCheckbox(index) {
      this.getAllCheckboxes().eq(index).check().should('be.checked')
    }
  
    uncheckCheckbox(index) {
      this.getAllCheckboxes().eq(index).uncheck().should('not.be.checked')
    }
  
    verifyCheckboxChecked(index) {
      this.getAllCheckboxes().eq(index).should('be.checked')
    }
  
    verifyCheckboxUnchecked(index) {
      this.getAllCheckboxes().eq(index).should('not.be.checked')
    }
  }
  
  export default CheckboxesPage
  