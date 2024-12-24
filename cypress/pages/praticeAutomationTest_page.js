import { LoginPage } from "./login_page"
import { SideBarPage } from "./sidebar_page"
import { FormPage } from "./form_page"

const loginPage = new LoginPage()
const sideBarPage = new SideBarPage()
const formPage = new FormPage()

export class TestFunctions {

    loginTest(url, username, password) {

        loginPage
            .navigate(url)
            .enterUsername(username)
            .enterPassword(password)
            .clickLogin()

        return this
    }

    sideBarTest() {
        sideBarPage
            .clickButton()
            .doubleClickButton()
            .dragTo()

        return this
    }

    formTest(first_name, last_name, gess_text, long_text) {
        formPage
            .enterNamesBoxes(first_name, last_name)
            .checkOption()
            .selectDropdown()
            .selectMultipleOptions()
            .checkBoxOptions()
            .typingAndGuessing(gess_text)
            .longMessage(long_text)

        return this
    }

    isLoginIn() {
        loginPage
            .isLogged()

        return this
    }
}

