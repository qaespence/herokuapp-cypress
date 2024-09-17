class DisappearingElementsPage {
    visit() {
      cy.visit('/disappearing_elements')
    }
  
    getMenuItems() {
      return cy.get('ul li') // Select all the menu items
    }
  
    clickMenuItem(itemText) {
      return cy.contains('ul li a', itemText).click()
    }
  
    verifyMenuItemExists(itemText) {
      cy.contains('ul li a', itemText).should('exist')
    }
  
    verifyMenuItemNotExist(itemText) {
      cy.contains('ul li a', itemText).should('not.exist')
    }
  }
  
  export default DisappearingElementsPage
  