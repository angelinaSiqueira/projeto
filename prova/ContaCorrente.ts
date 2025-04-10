
import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class contaCorrente implements Conta {
    static consultarSaldo(): any {
        throw new Error("Method not implemented.");
    }
    static sacar(arg0: number) {
        throw new Error("Method not implemented.");
    }
    static depositar(arg0: number) {
        throw new Error("Method not implemented.");
    }
  numero: number;
  cliente: Cliente;
  saldo: number;

constructor(numero:number,cliente:Cliente,saldo:number){
this.cliente = cliente
this.numero = numero
this.saldo = saldo
}
  init(numero: number, cliente: Cliente): void {
    throw new Error("Method not implemented.");
  }

  
  depositar(valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(destino: Conta, valor: number): boolean {
    throw new Error("Method not implemented.");
  }
  consultarSaldo(): number {
    throw new Error("Method not implemented.");
  }
  private limiteChequeEspecial: number = 100;

  sacar(valor: number): boolean {
    if (valor > 0 && this.saldo + this.limiteChequeEspecial >= valor) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }
}
