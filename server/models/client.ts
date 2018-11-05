import * as mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
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

const Client = mongoose.model('Client', clientSchema);

export default Client;
