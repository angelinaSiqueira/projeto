import { IConta } from "./IConta";

class Poupanca implements IConta {
    saldo : number;
    taxajuros : number;


    constructor (saldo : number, taxajuros : number) {
        this.taxajuros = taxajuros;
        this.saldo = saldo;

}
    deposito(): void {
        throw new Error("Method not implemented.");
    }
    saque(): void {
        throw new Error("Method not implemented.");
    }
    trnsferencia(): void {
        throw new Error("Method not implemented.");
    }
    verificarsaldo(): void {
        throw new Error("Method not implemented.");
    }


    exibir(): void {
        console.log `saldo: ${this.saldo}, taxa de juros ${this.taxajuros}`    }
    

    }




