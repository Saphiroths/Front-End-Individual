/// <reference types= "cypress" />


context('DeleteItem', () => {
    it('Deletes an item', () => {
        cy.visit('http://localhost:4200/items');
        cy.clearLocalStorage();

        cy.contains('Delete').click();

    });
})

context('UpdateItem', () => {
    it('Updates an Item', () => {
        cy.visit('http://localhost:4200/items');

        cy.contains('Update item').click();
        cy.get('input[name="title"]').type("Goku");
        cy.get('input[name="description"]').type("Figurine");
        cy.get('input[name="price"]').type("50");
        cy.get('input[name="category"]').type("1");
        cy.get('input[name="picture"]').type("https://i.gyazo.com/93842595d047a60896ad7f8bb77aa8fa.png");
        
        cy.contains('Save').click();
    })
})

context('CreateItem', () => {
    it('Creates an item', () => {
        cy.visit('http://localhost:4200/items');

        cy.contains('Add item').click();
        cy.get('input[name="title"]').type("Kakashi");
        cy.get('input[name="description"]').type("Figurine");
        cy.get('input[name="price"]').type("70");
        cy.get('input[name="category"]').type("2");
        cy.get('input[name="picture"]').type("https://i.gyazo.com/c7f59b42c74ad1a22e9c10ef17b14457.png");
        
        cy.contains('Save').click();
    })
})