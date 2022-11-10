///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json'
import BasePage from '../support/pages/BasePage';

it('Authorization', () => {
//   cy.visit('/index.php?rt=account/login');
  
//   cy.get('#loginFrm_loginname').type(user.userName);
//   cy.get('#loginFrm_password').type(user.password);

//   cy.get('button[title="Login"]').click();

  authorizationPage.visit();

  authorizationPage.submitLoginForm(user.userName, user.password);

//   cy.get('h1.heading1').should('contain', user.firstName).and('contain', "My Account")

  accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");
  

  cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
})

cy.ge

it('Test inheritance', () => {
  // const basePage = new BasePage();
  authorizationPage.visit();

  authorizationPage.performSearch('i');
  // basePage.performSearch('i');
})