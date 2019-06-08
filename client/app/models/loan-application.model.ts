import { BaseModel } from './base.model';

export class LoanApplicationModel {
  applicationId: String;
  idType: String;
  idNumber: String;
  firstName: String;
  middleName: String;
  lastName: String;
  birthDate: Date;
  gender: String;
  suffix: String;
  emailAddress: String;
  mobileNumber: String;
  facebookHandle: String;
  twitterHandle: String;
  instagramHandle: String;
  provinceName: String;
  cityName: String;
  streetAddress: String;
  streetAddress2: String;
  barangayName: String;
  occupationId: String;
  apartmentName: String;

  companyName: String;
  companyPhone: String;
  employmentStatus: String;
  monthlyIncome: number;
  incomePayment: String;
  nextDateOfIncome: Date;

  coworker1Name: String;
  coworker1MobilePhone: String;
  coworker2Name: String;
  coworker2MobilePhone: String;

  relative1Name: String;
  relative1MobilePhone: String;
  relative2Name: String;
  relative2MobilePhone: String;

  amountToBorrow: number;
  durationInMonths: number;

  years: String;
  business: String;
  phoneNumber: String;
  subdivisionName: String;
  zoneName: String;
  loanCollateral: String;
  paymentTerm: String;
  submittedId: String;
  facebookAccount: String;
  instagramAccount: String;
  twitterAccount: String;
  photo: String;
  applicationDate: Date;
  creationDate: Date;
  lastUpdate: Date;

}