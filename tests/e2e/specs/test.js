// https://docs.cypress.io/api/introduction/api.html

function setup (cy) {
  cy.visit('/')
  cy.get('[data-test="input-add"]').type('Criar Lista{enter}')
  cy.get('[data-test="input-add"]').type('Executar a Lista{enter}')
  cy.get('[data-test="input-add"]').type('Finalizar a Lista{enter}')
}

describe('Todolist', () => {
  describe('Add Item', () => {
    it('Adds a item on todolist', () => {
      cy.visit('/')
      cy.get('[data-test="input-add"]').type('Primeira Tarefa{enter}')
      cy.get('[data-test="todo-list"]').contains('Primeira Tarefa')
    })

    it('Clear the input', () => {
      cy.visit('/')
      cy.get('[data-test="input-add"]').type('Primeira Tarefa{enter}')
      cy.get('[data-test="input-add"]').should('have.value', '')
    })
  })

  describe('check item', () => {
    it('Move item to list below', () => {
      setup(cy)

      cy.get('[data-test="todo-list"] li:nth-child(2) [type=checkbox]')
        .click()

      cy.get('[data-test="done-list"] li')
        .should('have.length', 1)
    })

    it('Remove item from todo list', () => {
      setup(cy)

      cy.get('[data-test="todo-list"] li:nth-child(2) [type=checkbox]')
        .click()

      cy.get('[data-test="todo-list"] li')
        .should('have.length', 2)
    })
  })
})
