class BasePage{

    navigateURL(url){
        cy.visit(url)
        cy.wait(500)

        return this
    }
}

export default BasePage
