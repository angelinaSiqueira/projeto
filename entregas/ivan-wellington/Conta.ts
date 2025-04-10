import { Cliente } from "./Cliente";

class Conta implements Cliente {
    nome: string;
    id: number;
    endereco: string;
    numeroTelefone: number;
    renda: number;
    TaxaJuros: number
    tipoConta: string
    saldo: number

    constructor(nome: string, id: number, endereco: string, numeroTelefone: number, renda: number , saldo :number) {
        this.nome = nome
        this.id = id
        this.endereco = endereco
        this.numeroTelefone = numeroTelefone
        this.renda = renda
        this.tipoConta = ""
        this.TaxaJuros = 0
        this.saldo = saldo
    }

    contaCorrente() {
        if (this.renda >= 500) {
            this.tipoConta = "corrente"

        } else {
            console.log("renda insuficinte para criar uma conta corrente")
        }
    }

    calcularJuros(valorTaxa: number) {
        this.TaxaJuros = valorTaxa
    }

    contaPoupanca() {
        if (this.tipoConta != "corrente") {
            console.log("conta poupanca criada")
        }else{
            console.log("sua conta e corrente")
        }
    }

    depositar(valor:number){
        this.saldo += valor
    }

    saque(valor:number){
        this.saldo -= valor
    }

    transferencia(valor:number){
        this.saldo -= valor
        console.log("tranferencia concluida")
    }

    verificarSaldo(){
        console.log(this.saldo)
    }
}

const teste = new Conta("ivan", 1235, "rua 123", 124535672, 346235, 12435 )
teste.calcularJuros(0.2)
teste.contaCorrente()
teste.contaPoupanca()
teste.depositar(52348759)
teste.saque(1245)
teste.transferencia(45325)
teste.verificarSaldo()

