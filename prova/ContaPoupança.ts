import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { contaCorrente } from "./ContaCorrente";



export class ContaPoupanca implements Conta {
  static transferir(contaCorrente: contaCorrente, arg1: number) {
      throw new Error("Method not implemented.");
  }
  static consultarSaldo(): any {
      throw new Error("Method not implemented.");
  }
  static calcularJuros() {
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
  this.numero = numero
  this.cliente = cliente
  this.saldo = saldo
  }
  init(numero: number, cliente: Cliente): void {
    throw new Error("Method not implemented.");
  }

  depositar(valor: number): void {
    throw new Error("Method not implemented.");
  }
  sacar(valor: number): boolean {
    throw new Error("Method not implemented.");
  }
  transferir(destino: Conta, valor: number): boolean {
    throw new Error("Method not implemented.");
  }
  consultarSaldo(): number {
    throw new Error("Method not implemented.");
  }
  private taxaJuros: number = 0;

  calcularJuros(): void {
    const rendimento = this.saldo * this.taxaJuros;
    this.saldo += rendimento;
  }
}
