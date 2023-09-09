System.register(["./rent", "crypto", "bcrypt"], function (exports_1, context_1) {
    "use strict";
    var rent_1, crypto_1, bcrypt_1, App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rent_1_1) {
                rent_1 = rent_1_1;
            },
            function (crypto_1_1) {
                crypto_1 = crypto_1_1;
            },
            function (bcrypt_1_1) {
                bcrypt_1 = bcrypt_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    this.users = [];
                    this.bikes = [];
                    this.rents = [];
                }
                listUser() {
                    this.users.forEach(user => {
                        console.log(user.name);
                        console.log(user.email);
                        console.log(user.password);
                        console.log(user.id);
                    });
                }
                listRent() {
                    this.rents.forEach(rent => { console.log(rent); });
                }
                listBikes() {
                    this.bikes.forEach(bike => { console.log(bike); });
                }
                autentifyUser(userId, password) {
                    try {
                        const Hash = this.users.find(user => user.id === userId);
                        if ((bcrypt_1.default.compareSync(password, Hash.password) === true)) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    catch (Error) {
                        throw new Error('User ID is wrong or does not exist');
                    }
                }
                findUser(email) {
                    return this.users.find(user => user.email === email);
                }
                async registerUser(user) {
                    for (const rUser of this.users) {
                        if (rUser.email === user.email) {
                            throw new Error('Duplicate user.');
                        }
                    }
                    const newId = crypto_1.default.randomUUID();
                    user.id = newId;
                    const hash = await bcrypt_1.default.hash(user.password, 10);
                    console.log(hash);
                    user.password = hash;
                    this.users.push(user);
                    return newId;
                }
                registerBike(bike) {
                    const newId = crypto_1.default.randomUUID();
                    bike.id = newId;
                    this.bikes.push(bike);
                    return newId;
                }
                removeUser(email) {
                    const userIndex = this.users.findIndex(user => user.email === email);
                    if (userIndex !== -1) {
                        this.users.splice(userIndex, 1);
                        return;
                    }
                    throw new Error('User does not exist.');
                }
                rentBike(bikeId, userEmail, startDate, endDate) {
                    const bike = this.bikes.find(bike => bike.id === bikeId);
                    if (!bike) {
                        throw new Error('Bike not found.');
                    }
                    const user = this.findUser(userEmail);
                    if (!user) {
                        throw new Error('User not found.');
                    }
                    const bikeRents = this.rents.filter(rent => rent.bike.id === bikeId && !rent.dateReturned);
                    const newRent = rent_1.Rent.create(bikeRents, bike, user, startDate, endDate);
                    this.rents.push(newRent);
                }
                returnBike(bikeId, userEmail) {
                    const today = new Date();
                    const rent = this.rents.find(rent => rent.bike.id === bikeId &&
                        rent.user.email === userEmail &&
                        rent.dateReturned === undefined &&
                        rent.dateFrom <= today);
                    if (rent) {
                        rent.dateReturned = today;
                        return;
                    }
                    throw new Error('Rent not found.');
                }
            };
            exports_1("App", App);
        }
    };
});
