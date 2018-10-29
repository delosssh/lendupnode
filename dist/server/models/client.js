"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var clientSchema = new mongoose.Schema({
    clientNumber: String,
    firstName: String,
    middleName: String,
    lastName: String,
    surName: String,
    birthdate: Date,
    address1: String,
    address2: String,
    zoneName: String,
    barangayName: String,
    cityName: String,
    provinceName: String,
    lastUpdate: Date,
    creationDate: Date
});
var Client = mongoose.model('Client', clientSchema);
exports.default = Client;
//# sourceMappingURL=client.js.map