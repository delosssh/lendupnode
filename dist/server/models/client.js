"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var clientSchema = new mongoose.Schema({
    username: String,
    clientNumber: String,
    firstName: String,
    middleName: String,
    lastName: String,
    surName: String,
    gender: String,
    mobilePhone: String,
    emailAddress: String,
    birthdate: Date,
    address1: String,
    address2: String,
    zoneName: String,
    barangayName: String,
    cityName: String,
    provinceName: String,
    locationMap: String,
    employment: String,
    businessName: String,
    businessAddress: String,
    businessPhone: String,
    businessJobTitle: String,
    grossMonthlyIncome: Number,
    businessJoiningDate: Date,
    businessPayDate1: Date,
    businessPayDate2: Date,
    lastUpdate: Date,
    creationDate: Date
});
var Client = mongoose.model('Client', clientSchema);
exports.default = Client;
//# sourceMappingURL=client.js.map