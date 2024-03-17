import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    // static get url() {
    //   return "/#/";
    // }
  
    static get clickGrid(){
        return cy.get('#demo-tab-grid');
    }

    static get clickNumbers(){
        return cy.get('#gridContainer');
    }

    //list-group-item active list-group-item-action
    static get validateSelectedNumbers(){
        return cy.get("[class='list-group-item active list-group-item-action']");
    }

    static get validateNotSelectedNumbers(){
        return cy.get("[class='list-group-item list-group-item-action']");
    }
  
  }