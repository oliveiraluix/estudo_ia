# 🧪 TESTE-IA

Projeto de estudos em automação de testes com **Cypress**, utilizando dados dinâmicos com **Faker.js** e apoio de **Inteligência Artificial** para acelerar o aprendizado.

---

## 📌 Sobre o projeto

Este repositório reúne automações básicas desenvolvidas com fins educacionais, cobrindo cenários comuns de testes end-to-end (E2E). O foco é consolidar boas práticas de escrita de testes, organização de projeto e uso de ferramentas modernas do ecossistema de QA.

---

## 🛠️ Tecnologias utilizadas

| Ferramenta | Finalidade |
|---|---|
| [Cypress](https://www.cypress.io/) | Framework principal de automação E2E |
| [@faker-js/faker](https://fakerjs.dev/) | Geração de dados dinâmicos e aleatórios |
| Node.js | Ambiente de execução |
| JavaScript | Linguagem dos testes |
| IA (Claude / ChatGPT) | Apoio na criação e revisão dos testes |

---

## 📁 Estrutura do projeto

```
TESTE-CODEX/
├── cypress/
│   ├── e2e/                          # Arquivos de teste e features
│   │   ├── features/                 # Arquivos Gherkin (`.feature`)
│   │   │   ├── elements.feature      # Cenários BDD para Elements
│   │   │   └── forms.feature         # Cenários BDD para Forms
│   ├── fixtures/                     # Dados estáticos
│   │   ├── example.json
│   │   └── Teste.jpeg
│   ├── screenshots/                  # Capturas automáticas de falha
│   └── support/
│       ├── commands.js               # Comandos customizados
│       ├── e2e.js                    # Configurações globais
│       ├── faker.js                  # Setup e helpers do Faker
│       ├── step_definitions/         # Step definitions para BDD
│       │   └── steps.js
│       └── pages/                    # Page Objects
│           ├── ElementsPage.js
│           ├── FormsPage.js
│           └── HomePage.js
├── node_modules/
├── cypress.config.js                 # Configuração principal do Cypress
├── package-lock.json
└── package.json
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/teste-codex.git

# Acesse a pasta
cd teste-codex

# Instale as dependências
npm install
```

### Executando os testes

```bash
# Abre a interface gráfica do Cypress
npm run test:open

# Executa os testes em modo headless (terminal)
npm test
```

---

## 🎲 Uso do Faker.js

O Faker é utilizado para gerar dados aleatórios a cada execução, tornando os testes mais realistas e evitando conflitos com dados fixos.

**Exemplo de uso:**

```javascript
import { faker } from '@faker-js/faker/locale/pt_BR';

const usuario = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  telefone: faker.phone.number('(##) 9####-####'),
  senha: faker.internet.password({ length: 10 }),
};
```

---

## 🤖 IA como apoio nos estudos

A Inteligência Artificial foi utilizada como ferramenta de suporte ao longo do aprendizado, nos seguintes contextos:

- **Revisão de código** e sugestão de boas práticas
- **Explicação de conceitos** como asserções, comandos customizados e interceptação de requisições
- **Debugging assistido** para entender erros e comportamentos inesperados do Cypress

> ⚠️ Todo código gerado por IA foi revisado, testado e compreendido antes de ser incorporado ao projeto.

---

## 📚 Conteúdos cobertos

- [x] Configuração inicial do Cypress
- [x] Comandos básicos (`cy.visit`, `cy.get`, `cy.click`, `cy.type`)
- [x] Testes de elementos — textbox e checkbox
- [x] Testes de formulários
- [x] Geração de dados com Faker.js (`cypress/support/faker.js`)
- [x] Comandos customizados (`commands.js`)
- [x] Uso de fixtures (JSON e imagem)
- [ ] Interceptação de requisições com `cy.intercept()`
- [x] Page Object Model (POM)
- [x] Testes BDD com `feature` e `step definitions`
- [ ] Relatórios com Mochawesome

---

## 🧠 Aprendizados e observações

> Seção para registrar insights durante os estudos.

- O Cypress executa comandos de forma **assíncrona e encadeada** — não é necessário usar `async/await` na maioria dos casos.
- O `cy.get()` busca elementos no DOM; prefira seletores estáveis como `data-cy` em vez de classes CSS.
- O Faker com locale `pt_BR` gera dados mais próximos da realidade brasileira.

---

## 📄 Licença

Projeto de uso educacional. Sem fins comerciais.

---

*Desenvolvido como parte de um processo contínuo de estudo em QA e automação de testes.*
