const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the user is in index page", () => {
  cy.visit("/")
})

When("the user clicks the play button", () => {
  cy.get('[aria-label="Play timer"]').click()
})

Then("timer content is less than 25:00", () => {
  cy.wait(1000)
  cy.get('[data-test="timer-value"]').should('not.have.text', '25:00')
})

Then("timer content is 25:00", () => {
  cy.get('[data-test="timer-value"]').should('have.text', '25:00')
})