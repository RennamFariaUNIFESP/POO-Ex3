System.register(["./app", "./bike", "./user"], function (exports_1, context_1) {
    "use strict";
    var app_1, bike_1, user_1, app, bike, bikeId, user1, user2, yesterday, today, tomorrow, dayAfterTomorrow, twoDaysFromToday;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (bike_1_1) {
                bike_1 = bike_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }
        ],
        execute: function () {
            app = new app_1.App();
            bike = new bike_1.Bike('caloi mountain', 'mountain bike', 100, 200, 150.5, 'My bike', 5, []);
            bikeId = app.registerBike(bike);
            console.log(app.bikes);
            user1 = new user_1.User('Jose', 'jose@mail.com', '1234');
            user2 = new user_1.User('Maria', 'maria@mail.com', '1234');
            app.registerUser(user1);
            app.registerUser(user2);
            yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            today = new Date();
            tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dayAfterTomorrow = new Date();
            dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
            twoDaysFromToday = new Date();
            twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 3);
            app.rentBike(bikeId, 'jose@mail.com', yesterday, today);
            console.log('Antes do retorno', app.rents);
            app.returnBike(bikeId, 'jose@mail.com');
            console.log('Depois do retorno', app.rents);
            app.listUser();
            app.listRent();
            app.listBikes();
        }
    };
});
