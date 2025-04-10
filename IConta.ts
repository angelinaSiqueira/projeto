export interface IConta {
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): boolean;
    transferir(valor: number, contaDestino: IConta): boolean;
    verificarSaldo(): number;
}