import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';
// import { ToastComponent } from '../shared/toast/toast.component';
import { LoanApplicationService } from '../services/loan-application.service';

import { LoanApplicationModel } from '../models/loan-application.model';
import { MatSliderChange, MatSlider } from '@angular/material';

@Component({
  selector: 'loan-application-form-2',
  templateUrl: './loan-application-form-2.component.html',
  styleUrls: ['./loan-application-form-2.component.scss']
})
export class LoanApplicationForm2Component {

  // @ViewChild('privateEmployementBlock') privateEmployementBlock: any;

  // privateEmployementBlock: boolean = true;
  // selected: String = '';
  privateEmployeeBlock: String = "block";
  governmentEmployeeBlock: String = "none";
  freelanceBlock: String = "none";
  unemployedBlock: String = "none";
  callcenterBlock: String = "none";

  loanApplication: LoanApplicationModel;

  constructor (
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loanApplicationService: LoanApplicationService,
    // public toast: ToastComponent,
  ) {
    this.loanApplication = new LoanApplicationModel();
  }

  ngOnInit() {
    // if (this.auth.loggedIn) {
    //   this.router.navigate(['/']);
    // }
    // this.loginForm = this.formBuilder.group({
    //   email: this.email,
    //   password: this.password
    // });
    // this.privateEmployementBlock = true;
    this.loanApplication = this.loanApplicationService.getData();

    console.log('ngOnInit: ' + this.loanApplication.idType);
    console.log('ngOnInit: ' + this.loanApplication.idNumber);
  }

  // occupationSelfEmployed() {
  //   console.log(this.occupation);
  //   if (this.occupation == "self-employed") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  set setSelected(value) {
    console.log(value);

    // this.privateEmployementBlock = (value == "1") ? true : false;
    this.privateEmployeeBlock = (value == "3") ? "block" : "none";

    this.governmentEmployeeBlock = (value == "4") ? "block" : "none";

    this.freelanceBlock = ( value == "5" ) ? "block" : "none";

    this.unemployedBlock = ( value == "6" ) ? "block" : "none";

    this.callcenterBlock = ( value == "7" ) ? "block" : "none";
  }

  occupationOnChange = (value) => {
    // console.log('changed: ' + this.privateEmployementBlock);
    // this.privateEmployementBlock = !this.privateEmployementBlock;
  }

  nextPage() {
    this.loanApplicationService.setData(this.loanApplication);

    this.loanApplicationService.add(this.loanApplication)
      .subscribe(
        res => {
          console.log('loan application saved');
          this.router.navigate(['loan-application-form-3']);
        },
        error => console.log(error)
      )

    
  }

}