System.register([], function (exports_1, context_1) {
    "use strict";
    var User;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            User = class User {
                constructor(name, email, password, //salva como Hash
                id) {
                    this.name = name;
                    this.email = email;
                    this.password = password;
                    this.id = id;
                }
            };
            exports_1("User", User);
        }
    };
});
