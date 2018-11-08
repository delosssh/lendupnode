import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientService } from '../services/client.service';
import { LoanService } from '../services/loan.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { ClientModel } from '../models/client.model';
import { LoanModel } from '../models/loan.model';

@Component({
  selector: 'add-new-regular-loan',
  templateUrl: './add-new-regular-loan.component.html',
  styleUrls: ['./add-new-regular-loan.component.scss']
})
export class AddNewRegularLoanComponent {
 
  client: ClientModel;
  loan: LoanModel;

  public constructor (
    private clientService: ClientService,
    private loanService: LoanService,
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.client = new ClientModel();
    this.loan = new LoanModel();
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      params => {
        this.client._id = params['id'];

        this.loadClient(this.client);
      }
    );
  }

  loadClient(client: ClientModel) {
    this.clientService.getClient(client)
    .subscribe(
      data => this.client = data,
      error => console.log(error)
    )
  }

  save() {
    // console.log(this.client.firstName);
    // this.clientService.addClient(this.client)
    //   .subscribe(
    //     res => {
    //       console.log('new client was added');
    //       this.router.navigate(['client-list']);
    //     },
    //     error => console.log(error)
    //   );

    this.loan.clientNumber = this.client.clientNumber;
    this.loanService.addLoan(this.loan)
    .subscribe(
      res => {
        console.log('adding new loan');
        this.router.navigate(['/client-detail', {id: this.client._id}]);
      },
      error => console.log(error)
    );
  }
}