import { BaseModel } from './base.model';

export class ClientModel extends BaseModel {
  username: String = "";
  clientNumber: String = '';
  firstName: String = '';
  middleName: String = '';
  lastName: String = '';
  surName: String = '';
  gender: String = '';
  mobilePhone: String = '';
  emailAddress: String = '';
  birthdate: Date = new Date();
  address1: String = '';
  address2: String = '';
  zoneName: String = '';
  barangayName: String = '';
  cityName: String = '';
  provinceName: String = '';
  locationMap: String = '';
  employment: String = '';
  businessName: String = '';
  businessAddress: String = '';
  businessPhone: String = '';
  businessJobTitle: String = '';
  grossMonthlyIncome: Number = 0;
  businessJoiningDate: Date = new Date();
  businessPayDate1: Date = new Date();
  businessPayDate2: Date = new Date();
  lastUpdate: Date = new Date();
  creationDate: Date = new Date();
  loans: Number = 0;
}