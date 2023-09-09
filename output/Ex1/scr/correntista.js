System.register([], function (exports_1, context_1) {
    "use strict";
    var Correntista;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Correntista = class Correntista {
                constructor(nome, cpf) {
                    this.nome = nome;
                    this.cpf = cpf;
                }
            };
            exports_1("Correntista", Correntista);
        }
    };
});
