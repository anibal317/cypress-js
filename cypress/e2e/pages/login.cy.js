import LoginPage from '../components/login/loginPage';
import ProductInventory from '../components/inventory/ProductInventory';

describe('Validate login with validate credencial', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductInventory();

  beforeEach(() => {
    loginPage.navigate();
  });

  it('should display login page elements', () => {
    loginPage.getUsernameInput().should('be.visible');
    loginPage.getPasswordInput().should('be.visible');
    loginPage.getLoginButton().should('be.visible');
  });
  
  it('should validate incorrect login', () => {
    cy.login('errortext','errorpass');
    loginPage.errorLabel().should('be.visible');
  });


  it('should validate login functionality', () => {
   cy.login(Cypress.env('qauser'), Cypress.env('qapassword')); 
   productPage.pageTitle().should('be.visible');


  });
}) 
