import BasePage from "./BasePage";

class AccountPage extends BasePage{
    visit(){
        cy.log('**Open account page**');
        cy.visit('')
    }

    getUserNameFromHeading(){
        return cy.get('h1.heading1')
    }

    getLoginOrRegisterButton(){
        return cy.get('#customer_menu_top')
    }

    clickOnLogitOrRegisterButton(){
        cy.log('Click on Login or register button');
        this.getLoginOrRegisterButton().click();
    }
}
export default new AccountPage();