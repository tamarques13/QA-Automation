import BasePage from "./base_page"

export class SideBarPage extends BasePage {

    elementsSideBarPage = {
        btnOneClick: () => cy.get('.pop-up-alert > button'),
        btnDblClick: () => cy.get('[ondblclick="myFunction()"]'),
        dragSubject: () => cy.get('#drag1'),
        dropLocation: () => cy.get('#div1')
    }

    clickButton() {
        this.elementsSideBarPage.btnOneClick()
            .scrollIntoView()
            .click()

        return this
    }

    doubleClickButton() {
        this.elementsSideBarPage.btnDblClick()
            .scrollIntoView()
            .dblclick()

        return this
    }

    dragTo(){
        const dataTransfer = new DataTransfer();
        this.elementsSideBarPage.dragSubject()
        .scrollIntoView()
        .trigger('dragstart', {
            dataTransfer
        })
        this.elementsSideBarPage.dropLocation()
        .scrollIntoView()
        .trigger('drop', {
            dataTransfer
        })         

        return this
    }
}

