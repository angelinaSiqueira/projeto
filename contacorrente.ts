import { conta } from "./conta";
import { IConta } from "./IConta";

export class contacorrente implements conta {
    
    private limiteChequeEspecial: number = 100;
    saldo: number = 0;

    constructor(limiteChequeEspecial: number = 100, saldo: number = 0){
        this.limiteChequeEspecial = limiteChequeEspecial;
        this.saldo = saldo
    }
    


    depositar(valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(valor: number, contaDestino: IConta): boolean {
        throw new Error("Method not implemented.");
    }
    verificarSaldo(): number {
        throw new Error("Method not implemented.");
    }
   
    
    sacar(valor: number): boolean {
        if (valor > this.saldo + this.limiteChequeEspecial) {
            console.log("Saldo insuficiente, mesmo considerando o cheque especial.");
            return false;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        return true;
    }
}



