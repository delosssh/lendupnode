import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';
import { LoanService } from './services/loan.service';
import { ClientPaymentService } from './services/client-payment.service';
import { AuthService } from './services/auth.service';
import { PaymentScheduleService } from './services/payment-schedule.service';
import { LoanTransactionService } from './services/loan-transaction.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { LoanApplicationService } from './services/loan-application.service';
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
import { ClientListComponent, SearchClientFilterPipe } from './client-list/client-list.component';
import { ClientListChildComponent } from './client-list/client-list-child.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { LoansDialogComponent } from './client-loans-dialog/client-loans-dialog.component';
import { LoansDialogComponent1 } from './client-list/loans-dialog.component';
import { LoanPaymentDialogComponent } from './loan-payments/loan-payment-dialog.component';
import { AddLoanPaymentDialogComponent } from './add-loan-payment/add-loan-payment-dialog.component';
import { AddNewLoanComponent } from './add-new-loan/add-new-loan.component';
import { AddNewRegularLoanComponent } from './add-new-regular-loan/add-new-regular-loan.component';
import { LoanPaymentComponent } from './loan-payment/loan-payment.component';
import { ClientLoanPaymentDialogComponent } from './client-loan-payment-dialog/client-loan-payment-dialog.component';
import { PaymentScheduleListComponent } from './payment-schedule-list/payment-schedule-list.component';
import { LoansDialogChildComponent } from './loans-dialog-child/loans-dialog-child.component';
import { LoanTransactionListComponent } from './loan-transaction-list/loan-transaction-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoanApplicationFormComponent } from './loan-application-form/loan-application-form.component';
import { LoanApplicationForm2Component } from './loan-application-form-2/loan-application-form-2.component';
import { LoanApplicationForm3Component } from './loan-application-form-3/loan-application-form-3.component';
import { FooterComponent } from './footer/footer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
// import { LoanApplicationForm4Component } from './loan-application-form-4/loan-application-form-4.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule, MatSelectModule, MatDialogModule, MatTableModule, MatListModule, MatStepperModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, GestureConfig } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaymentScheduleDialogComponent } from './payment-schedule-dialog/payment-schedule-dialog.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    AddPaymentComponent,
    AddClientComponent,
    ClientListComponent,
    ClientListChildComponent,
    ContactUsComponent,
    LoanDetailsComponent,
    ClientDetailComponent,
    LoansDialogComponent,
    LoansDialogComponent1,
    LoansDialogChildComponent,
    LoanPaymentDialogComponent,
    AddLoanPaymentDialogComponent,
    AddNewLoanComponent,
    AddNewRegularLoanComponent,
    LoanPaymentComponent,
    PaymentScheduleDialogComponent,
    ClientLoanPaymentDialogComponent,
    PaymentScheduleListComponent,
    LoanTransactionListComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoanApplicationFormComponent,
    LoanApplicationForm2Component,
    LoanApplicationForm3Component,
    HowItWorksComponent,
    // LoanApplicationForm4Component,
    SearchClientFilterPipe
  ],
  entryComponents: [
    AddLoanPaymentDialogComponent,
    LoansDialogComponent,
    LoanPaymentDialogComponent,
    ClientLoanPaymentDialogComponent,
    PaymentScheduleDialogComponent,
  ],
  imports: [
    RoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    // MdButtonModule,
    // MdMenuModule,
    // MdCardModule,
    // MdToolbarModule,
    // MdIconModule,
    // MdInputModule,
    // MdSelectModule,
    // MdDialogModule,
    // MdTableModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    CdkTableModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    DatePipe,
    UserService,
    ClientService,
    LoanService,
    ClientPaymentService,
    PaymentScheduleService,
    LoanTransactionService,
    LoanApplicationService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
