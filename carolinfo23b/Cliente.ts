import { ICliente } from "./ICliente";

class Cliente implements ICliente {

    nome: string;
    id: number;
    endereco: number;
    telefone: number;
    renda: number;

    constructor(nome: string,  id: number,    endereco: number,    telefone: number,    renda: number) {
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.renda = renda;

    }

    exibir(): void {
        console.log`nome ${this.nome}, endereço ${this.endereco}, telefone: ${this.telefone}, renda: ${this.renda}`
    }

} 

//