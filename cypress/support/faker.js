import { faker } from '@faker-js/faker'

export const gerarUsuario = () => ({
  nome: faker.person.firstName(),
  sobrenome: faker.person.lastName(),
  email: faker.internet.email(),
  nomeCompleto: faker.person.fullName(),
})

export const gerarTelefone = () => ({
  numero: faker.string.numeric(10),
})

export const gerarData = () => {
  const data = faker.date.birthdate()

  return {
    dia: data.getDate(),
    mes: data.toLocaleString('en-US', { month: 'long' }),
    ano: data.getFullYear(),
  }
}

export const gerarMateria = () => {
  const materias = ['Maths', 'Physics', 'Chemistry', 'Biology', 'English', 'History']

  return {
    materia: faker.helpers.arrayElement(materias),
  }
}

export const gerarEnderecos = () => ({
  endereco1: faker.location.streetAddress(),
  endereco2: faker.location.streetAddress(),
  endereco3: faker.location.streetAddress(),
})

export const gerarIdade = () => ({
  idade: faker.number.int({ min: 18, max: 60 }),
})

export const gerarSalario = () => ({
  salario: faker.number.int({ min: 30000, max: 150000 }),
})

export const gerarDeptamento = () => {
  const departamentos = ['Engineering', 'Human Resources', 'Marketing', 'Sales', 'Finance']

  return {
    departamento: faker.helpers.arrayElement(departamentos),
  }
}