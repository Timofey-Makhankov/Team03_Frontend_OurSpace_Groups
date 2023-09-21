import env from '../../fixtures/env.json'
describe('User Login', () => {
    it('should successfully log in', () => {

        cy.visit(env.home_page);

        cy.url().should('include', env.home_page + '/login')

        cy.get('input[placeholder="Enter username"]').type(env.email);
        cy.get('input[placeholder="Enter password"]').type(env.password);

        cy.contains('Sign in').click();

        console.log(env.home_page)

        cy.url().should('include', env.home_page);

    });
});
