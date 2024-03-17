export class BasePage{
    static visit(){
        return cy.visit('https://demoqa.com/selectable');
    }

    // static get clickGrid(){
    //     return cy.get('#demo-tab-grid');
    // }

    // static get clickNumbers(){
    //     return cy.get('#gridContainer');
    // }
}