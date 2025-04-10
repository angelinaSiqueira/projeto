import { IConta } from "./IConta";

class Conta implements IConta{

    saldo: number;

constructor (saldo : number){
this.saldo =saldo;

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
        console.log `saldo: ${this.saldo}`    }
    

}