const { BasePage } = require("../pageObjects/BasePage");
const { HomePage } = require("../pageObjects/HomePage");

describe("Elements", () => {
  context("Text Box scenarios", () => {
    beforeEach(() => {
      //cy.visit('https://demoqa.com/selectable')
      BasePage.visit();
    })


    it('pressesGrid', () => {
      //Click “Grid”
      HomePage.clickGrid.click();
      //Click - “Two”, “Four”, “Six”, “Eight”
      HomePage.clickNumbers.contains("Two").click();
      HomePage.clickNumbers.contains("Four").click();
      HomePage.clickNumbers.contains("Six").click();
      HomePage.clickNumbers.contains("Eight").click();

      //Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      HomePage.validateSelectedNumbers.should('contain','Two','Four','Six','Eight');

      //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      HomePage.validateNotSelectedNumbers.should('contain','One','Three','Seven','Nine');
    })

  

  })
})