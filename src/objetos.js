// Easter Egg 

const PRINCESAS_DISNEY = [
    'ariel', 'aurora', 'bela', 'branca de neve', 'cinderela',
    'jasmine', 'pocahontas', 'mulan', 'tiana', 'rapunzel',
    'merida', 'elsa', 'anna', 'moana'
]

function contemPrincesaDisney(texto) {
    const textoNormalizado = String(texto).toLowerCase()
    for (let i = 0; i < PRINCESAS_DISNEY.length; i++) {
        if (textoNormalizado.includes(PRINCESAS_DISNEY[i])) {
            return true
        }
    }
    return false
}

function easterEggPrincesa(origem, valor) {
    if (contemPrincesaDisney(valor)) {
        console.log('✨ ' + origem + ' bateu com uma princesa Disney: "' + valor + '" 👑')
    }
}


// Telefone

export class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    getDddMaiusculo() { return this.ddd.toUpperCase() }
    getDddMinusculo() { return this.ddd.toLowerCase() }
    getNumeroMaiusculo() { return this.numero.toUpperCase() }
    getNumeroMinusculo() { return this.numero.toLowerCase() }
}


// Endereco

export class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero

        easterEggPrincesa('Endereço (cidade)', cidade)
        easterEggPrincesa('Endereço (rua)', rua)
    }

    getEstadoMaiusculo() { return this.estado.toUpperCase() }
    getEstadoMinusculo() { return this.estado.toLowerCase() }
    getCidadeMaiusculo() { return this.cidade.toUpperCase() }
    getCidadeMinusculo() { return this.cidade.toLowerCase() }
    getRuaMaiusculo() { return this.rua.toUpperCase() }
    getRuaMinusculo() { return this.rua.toLowerCase() }
    getNumeroMaiusculo() { return this.numero.toUpperCase() }
    getNumeroMinusculo() { return this.numero.toLowerCase() }
}


// Cliente

export class Cliente {
    #cpf

    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf

        easterEggPrincesa('Cliente', nome)
    }

    getCpf() { return this.#cpf }
    getCpfMaiusculo() { return this.#cpf.toUpperCase() }
    getCpfMinusculo() { return this.#cpf.toLowerCase() }

    getNomeMaiusculo() { return this.nome.toUpperCase() }
    getNomeMinusculo() { return this.nome.toLowerCase() }

    detalhe() {
        let linhas = []
        linhas.push('Nome: ' + this.nome)
        linhas.push(
            'Estado: ' + this.endereco.estado +
            ' cidade: ' + this.endereco.cidade +
            ' rua: ' + this.endereco.rua +
            ' numero: ' + this.endereco.numero
        )
        this.telefones.forEach(function (telefone) {
            linhas.push('ddd: ' + telefone.ddd + ' numero: ' + telefone.numero)
        })
        return linhas.join('\n')
    }
}


// Empresa

export class Empresa {
    #cnpj

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()

        easterEggPrincesa('Empresa (razão social)', razaoSocial)
        easterEggPrincesa('Empresa (nome fantasia)', nomeFantasia)
    }

    getCnpj() { return this.#cnpj }
    getCnpjMaiusculo() { return this.#cnpj.toUpperCase() }
    getCnpjMinusculo() { return this.#cnpj.toLowerCase() }

    getRazaoSocialMaiusculo() { return this.razaoSocial.toUpperCase() }
    getRazaoSocialMinusculo() { return this.razaoSocial.toLowerCase() }
    getNomeFantasiaMaiusculo() { return this.nomeFantasia.toUpperCase() }
    getNomeFantasiaMinusculo() { return this.nomeFantasia.toLowerCase() }

    detalhe() {
        let linhas = []
        linhas.push('Razão Social: ' + this.razaoSocial)
        linhas.push('Nome fantasia: ' + this.nomeFantasia)
        linhas.push('----------------')

        let blocos = []
        this.clientes.forEach(function (cliente) {
            blocos.push(cliente.detalhe())
        })
        linhas.push(blocos.join('\n\n'))

        return linhas.join('\n')
    }
}