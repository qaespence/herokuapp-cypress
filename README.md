# Cypress UI Automation Framework

This project is an automated testing framework for the web/browser UI of https://the-internet.herokuapp.com/ using NodeJS and Cypress. 

## Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate into the project folder**:
   ```bash
   cd herokuapp-automation
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Tests

### Run tests in the Cypress Test Runner (interactive mode):

```bash
npx cypress open
```

### Run tests in headless mode:

```bash
npx cypress run
```

## Folder Structure

```
herokuapp-automation/
│
├── cypress/
│   ├── e2e/
│   │   └── add_remove_elements.cy.js    # Test file for the Add/Remove Elements page
│   ├── pages/
│   │   └── AddRemovePage.js             # Page Object Model for the Add/Remove Elements page
│   ├── fixtures/
│   ├── support/
│   └── screenshots/                     # Folder for Cypress screenshots
│   └── videos/                          # Folder for Cypress videos
│
├── node_modules/                         # Node.js dependencies (auto-generated)
├── .gitignore                            # Git ignore file
├── README.md                             # Project documentation
├── cypress.config.js                     # Cypress configuration file
├── package.json                          # Project metadata and dependencies
└── package-lock.json                     # Dependency tree (auto-generated)
```

## Writing Tests

This project uses the **Page Object Model (POM)** to keep the test logic and page interaction separate.

- **Test Files**: Located in `cypress/e2e/...`
- **Page Objects**: Located in `cypress/pages/...`

You can add new test cases and page objects as the framework expands.
