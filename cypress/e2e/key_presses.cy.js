import KeyPressesPage from '../pages/KeyPressesPage'

describe('Key Presses Page', () => {
  const page = new KeyPressesPage()

  beforeEach(() => {
    page.visit()
  })

  const keysToTest = [
    { key: '{enter}', result: 'You entered: ENTER' },
    { key: '{esc}', result: 'You entered: ESCAPE' },
    { key: ' ', result: 'You entered: SPACE' }, // Use a space character
    { key: '{backspace}', result: 'You entered: BACK_SPACE' },
    { key: 'A', result: 'You entered: A' },
    { key: 'Z', result: 'You entered: Z' },
    { key: '1', result: 'You entered: 1' },
    { key: '@', result: 'You entered: 2' }, // Press the "@" key (expect it to be interpreted as "2")
    { key: '{shift}', result: 'You entered: SHIFT' },
    { key: '{ctrl}', result: 'You entered: CONTROL' },
    { key: '{alt}', result: 'You entered: ALT' }
  ]

  // Test normal key presses
  keysToTest.forEach(({ key, result }) => {
    it(`Test key press "${key}"`, () => {
      // Press the key
      page.pressKey(key)

      // Verify the result text
      page.verifyKeyResult(result)
    })
  })

})
