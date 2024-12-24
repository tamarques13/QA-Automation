import { TestFunctions } from "../pages/praticeAutomationTest_page"

const testFunction = new TestFunctions()

const dataPage = require('../fixtures/users_data.json')

const [username, password, url, first_name, last_name, gess_text, long_text] = [
  dataPage.users[0].username,
  Cypress.env("PASSWORD_USER"),
  Cypress.env("SITE_URL"),
  dataPage.users[0].name,
  dataPage.users[0].family,
  dataPage.users[0].gess_text,
  dataPage.users[0].long_text,
]

describe('Testing Web Application', () => {
  beforeEach(() => {
    Cypress.session.clearAllSavedSessions()
  })

  it('Testing Web Application', () => {
    testFunction
      .loginTest(url, username, password)
      .isLoginIn()
      .sideBarTest()
      .formTest(first_name, last_name, gess_text, long_text)
  })
})