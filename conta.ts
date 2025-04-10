import { IConta } from "./IConta";


export class conta implements IConta{
    saldo: number;

    constructor(saldo: number = 0){
        this.saldo = saldo;
    }


    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`depósito de R$${valor} realizado. Novo saldo: R$${this.saldo} `);
    }

    sacar(valor: number): boolean {
        if (valor >this.saldo){
            console.log(`saldo insuficiente.`);
            return false;
        }
        this.saldo -= valor;
        console.log(`saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        return true;
    }


    transferir(valor: number, contaDestino: IConta): boolean {
    if( this.sacar(valor)){
        contaDestino.depositar(valor);
        console.log(`tranferencia de R$${valor} realizado com sucesso`);
        return true;
    }
    return false;
    }
    verificarSaldo(): number {
       return this.saldo;
    }
}




