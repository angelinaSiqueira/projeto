import { IConta } from "./IConta";

class Corrente implements IConta {

    limiteespecial : number;
    saldo : number;
    
    constructor (limiteespecial : number, saldo : number) {
        this.limiteespecial = limiteespecial;
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
        console.log `saldo: ${this.saldo}, limite especial ${this.limiteespecial}`    }
    }
   

    

