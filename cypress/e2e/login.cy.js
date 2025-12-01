const { beforeEach } = require("mocha")

describe('Login', () => {
beforeEach(() => {
    cy.visit('/')
    cy.screenshot('apos-visitar-a-pagina-de-login-do-sistema')
  })

  it('Login com dados válidos deve permitir a entrada no sistema', () => {
    //Act

    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos não deve permitir a entrada no sistema', () => {
    //Act

    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })

    cy.screenshot('apos-preencher-os-dados-de-login')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})