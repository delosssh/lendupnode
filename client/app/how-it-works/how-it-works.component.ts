import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { LoanApplicationService } from '../services/loan-application.service';
import { ToastComponent } from '../shared/toast/toast.component';

import { LoanApplicationModel } from '../models/loan-application.model';
import { MatSliderChange, MatSlider } from '@angular/material';

import { LoanApplicationFormComponent } from '../loan-application-form/loan-application-form.component';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent {

  constructor (
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  showHome() {
    this.router.navigate(['/']);
  }

}