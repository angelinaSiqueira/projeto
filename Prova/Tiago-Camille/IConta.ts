import { Cliente } from "./Cliente";

export interface IConta {
    saldo: number;
    cliente: Cliente;

    saque(valor: number): void;
    deposito(valor: number): void;
    trasferencia(valor: number, conta: IConta): void;
    exibirSaldo(): void;

}