import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';
// import { ToastComponent } from '../shared/toast/toast.component';
import { LoanApplicationService } from '../services/loan-application.service';

import { LoanApplicationModel } from '../models/loan-application.model';
import { MatSliderChange, MatSlider } from '@angular/material';

@Component({
  selector: 'loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.scss']
})
export class LoanApplicationFormComponent {

  loanApplication: LoanApplicationModel;

  constructor (
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loanApplicationService: LoanApplicationService,
  ) {
    this.loanApplication = new LoanApplicationModel();
  }

  ngOnInit() {
    this.loanApplication = this.loanApplicationService.getData();

    console.log('loan-application-form: ' + this.loanApplication.amountToBorrow.toString());
  }


  nextPage() {
    this.loanApplicationService.setData(this.loanApplication);
    this.router.navigate(['loan-application-form-2']);
    
  }

}