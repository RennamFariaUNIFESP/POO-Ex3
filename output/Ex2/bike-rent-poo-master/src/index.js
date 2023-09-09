System.register(["./app", "./bike", "./rent", "./user"], function (exports_1, context_1) {
    "use strict";
    var app_1, bike_1, rent_1, user_1, bike, user, today, twoDaysFromToday, tomorrow, sevenDaysFromToday, rent1, user2, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (bike_1_1) {
                bike_1 = bike_1_1;
            },
            function (rent_1_1) {
                rent_1 = rent_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }
        ],
        execute: function () {
            bike = new bike_1.Bike('mountain bike', 'mountain', 123, 500, 100.5, 'desc', 5, []);
            user = new user_1.User('Maria', 'maria@mail.com', '1234');
            today = new Date();
            twoDaysFromToday = new Date();
            twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2);
            tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            sevenDaysFromToday = new Date();
            sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7);
            rent1 = rent_1.Rent.create([], bike, user, today, twoDaysFromToday);
            user2 = new user_1.User('Maria Clara', 'maria@mail.com', '3123');
            app = new app_1.App();
            app.registerUser(user);
            console.log(app.findUser('maria@mail.com'));
        }
    };
});
