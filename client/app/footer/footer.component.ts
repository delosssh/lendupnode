import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor (
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

}