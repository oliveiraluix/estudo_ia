Feature: Formulário de cadastro
  Como analista de QA
  Quero enviar o formulário Practice Form
  Para validar a funcionalidade de envio com dados reais

  Scenario: Preencher e enviar o formulário de Practice Form
    Given que acesso a página inicial
    When navego até o formulário de prática
    And preencho o formulário com dados válidos
    And envio o formulário
    Then devo ver a mensagem de confirmação de envio
    And retorno para a página inicial
