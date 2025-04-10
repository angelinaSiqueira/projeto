import { conta } from "./conta";
import { IConta } from "./IConta";

export class contapoupanca implements conta{
    saldo: number;
    taxajuros: number;

    constructor(saldo: number = 0, taxajuros: number){ 
        this.taxajuros = taxajuros;
        this.saldo = saldo;
    }

    
    depositar(valor: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(valor: number): boolean {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
            return false;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        return true;
    }
    
    transferir(valor: number, contaDestino: IConta): boolean {
        throw new Error("Method not implemented.");
    }
    verificarSaldo(): number {
        throw new Error("Method not implemented.");
    }


    calcularJuros(): void{
        const juros = this.saldo * this.taxajuros;
        this.saldo += juros;
        console.log(`juros de R$${juros} aplicados. Novo saldo: R$${this.saldo}`);
    }
}

