"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, dono) {
        this._saldo = 0.0;
        this.numero = numero;
        this.dono = dono;
    }
    credita(quantia) {
        this._saldo += quantia;
    }
    debita(quantia) {
        this._saldo -= quantia;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        if (saldo >= 0)
            this._saldo = saldo;
    }
}
exports.Conta = Conta;
