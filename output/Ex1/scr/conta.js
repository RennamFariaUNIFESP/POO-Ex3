System.register([], function (exports_1, context_1) {
    "use strict";
    var Conta;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Conta = class Conta {
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
            };
            exports_1("Conta", Conta);
        }
    };
});
