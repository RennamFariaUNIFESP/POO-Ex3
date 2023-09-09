System.register(["bcrypt"], function (exports_1, context_1) {
    "use strict";
    var bcrypt_1, password, hash;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (bcrypt_1_1) {
                bcrypt_1 = bcrypt_1_1;
            }
        ],
        execute: async function () {
            password = 'Passoword1';
            hash = await bcrypt_1.default.hash(password, 10);
            //const isMatch = bcrypt.compare("Pass", hash)
            console.log(hash);
        }
    };
});
