import BasePage from "./BasePage";

class AccountPage extends BasePage{
    visit(){
        cy.log('**Open account page**');
        cy.visit('')
    }

    getUserNameFromHeading(){
        return cy.get('h1.heading1')
    }
}
export default new AccountPage();