import { Cliente } from "./Cliente";
import { IConta } from "./IConta";

export class Poupanca implements IConta{
    numeroConta: number;
    cliente: Cliente;
    saldo: number;
    taxaJuros: number;

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

    transferir(valor:number, contaDestino:IConta): void {
        if(this.saldo > valor){
            this.saldo-=valor;
            contaDestino.saldo+=valor;
        }else{
            console.log("não foi possíel realizar saque, não há saldo suficiente")
        }
    }

    calcularTaxa(){
        this.saldo = this.saldo + (this.saldo*0.05);
    }

    verificarSaldo(): void {
        console.log("seu saldo é:");
    }

    constructor(numero_conta:number, cliente:Cliente, saldo:number, taxa_juros:number){
        this.numeroConta = numero_conta;
        this.cliente = cliente;
        this.saldo = saldo;
        this.taxaJuros = taxa_juros;
    }
}