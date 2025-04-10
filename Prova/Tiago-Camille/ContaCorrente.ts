import { Cliente } from "./Cliente";
import { IConta } from "./IConta";

export class ContaCorrente implements IConta {
    saldo: number;
    limite: number;
    cliente: Cliente;

    constructor(saldo: number, cliente: Cliente) {
        this.saldo = saldo;
        this.limite = 100;
        this.cliente = cliente;
    }

    saque(valor: number): void {
        if (this.saldo >= valor || this.saldo - valor > this.limite) {
            this.saldo = - valor;
        } else {
            console.log("saldo indisponivel");
        }

    }
    deposito(valor: number): void {
        this.saldo = + valor;
    }

    trasferencia(valor: number, conta: IConta): void {
        if (this.saldo >= valor || this.saldo - valor > this.limite) {
            this.saldo = -valor;
            conta.saldo = + valor;
        } else {
            console.log("saldo indisponivel");
        }
    }

    exibirSaldo(): void {
        console.log(`o saldo é: ${this.saldo}`)
    }

}