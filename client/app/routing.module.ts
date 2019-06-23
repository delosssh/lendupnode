import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AddNewLoanComponent } from './add-new-loan/add-new-loan.component';
import { AddNewRegularLoanComponent } from './add-new-regular-loan/add-new-regular-loan.component';
import { LoanPaymentComponent } from './loan-payment/loan-payment.component';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { LoanApplicationForm2Component } from './loan-application-form-2/loan-application-form-2.component';
import { LoanApplicationForm3Component } from './loan-application-form-3/loan-application-form-3.component';
// import { LoanApplicationForm4Component } from './loan-application-form-4/loan-application-form-4.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { PaymentScheduleListComponent } from './payment-schedule-list/payment-schedule-list.component';
import { LoanTransactionListComponent } from './loan-transaction-list/loan-transaction-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'add-client', component: AddClientComponent },
  { path: 'add-new-regular-loan', component: AddNewRegularLoanComponent },
  { path: 'add-new-loan', component: AddNewLoanComponent },
  { path: 'add-payment', component: AddPaymentComponent },
  { path: 'client-detail', component: ClientDetailComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'loan-details', component: LoanDetailsComponent },
  { path: 'loan-payment', component: LoanPaymentComponent },
  { path: 'loan-transaction-list', component: LoanTransactionListComponent },
  { path: 'loan-application-form', component: LoanApplicationFormComponent },
  { path: 'loan-application-form-2', component: LoanApplicationForm2Component },
  { path: 'loan-application-form-3', component: LoanApplicationForm3Component },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'payment-schedule-list', component: PaymentScheduleListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'whatis', component: AboutComponent },
  // { path: 'loan-application-form-4', component: LoanApplicationForm4Component },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
