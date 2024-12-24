import BasePage from "./base_page";

export class LoginPage extends BasePage {

    elementsLoginPage = {
        username: () => cy.get('#uname'),
        password: () => cy.get('#pwd'),
        btLogin: () => cy.get('[type="submit"]'),
        homePage: () => cy.get('h4 > a'),
        lbHeader: () => cy.get('h2')
    }

    navigate(url) {
        super.navigateURL(url)

        return this
    }

    enterUsername(username) {
        this.elementsLoginPage.username()
            .scrollIntoView()
            .type(username)

        return this

    }

    enterPassword(password) {
        this.elementsLoginPage.password()
            .scrollIntoView()
            .type(password)

        return this

    }

    clickLogin() {
        this.elementsLoginPage.btLogin()
            .scrollIntoView()
            .click()

        return this
    }

    clickBackHomePage() {
        this.elementsLoginPage.homePage()
            .scrollIntoView()
            .click()

        return this
    }

    isLogged() {
        this.elementsLoginPage.lbHeader()
            .should('exist')
            .and('be.visible')
            .and('contain', 'Login Successful :)')
        this.clickBackHomePage()

        return this
    }
}
