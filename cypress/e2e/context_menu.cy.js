import ContextMenuPage from '../pages/ContextMenuPage'

describe('Context Menu Page', () => {
  const page = new ContextMenuPage()

  beforeEach(() => {
    page.visit()
  })

  it('Test that the context menu box is visible', () => {
    // Verify that the context menu box is visible on the page
    page.getContextBox().should('be.visible')
  })

  it('Test right-click on the context menu box triggers an alert', () => {
    // Perform a right-click on the context menu box
    page.rightClickOnBox()

    // Verify the alert message content
    page.verifyAlertMessage('You selected a context menu')
  })

  it('Test no alert when no right-click is performed', () => {
    // This test verifies that no alert is triggered without a right-click
    cy.on('window:alert', () => {
      throw new Error('Alert was triggered without right-clicking')
    })

    // Just visit the page without performing a right-click
    page.getContextBox().should('be.visible')
  })
})
