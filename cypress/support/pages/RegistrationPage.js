import BasePage from "./BasePage";

class RegistrationPage extends BasePage{
    visit(){
        cy.log('**Open registration page**');
        cy.visit('/index.php?rt=account/create');
    }

    getFirstNameField(){
        return cy.get('#AccountFrm_firstname');
    }

    getLastNameField(){
        return cy.get('#AccountFrm_lastname');
    }

    getEmailField(){
        return cy.get('#AccountFrm_email');
    }

    getAddressField(){
        return cy.get('#AccountFrm_address_1');
    }

    getCityField(){
        return cy.get('#AccountFrm_city');
    }

    getStateDropdown(){
        return cy.get('#AccountFrm_zone_id');
    }

    getPostcodeField(){
        return cy.get('#AccountFrm_postcode');
    }

    getCountryDropdown(){
        return cy.get('#AccountFrm_country_id');
    }

    getLoginField(){
        return cy.get('#AccountFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#AccountFrm_password');
    }

    getPasswordConfirmField(){
        return cy.get('#AccountFrm_confirm');
    }

    getNoNewsletterSubscribeRadioButton(){
        return cy.get('#AccountFrm_newsletter0');
    }

    getPrivacyPolicyCheckbox(){
        return cy.get('#AccountFrm_agree');
    }

    getContinueButton(){
        return cy.get('button[title="Continue"]');
    }

    getGreetingMessage(){
        return cy.get('h1.heading1');
    }

    typeTextToFirstNameField(firstName){
        cy.log(`Type first name ${firstName} to First Name field`);
        this.getFirstNameField().type(firstName);
    }

    typeTextToLastNameField(lastName){
        cy.log(`Type first name ${lastName} to Last Name field`);
        this.getLastNameField().type(lastName);
    }

    typeTextToEmailField(email){
        cy.log(`Type email ${email} to E-Mail field`);
        this.getEmailField().type(email);
    }

    typeTextToAddressField(address){
        cy.log(`Type address ${address} to Address 1 field`);
        this.getAddressField().type(address);
    }

    typeTextToCityField(city){
        cy.log(`Type city ${city} to City field`);
        this.getCityField().type(city);
    }

    selectStateInDropdown(state){
        cy.log(`Select state ${state} in Region / State dropdown`);
        this.getStateDropdown().select(state);
    }

    typeTextToPostcodeField(postcode){
        cy.log(`Type postcode ${postcode} to ZIP Code field`);
        this.getPostcodeField().type(postcode);
    }

    selectCountryInDropdown(country){
        cy.log(`Select country ${country} in Country dropdown`);
        this.getCountryDropdown().select(country);
    }

    typeTextToLoginField(login){
        cy.log(`Type country ${login} to Login name field`);
        this.getLoginField().type(login);
    }

    typeTextToPasswordField(password){
        cy.log(`Type password ${password} to Password field`);
        this.getPasswordField().type(password);
    }

    typeTextToPasswordConfirmField(password){
        cy.log(`Type password ${password} to Password Confirm field`);
        this.getPasswordConfirmField().type(password);
    }

    clickOnNoNewsletterSubscribeRadioButton(){
        cy.log(`Click on No radio button for Subscribe`);
        this.getNoNewsletterSubscribeRadioButton().click();
    }

    clickAgreePrivacyPolicyCheckbox(){
        cy.log(`Check radio button for Privacy Policy`);
        this.getPrivacyPolicyCheckbox().check();
    }

    clickOnContinueButton(){
        cy.log(`Click on Continue button`);
        this.getContinueButton().click();
    }
}
export default new RegistrationPage();