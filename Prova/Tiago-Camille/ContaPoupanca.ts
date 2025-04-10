import { Cliente } from "./Cliente";
import { IConta } from "./IConta";

export class ContaPoupanca implements IConta {
    saldo: number;
    cliente: Cliente;
    taxa: number;

    constructor(saldo: number, cliente: Cliente, taxa: number) {
        this.saldo = saldo;
        this.cliente = cliente;
        this.taxa = taxa; //em porcentagem ne
    }

    saque(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo = - valor;
        } else {
            console.log("saldo indisponivel")
        }
    }
    deposito(valor: number): void {
        this.saldo = + valor;
    }

    trasferencia(valor: number, conta: IConta): void {
        if (this.saldo >= valor) {
            this.saldo = -valor;
            conta.saldo = + valor;
        } else {
            console.log("saldo indisponivel")
        }
    }
    calcTaxa(): void {
        this.saldo = + (this.taxa / 100) * this.saldo;
    }

    exibirSaldo(): void {
        console.log(`o saldo é: ${this.saldo}`)
    }


}