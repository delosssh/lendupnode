import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { ClientService } from '../services/client.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
 
  client: ClientModel;

  public constructor (
    private auth: AuthService,
    private clientService: ClientService,
    private http: Http,
    private router: Router
  ) {
    this.client = new ClientModel();
    this.client.username = this.auth.currentUser.username;
  }

  save() {
    console.log(this.client.firstName);
    this.clientService.addClient(this.client)
      .subscribe(
        res => {
          console.log('new client was added');
          this.router.navigate(['client-list']);
        },
        error => console.log(error)
      );

  }
}