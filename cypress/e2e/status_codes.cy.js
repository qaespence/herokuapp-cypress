import StatusCodesPage from '../pages/StatusCodesPage'

describe('Status Codes Page', () => {
  const page = new StatusCodesPage()

  beforeEach(() => {
    page.visit()
  })

  const statusCodes = [200, 301, 404, 500]

  statusCodes.forEach((statusCode) => {
    it(`Test status code ${statusCode}`, () => {
      // Click on the status code link
      page.clickStatusCodeLink(statusCode)

      // Verify the URL contains the correct status code
      page.verifyStatusCodeInURL(statusCode)

      // Verify the page content contains the correct status code
      page.verifyStatusCodePageContent(statusCode)

      // Go back to the main Status Codes page
      page.goBackToStatusCodesPage()
    })
  })
})
