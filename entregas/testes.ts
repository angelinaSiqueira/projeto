import { Cliente } from "./Cliente";
import { Corrente } from "./Corrente";
import { Poupanca } from "./Poupanca"

const cliente1 = new Cliente("Gabriella", 1, "Rua 7 de Setembro, 231", "(47) 99751-2407", 1000000)
const cliente2 = new Cliente("Larissa", 2, "sdhawhdwhed", "999999", 0)
const cliente3 = new Cliente("Guilherme", 3, "hashdjwha", "888888", 40000)

if(cliente1.rendaSalarial>500){
    const corrente1 = new Corrente(111, cliente1, 7000000);
}

if(cliente2.rendaSalarial>500){
    const corrente2 = new Corrente(112, cliente2, 0);
}

const poupanca = new Poupanca(112, cliente3, 9);