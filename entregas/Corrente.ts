import { Cliente } from "./Cliente";
import { IConta } from "./IConta";

export class Corrente implements IConta{
    numeroConta: number;
    cliente: Cliente;
    saldo: number;

    depositar(valor:number): void {
        this.saldo+=valor;
    }

    sacar(valor:number): void {
        if(this.saldo > valor){
            this.saldo-=valor;
        }else{
            console.log("não foi possíel realizar saque, não há saldo suficiente")
        }
    }

    transferir(valor: number, contaDestino:IConta) {
        if(this.saldo > valor){
            this.saldo-=valor;
            contaDestino.saldo+=valor;
        }else{
            console.log("não foi possíel realizar saque, não há saldo suficiente")
        }
    }

    verificarSaldo(): void {
        throw new Error("Method not implemented.");
    }

    constructor(numero_conta:number, cliente:Cliente, saldo:number){
        this.numeroConta = numero_conta;
        this.cliente = cliente;
        this.saldo = saldo;
    }
    
}