import CheckboxesPage from '../pages/CheckboxesPage'

describe('Checkboxes Page', () => {
  const page = new CheckboxesPage()

  beforeEach(() => {
    page.visit()
  })

  it('Test that both checkboxes are visible', () => {
    page.getAllCheckboxes().should('have.length', 2)
    page.getAllCheckboxes().each(($checkbox) => {
      cy.wrap($checkbox).should('be.visible')
    })
  })

  it('Test that first checkbox can be checked', () => {
    page.verifyCheckboxUnchecked(0) // Verify it's initially unchecked
    page.checkCheckbox(0)           // Check it
  })

  it('Test that first checkbox can be unchecked', () => {
    page.checkCheckbox(0)            // Ensure it's checked first
    page.uncheckCheckbox(0)          // Uncheck it
  })

  it('Test that second checkbox is checked by default', () => {
    page.verifyCheckboxChecked(1)    // Ensure second checkbox is checked
  })

  it('Test that second checkbox can be unchecked', () => {
    page.verifyCheckboxChecked(1)    // Verify it's initially checked
    page.uncheckCheckbox(1)          // Uncheck it
  })

  it('Test that second checkbox can be checked again after unchecking', () => {
    page.uncheckCheckbox(1)          // Ensure it's unchecked
    page.checkCheckbox(1)            // Check it again
  })
})
