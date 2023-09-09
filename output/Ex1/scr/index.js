System.register(["./conta", "./correntista"], function (exports_1, context_1) {
    "use strict";
    var conta_1, correntista_1, joao, contaJoao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (conta_1_1) {
                conta_1 = conta_1_1;
            },
            function (correntista_1_1) {
                correntista_1 = correntista_1_1;
            }
        ],
        execute: function () {
            joao = new correntista_1.Correntista('Joao da Silva', '111222333-45');
            contaJoao = new conta_1.Conta('12345-67890', joao);
            contaJoao.credita(100.0);
            contaJoao.saldo = -10;
            console.log('Saldo do Joao = ', contaJoao.saldo);
            console.log(joao);
        }
    };
});
