import DragAndDropPage from '../pages/DragAndDropPage'

describe('Drag and Drop Page', () => {
  const page = new DragAndDropPage()

  beforeEach(() => {
    page.visit()
  })

  it('Test initial positions of Column A and Column B', () => {
    // Verify initial positions
    page.verifyColumnAContains('A')
    page.verifyColumnBContains('B')
  })

  it('Test dragging Column A to Column B', () => {
    // Drag column A to column B
    page.dragAtoB()

    // Verify the positions after drag
    page.verifyColumnAContains('B')
    page.verifyColumnBContains('A')
  })

  it('Test dragging Column B to Column A', () => {
    // Drag column A to column B first
    page.dragAtoB()

    // Then drag column B back to column A
    page.dragBtoA()

    // Verify the columns are back to their initial positions
    page.verifyColumnAContains('A')
    page.verifyColumnBContains('B')
  })
})
