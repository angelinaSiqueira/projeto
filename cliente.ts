import { ICliente } from "./ICliente";


export class Cliente implements ICliente{
    constructor(
        public id: number,
        public nome: string,
        public endereco: string,
        public telefone: string,
        public renda: number
    ){}
}
