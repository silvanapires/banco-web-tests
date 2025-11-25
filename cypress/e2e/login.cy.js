const { beforeEach } = require("mocha")

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  })
  
  
  it('Login com dados válidos deve permitir a entrada no sistema', () => {
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos não deve permitir a entrada no sistema', () => {
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('15689')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no Login.Tente novamente.')
  })
})