Feature: Seleção de Check Box
  Como analista de QA
  Quero marcar opções na página Check Box
  Para validar a seleção de itens no painel Elements

  Scenario: Selecionar Desktop no controle de árvore
    Given que acesso a página inicial
    When navego até a seção Elements
    And abro a tela de Check Box
    And seleciono a opção Desktop
    Then devo ver os itens selecionados visíveis

  Scenario: Validar botões Double Click e Right Click
    Given que acesso a página inicial
    When navego até a seção Elements
    And abro a tela de Buttons
    And executo os cliques duplo e direito
    Then devo ver as mensagens de clique corretas
