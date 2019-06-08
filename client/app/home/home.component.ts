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
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('hardwareVideo') hardwareVideo: any;
  @ViewChild('canvasser') canvasVideo: any;

  loginForm: FormGroup;
  email = new FormControl('', [Validators.required,
                               Validators.minLength(3),
                               Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required,
                                  Validators.minLength(6)]);

  loanApplication: LoanApplicationModel;

  occupation: String = "";

  constructor (
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private loanApplicationService: LoanApplicationService,
    public toast: ToastComponent,
  ) {
    this.loanApplication = new LoanApplicationModel();
  }

  ngOnInit() {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });

    this.calculateMonthlyPayment();
  }

  // occupationSelfEmployed() {
  //   console.log(this.occupation);
  //   if (this.occupation == "self-employed") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  get isOccupationSelfEmployed() {
    return this.occupation == "self-employed";
  }

  test() {
    console.log(this.occupation);
    console.log(this.occupation == "self-employed");
    // console.log(this.occupationSelfEmployed());
  }

  videoStart(){
    let video = this.hardwareVideo.nativeElement;

    var n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
    
    // NOTE: For Video + Audio
    // n.mediaDevices.getUserMedia({video: true, audio: true}).then(function(stream) {
    //     video.src = window.URL.createObjectURL(stream);
    //     video.play();
    // });
  }

  snapshot() {
    let canvas = this.canvasVideo.nativeElement;
    let video = this.hardwareVideo.nativeElement;
    let context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, 640, 480);
  }


  login() {
    this.auth.login(this.loginForm.value).subscribe(
      res => this.router.navigate(['/client-list']),
      error => this.toast.setMessage('invalid email or password!', 'danger')
    );
  }

//   onChangeSlider(slider: MatSlider | null) {
// // console.log(value.value);
// // console.log(value.source.displayValue);
//     var value;

//     if (!slider) {
//       return 0;
//     }

//     value = slider.value;
// console.log(value);
// // console.log(value >= 1000);

//     if (value >= 1000) {
//       this.sliderValue = Math.round(value / 1000) + 'K';
//     } else {

//     }

// //     return value;
//     this.sliderValue = '100000';
//   }

  monthlyPayment = 0;

  loanAmount = 1000;
  loanSlider = (value: number | null) => {

    if (!value) {
      this.calculateMonthlyPayment();
      this.loanAmount = 1000;
      return 1000;
    }

    this.loanAmount = value;

    this.calculateMonthlyPayment();

    // interest = this.duration * 0.05;
    // interestAmount = this.loanAmount * interest;
    // payableAmount = this.loanAmount + interestAmount;

    // this.monthlyPayment = payableAmount / this.duration;

    if (value >= 1000) {
      return Math.round (value / 1000) + 'k';
    }

    return value;
  }

  duration = 1;
  durationSlider = (value: number | null) => {
    if (!value) {     
      this.calculateMonthlyPayment();

      return 1;
    }

    this.duration = value;

    this.calculateMonthlyPayment();

    return value;
  }

  calculateMonthlyPayment () {
    var interest: number;
    var interestAmount: number;
    var payableAmount: number;

    interest = this.duration * 0.05;
    interestAmount = this.loanAmount * interest;
    payableAmount = this.loanAmount + interestAmount;

    this.monthlyPayment = payableAmount / this.duration;

    this.loanApplication.amountToBorrow = this.loanAmount;
    this.loanApplication.durationInMonths = this.duration;

  }

  // formatLabel() {
  //   console.log(this.sliderValue);
  //   return '1K';
  // }

  showLoanApplicationForm() {
    this.loanApplicationService.setData(this.loanApplication);
    this.router.navigate(['loan-application-form']);

  }

}