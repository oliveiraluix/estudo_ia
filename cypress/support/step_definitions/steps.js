import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../pages/HomePage';
import { FormsPage } from '../pages/FormsPage';
import { ElementsPage } from '../pages/ElementsPage';
import { gerarUsuario, gerarTelefone, gerarData, gerarMateria } from '../faker';

const home = new HomePage();
const forms = new FormsPage();
const elements = new ElementsPage();

Given('que acesso a página inicial', () => {
  home.visit();
});

When('navego até o formulário de prática', () => {
  home.goToForms();
});

When('preencho o formulário com dados válidos', () => {
  const usuario = gerarUsuario();
  const telefone = gerarTelefone();
  const data = gerarData();
  const materia = gerarMateria();

  forms.fillPracticeForm({
    nome: usuario.nome,
    sobrenome: usuario.sobrenome,
    email: usuario.email,
    telefone: telefone.numero,
    data,
    materia: materia.materia,
  });
});

When('envio o formulário', () => {
  forms.uploadPicture('Teste.jpeg');
  forms.submit();
});

Then('devo ver a mensagem de confirmação de envio', () => {
  forms.assertSubmissionModal();
  forms.takeScreenshot('Validacao-Formulario');
  forms.closeModal();
});

Then('retorno para a página inicial', () => {
  home.returnHome().assertHomeVisible();
});

When('navego até a seção Elements', () => {
  home.goToElements();
});

When('abro a tela de Check Box', () => {
  elements.openCheckboxPage();
});

When('seleciono a opção Desktop', () => {
  elements.expandTree();
  elements.selectDesktop();
});

When('abro a tela de Buttons', () => {
  elements.openButtonsPage();
});

When('executo os cliques duplo e direito', () => {
  elements.doubleClickButton();
  elements.rightClickButton();
});

Then('devo ver as mensagens de clique corretas', () => {
  elements.assertDoubleClickMessage();
  elements.assertRightClickMessage();
  cy.screenshot('Validacao-Buttons');
});

Then('devo ver os itens selecionados visíveis', () => {
  elements.assertSelectedValues(['desktop', 'notes', 'commands']);
  cy.screenshot('Validacao-CheckBox');
});
