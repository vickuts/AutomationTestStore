///<reference types="cypress"/>
import{faker} from '@faker-js/faker';

import accountPage from "../support/pages/AccountPage";
import authorizationPage from "../support/pages/AuthorizationPage";
import registrationPage from "../support/pages/RegistrationPage";

const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postcode: faker.address.zipCode(),
    userName: faker.internet.userName(),
    password: faker.internet.password(15)
  }

it.only('Registration', () => {
    accountPage.visit();
    accountPage.clickOnLogitOrRegisterButton();

    authorizationPage.clickOnContinueButton();

    registrationPage.typeTextToFirstNameField(user.firstName);
    registrationPage.typeTextToLastNameField(user.lastName);
    registrationPage.typeTextToEmailField(user.email);
    registrationPage.typeTextToAddressField(user.address);
    registrationPage.typeTextToCityField(user.city);
    registrationPage.selectStateInDropdown(1);
    registrationPage.typeTextToPostcodeField(user.postcode);
    registrationPage.selectCountryInDropdown('United Kingdom');
    registrationPage.typeTextToLoginField(user.userName);
    registrationPage.typeTextToPasswordField(user.password);
    registrationPage.typeTextToPasswordConfirmField(user.password);
    registrationPage.clickOnNoNewsletterSubscribeRadioButton();
    registrationPage.clickAgreePrivacyPolicyCheckbox();
    registrationPage.clickOnContinueButton();

    registrationPage.getGreetingMessage().should('contain', ' Your Account Has Been Created!')
})

