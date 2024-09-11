import BrokenImagesPage from '../pages/BrokenImagesPage'

describe('Broken Images Page', () => {
  const page = new BrokenImagesPage()

  beforeEach(() => {
    page.visit()
  })

  it('Test that all images are present and visible on the page', () => {
    // Ensure that the page contains three image elements
    page.getAllImages().should('have.length', 4) // 4 due to the Git fork image

    // Verify all images are visible
    page.getAllImages().each(($img) => {
      cy.wrap($img).should('be.visible')
    })
  })

  it('Test which images are broken and which are working', () => {
    // Test each image for whether it's broken or successfully loaded
    page.getAllImages().each(($img) => {
      cy.wrap($img).then((imageElement) => {
        const img = imageElement[0]
        if (img.naturalWidth === 0) {
          cy.wrap(imageElement).should('be.visible')
          page.verifyImageBroken(cy.wrap(imageElement))
        } else {
          cy.wrap(imageElement).should('be.visible')
          page.verifyImageLoaded(cy.wrap(imageElement))
        }
      })
    })
  }) 

  it('Test broken image count', () => {
    // Count the number of broken images
    let brokenImageCount = 0
    page.getAllImages().each(($img) => {
      cy.wrap($img).then((imageElement) => {
        const img = imageElement[0]
        if (img.naturalWidth === 0) {
          brokenImageCount += 1
        }
      })
    }).then(() => {
      // Expect at least one broken image (depending on the actual page behavior)
      expect(brokenImageCount).to.be.greaterThan(0)
    })
  })
})
