import { Cliente } from "./Cliente";

export interface IConta{
    numeroConta: number;
    cliente: Cliente;
    saldo: number;
    depositar(valor:number):void;
    sacar(valor:number):void;
    transferir(valor:number, contaDestino:IConta):void;
    verificarSaldo():void;
}