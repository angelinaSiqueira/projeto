import { ICliente } from "./ICliente";

export class Cliente implements ICliente{
    nome: string;
    id: number;
    endereco: string;
    numeroTelefone: string;
    rendaSalarial: number;
    
    constructor(nome:string, id:number, endereco:string, numero_telefone:string, renda_salarial:number){
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.numeroTelefone = numero_telefone;
        this.rendaSalarial = renda_salarial
    }
}
