import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(
    private router: Router,
  ) { }


  showHome() {
    this.router.navigate(['/']);
  }

}
