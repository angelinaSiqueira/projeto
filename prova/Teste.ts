import { Cliente } from "./Cliente";
import { contaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupança";


export class BancoTeste {
  executarTestes(): void {

  
    // Operações de depósito
    contaCorrente.depositar(500);
    ContaPoupanca.depositar(1000);

    // Operações de saque
    const saqueCC = contaCorrente.sacar(600); // 
    const saqueCP = ContaPoupanca.sacar(200);

    // Juros na poupança
    ContaPoupanca.calcularJuros();

    console.log("\n Saldos finais:");
    console.log("Conta Corrente:", contaCorrente.consultarSaldo());
    console.log("Conta Poupança:", ContaPoupanca.consultarSaldo());
  }
}
