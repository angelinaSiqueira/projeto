import { Cliente } from "./Cliente";
import { IConta } from "./IConta";

export abstract class Conta implements IConta {
  numero!: number;
  cliente!: Cliente;
  saldo: number = 0;

  init(numero: number, cliente: Cliente) {
    this.numero = numero;
    this.cliente = cliente;
  }

  depositar(valor: number): void {
    if (valor > 0) this.saldo += valor;
  }

  sacar(valor: number): boolean {
    if (valor > 0 && this.saldo >= valor) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  transferir(destino: Conta, valor: number): boolean {
    if (this.sacar(valor)) {
      destino.depositar(valor);
      return true;
    }
    return false;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

