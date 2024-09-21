import InfiniteScrollPage from '../pages/InfiniteScrollPage'

describe('Infinite Scroll Page', () => {
  const page = new InfiniteScrollPage()

  beforeEach(() => {
    page.visit()
  })

  it('Test initial load of the page', () => {
    // Verify that initially, paragraphs are loaded (the number may vary, so we check if any are loaded)
    page.verifyParagraphCount(1)
  })

  it('Test loading more content on scroll', () => {
    // Initial paragraph count (usually starts with 2)
    page.verifyParagraphCount(2)

    // Scroll multiple times and verify that more paragraphs are added
    for (let i = 0; i < 3; i++) {
      page.scrollToBottom()
      cy.wait(1000) // Wait for content to load
    }

    // Verify that more content has been loaded (at least 5 paragraphs after scrolling)
    page.verifyParagraphCount(5)
  })

  it('Test loading a large amount of content', () => {
    // Scroll multiple times to load a large amount of content
    for (let i = 0; i < 10; i++) {
      page.scrollToBottom()
      cy.wait(1000) // Wait for content to load after each scroll
    }

    // Verify that at least 12 paragraphs have been loaded after scrolling
    page.verifyParagraphCount(12)
  })
})
