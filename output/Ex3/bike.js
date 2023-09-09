System.register([], function (exports_1, context_1) {
    "use strict";
    var Bike;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Bike = class Bike {
                constructor(name, type, bodySize, maxLoad, rate, description, ratings, imageUrls, id) {
                    this.name = name;
                    this.type = type;
                    this.bodySize = bodySize;
                    this.maxLoad = maxLoad;
                    this.rate = rate;
                    this.description = description;
                    this.ratings = ratings;
                    this.imageUrls = imageUrls;
                    this.id = id;
                }
            };
            exports_1("Bike", Bike);
        }
    };
});
