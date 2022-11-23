describe("login", () => {
    it("passes", () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(":nth-child(2) > .form-control").type("superadmin@gmail.com");
        cy.get(":nth-child(3) > .form-control").type("password");
        cy.get(".needs-validation").submit();
        cy.get(".navbar-nav > :nth-child(1) > .nav-link > .fas").click();
        cy.get(':nth-child(2) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > li > .nav-link').click();
        cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
        cy.get('.text-danger').click();
    });
});
