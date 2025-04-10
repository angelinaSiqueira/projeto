import { ICliente } from "./ICliente";

export class Cliente implements ICliente {
    nome: string;
    numeroid: number;
    endereco: string;
    telefone: string;
    rendasal: number;

    constructor(nome: string, numeroid: number, endereco: string, telefone: string, rendasal: number) {
        this.nome = nome;
        this.numeroid = numeroid;
        this.endereco = endereco;
        this.telefone = telefone;
        this.rendasal = rendasal;
    }



}