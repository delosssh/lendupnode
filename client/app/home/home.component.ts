import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

import { LoanApplicationModel } from '../models/loan-application.model';

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

}