/// <reference types="cypress" />

describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the home page successfully", () => {
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("should have a visible header", () => {
    cy.get("header").should("be.visible");
  });

  it("should have a main content area", () => {
    cy.get("main").should("be.visible");
  });

  it("should have exactly one h1 heading", () => {
    cy.get("h1").should("have.length", 1);
  });

  it("should have a visible footer", () => {
    cy.get("footer").should("be.visible");
  });

  it("should have working navigation links", () => {
    // Example: Check if navigation links are present and clickable
    cy.get("nav a").each(($link) => {
      cy.wrap($link).should("be.visible");
      cy.wrap($link).should("have.attr", "href");
    });
  });

  it("should have proper meta tags", () => {
    cy.get("head title").should("exist");
    cy.get('meta[name="description"]').should("exist");
  });

  it("should allow viewport zooming", () => {
    cy.get('meta[name="viewport"]')
      .should("exist")
      .and("not.have.attr", "content", /user-scalable=no|maximum-scale=1/);
  });

  it("should have alt attributes on all images", () => {
    cy.get("img").each(($img) => {
      cy.wrap($img).should("have.attr", "alt");
    });
  });
});
