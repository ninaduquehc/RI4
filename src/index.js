import { Cliente, Telefone, Endereco, Empresa } from './objetos.js'

// Empresa
let enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Av. Andrômeda', '100')
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '11.111.111/0001-11', enderecoEmpresa)

empresa.telefones.add(new Telefone('12', '32211100'))
empresa.telefones.add(new Telefone('12', '32211101'))

// Cliente 1
let cliente1 = new Cliente('João', '111.111.111-11', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '987'))
cliente1.telefones.add(new Telefone('12', '99999999'))
cliente1.telefones.add(new Telefone('12', '99999998'))
empresa.clientes.add(cliente1)

// Cliente 2
let cliente2 = new Cliente('Gabriel', '222.222.222-22', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '412'))
cliente2.telefones.add(new Telefone('12', '88888888'))
cliente2.telefones.add(new Telefone('12', '88888887'))
empresa.clientes.add(cliente2)

// Cliente 3
let cliente3 = new Cliente('Barbara', '333.333.333-33', new Endereco('SP', 'São José dos Campos', 'Av São João', '789'))
cliente3.telefones.add(new Telefone('12', '77777777'))
cliente3.telefones.add(new Telefone('12', '77777776'))
empresa.clientes.add(cliente3)

// Cliente 4
let cliente4 = new Cliente('Márcia', '444.444.444-44', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', '452'))
cliente4.telefones.add(new Telefone('12', '66666666'))
cliente4.telefones.add(new Telefone('12', '66666665'))
empresa.clientes.add(cliente4)

// Cliente 5 — dispara o easter egg de princesa (da minha favorita!) Disney no nome
let cliente5 = new Cliente('Rapunzel', '555.555.555-55', new Endereco('SP', 'São José dos Campos', 'Rua das Flores', '100'))
cliente5.telefones.add(new Telefone('12', '55555555'))
cliente5.telefones.add(new Telefone('12', '55555554'))
empresa.clientes.add(cliente5)

console.log(empresa.detalhe())