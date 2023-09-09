"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const rent_1 = require("./rent");
const crypto_1 = __importDefault(require("crypto"));
class App {
    constructor() {
        this.users = [];
        this.bikes = [];
        this.rents = [];
    }
    // - listagem de reservas/aluguéis
    // - listagem de bikes
    listUser() {
        this.users.forEach(user => { console.log(user); });
    }
    listRent() {
        this.rents.forEach(rent => { console.log(rent); });
    }
    listBikes() {
        this.bikes.forEach(bike => { console.log(bike); });
    }
    findUser(email) {
        return this.users.find(user => user.email === email);
    }
    registerUser(user) {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.');
            }
        }
        const newId = crypto_1.default.randomUUID();
        user.id = newId;
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
}
exports.App = App;
