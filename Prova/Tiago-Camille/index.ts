import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";


const cliente2 = new Cliente("Tiago", 222, "minha casa", "444", 400)
const cliente = new Cliente("Angelina", 123, "ifc", "23444", 1000000000000000000000);

if (cliente.rendasal >= 500) {
    const conta = new ContaCorrente(2, cliente);
}
const contap1 = new ContaPoupanca(3, cliente, 50);
const contap2 = new ContaPoupanca(0, cliente2, 4);

contap1.calcTaxa;
contap1.deposito(10000000);
contap1.saque(3);
contap1.trasferencia(300000000, contap2);




