import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export interface IConta {
    numero: number;
    cliente: Cliente;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): boolean;
    transferir(destino: Conta, valor: number): boolean;
    consultarSaldo(): number;
  }
