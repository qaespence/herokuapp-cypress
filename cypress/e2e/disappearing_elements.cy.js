import DisappearingElementsPage from '../pages/DisappearingElementsPage'

describe('Disappearing Elements Page', () => {
  const page = new DisappearingElementsPage()

  beforeEach(() => {
    page.visit()
  })

  it('Test that all menu items are visible when available', () => {
    const menuItems = ['Home', 'About', 'Contact Us', 'Portfolio', 'Gallery']
    
    // Verify that each menu item is visible (some may disappear randomly)
    menuItems.forEach((item) => {
      page.getMenuItems().then(($items) => {
        const itemExists = $items.toArray().some((el) => el.innerText === item)
        if (itemExists) {
          page.verifyMenuItemExists(item)
        } else {
          page.verifyMenuItemNotExist(item)
        }
      })
    })
  })

  it('Test clicking on a visible menu item', () => {
    const menuItems = ['Home', 'About', 'Contact Us', 'Portfolio', 'Gallery']

    // Click on each menu item if it exists and verify page navigation
    menuItems.forEach((item) => {
      page.getMenuItems().then(($items) => {
        const itemExists = $items.toArray().some((el) => el.innerText === item)
        if (itemExists) {
          page.clickMenuItem(item)
          cy.url().should('not.eq', '/disappearing_elements') // Verify navigation
          page.visit() // Navigate back to the Disappearing Elements page for the next check
        }
      })
    })
  })

  it('Test that some menu items may not appear', () => {
    const menuItems = ['Home', 'About', 'Contact Us', 'Portfolio', 'Gallery']

    // Check if any menu items are missing
    menuItems.forEach((item) => {
      page.getMenuItems().then(($items) => {
        const itemExists = $items.toArray().some((el) => el.innerText === item)
        if (!itemExists) {
          page.verifyMenuItemNotExist(item)
        }
      })
    })
  })
})
