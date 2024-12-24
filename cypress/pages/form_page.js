import BasePage from "./base_page"

export class FormPage extends BasePage {

    elementsFormPage = {
        firstname: () => cy.get('#fname'),
        lastname: () => cy.get('#lname'),
        checkRadioOption: () => cy.get('input[type="radio"][name^="gender"]'),
        dropdown: () => cy.get('#option'),
        multipleSelect: () => cy.get('#owc'),
        checkBoxOption: () => cy.get('input[type="checkbox"][id^="moption"]'),
        guessText: () => cy.get('[list="datalists"]'),
        textLongArea: () => cy.get('textarea')
    }

    enterNamesBoxes(firstname, lastname) {
        this.elementsFormPage.firstname()
            .type(firstname)
            .scrollIntoView()
        this.elementsFormPage.lastname()
            .type(lastname)
            .scrollIntoView()

        return this
    }

    checkOption() {
        this.elementsFormPage.checkRadioOption().each((radio) => {
            const num = radio.length
            for (let i = 0; i < num; i++) {
                const radioOptionValue = radio.val()
                cy.get(`[value="${radioOptionValue}"]`)
                    .scrollIntoView()
                    .check()
            }
        })
        return this
    }

    selectDropdown() {
        this.elementsFormPage.dropdown().find('option').then((options) => {
            const num = options.length
            for (let i = 0; i < num; i++) {
                this.elementsFormPage.dropdown()
                    .scrollIntoView()
                    .select(i)
            }
        })

        return this
    }

    selectMultipleOptions() {
        let selectedOptions = []
        this.elementsFormPage.multipleSelect().find('option').then((multiOptions) => {
            const num = multiOptions.length
            for (let i = 0; i < num; i++) {
                if (i === 0) {
                    selectedOptions.push('option')
                } else {
                    selectedOptions.push(`option ${(i)}`)
                }
            }
            this.elementsFormPage.multipleSelect()
                .scrollIntoView()
                .select(selectedOptions)
        })

        return this
    }

    checkBoxOptions() {
        this.elementsFormPage.checkBoxOption().each((checkbox) => {
            const num = checkbox.length
            for (let i = 0; i < num; i++) {
                const checkboxname = checkbox.attr('name')
                cy.get(`[name="${checkboxname}"]`)
                    .scrollIntoView()
                    .check()
            }
        })
        return this
    }

    typingAndGuessing(guessText) {
        this.elementsFormPage.guessText()
            .scrollIntoView()
            .type(guessText)

        return this
    }

    longMessage(long_text) {
        this.elementsFormPage.textLongArea()
            .scrollIntoView()
            .type(long_text)

        return this
    }
}

