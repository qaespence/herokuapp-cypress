class BrokenImagesPage {
    visit() {
      cy.visit('/broken_images')
    }
  
    getAllImages() {
      return cy.get('img') // Select all image elements on the page
    }
  
    verifyImageLoaded(imageElement) {
      imageElement.should('be.visible')
      imageElement.then(($img) => {
        // Check if the naturalWidth is greater than 0, meaning the image loaded successfully
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    }
  
    verifyImageBroken(imageElement) {
      imageElement.should('be.visible')
      imageElement.then(($img) => {
        // If the naturalWidth is 0, the image is broken
        expect($img[0].naturalWidth).to.eq(0)
      })
    }
  }
  
  export default BrokenImagesPage
  