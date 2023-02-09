describe('demoblaze', () => {
  let user;
  let randomIndex = Math.floor(Math.random() * 10000);
  let username = `newusername${randomIndex}`;
  let password = `strongPass${randomIndex}`;

  

  it('should allow register, login, add to cart', () => {

    cy.visit('/');
    cy.get('#signin2')
      .click();
    cy.wait(1000);
    cy.get('#sign-username')
      .type(username);
    cy.get('#sign-password')
      .type(password);
    cy.contains('button', 'Sign up')
      .click();
    cy.visit('/');
    cy.get('#login2')
      .click();
    cy.wait(1000);
    cy.get('#loginusername')
      .type(username);
    cy.get('#loginpassword')
      .type(password);
    cy.contains('button', 'Log in')
      .click();
    cy.contains('.hrefch', 'Samsung galaxy s6')
      .click();
    cy.get('.col-sm-12 > .btn')
      .click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added.`);
    })
  })
})
