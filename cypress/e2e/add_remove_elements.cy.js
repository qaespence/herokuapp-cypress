import AddRemovePage from '../pages/AddRemovePage'

describe('Add/Remove Elements Page', () => {
  const page = new AddRemovePage()

  beforeEach(() => {
    page.visit()
  })

  it('Test add an element when "Add Element" button is clicked', () => {
    // Verify no delete button exists initially
    page.verifyNoElements()

    // Add one element
    page.clickAddElement()

    // Verify one delete button exists
    page.verifyElementCount(1)
  })

  it('Test remove an element when "Delete" button is clicked', () => {
    // Add an element first
    page.clickAddElement()

    // Remove the element
    page.deleteFirstElement()

    // Verify no delete button exists after removing
    page.verifyNoElements()
  })

  it('Test allow adding and removing multiple elements', () => {
    // Add three elements
    page.clickAddElement(3)

    // Verify three delete buttons are present
    page.verifyElementCount(3)

    // Remove two elements
    page.deleteFirstElement()
    page.deleteFirstElement()

    // Verify one delete button remains
    page.verifyElementCount(1)
  })
})
