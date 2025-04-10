import { Cliente } from "./cliente";
import { contacorrente } from "./contacorrente"; 
import { contapoupanca } from "./contapoupanca";

const cliente1 = new Cliente(1, "Davi França", "Rua abc, 123", "(47)996132751", 1200);
const cliente2 = new Cliente(2, "Leandro Voigt", "Rua def, 321", "(47)988604778", 400);


const conta1 = new contacorrente(1001, 500);
const conta2 = new contapoupanca(2001, 300);


conta1.depositar(200);
conta1.sacar(50);
conta1.transferir(100, conta2);
conta2.calcularJuros();
