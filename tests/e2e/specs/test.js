// https://docs.cypress.io/api/introduction/api.html

describe('Todolist', () => {
  it('Adds a item on todolist', () => {
    cy.visit('/')
    cy.get('[data-test="input-add"]').type('Primeira Tarefa{enter}')
    cy.get('[data-test="todo-list"]').contains('Primeira Tarefa')
  })
})
