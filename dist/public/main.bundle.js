webpackJsonp(["main"],{

/***/ "../../../../../client/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../client/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../client/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../client/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../client/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Account settings</h4>\n  <div class=\"card-block\">\n    <form #accountForm=\"ngForm\" (ngSubmit)=\"save(user)\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" [(ngModel)]=\"user.role\">\n          <option value=\"\" disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!accountForm.form.valid\">\n        <i class=\"fa fa-save\"></i> Save\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.user = {};
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.auth.currentUser).subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AccountComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.editUser(user).subscribe(function (res) { return _this.toast.setMessage('account settings saved!', 'success'); }, function (error) { return console.log(error); });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../client/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../client/app/account/account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>face</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"first name\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"client.firstName\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n    <!-- <button md-button><md-icon>search</md-icon></button> -->\r\n  </div>\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"middle name\" id=\"middleName\" [(ngModel)]=\"client.middleName\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"last name\" id=\"lastName\" [(ngModel)]=\"client.lastName\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>wc</mat-icon>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"gender\" [(ngModel)]=\"client.gender\">\r\n        <mat-option value=\"ma\">male</mat-option>\r\n        <mat-option value=\"fe\">female</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>  \r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>phone</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"mobile phone\" id=\"mobilePhone\" [(ngModel)]=\"client.mobilePhone\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>email</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"email address\" id=\"emailAddress\" [(ngModel)]=\"client.emailAddress\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <!-- <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"birthdate\" id=\"birthdate\" name=\"birthdate\" [value]=\"client.birthdate | date: 'MM/dd/yyyy'\">\r\n    </mat-form-field>\r\n  </div> -->\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"birthdatePicker\" placeholder=\"birthdate\" [(ngModel)]=\"client.birthdate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"birthdatePicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #birthdatePicker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>map</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"address1\" id=\"address1\" [(ngModel)]=\"client.address1\">\r\n    </mat-form-field>\r\n  </div>\r\n    \r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"address2\" id=\"address2\" [(ngModel)]=\"client.address2\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"zone name\" id=\"zoneName\" [(ngModel)]=\"client.zoneName\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"barangay\" id=\"barangayName\" [(ngModel)]=\"client.barangayName\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"city\" [(ngModel)]=\"client.cityName\">\r\n        <mat-option value=\"sjc\">san jose city</mat-option>\r\n        <mat-option value=\"bag\">talavera</mat-option>\r\n        <mat-option value=\"scm\">science city of munoz</mat-option>\r\n        <mat-option value=\"cab\">cabanatuan city</mat-option>\r\n        <mat-option value=\"bag\">baguio city</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>    \r\n  \r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"province\" [(ngModel)]=\"client.provinceName\">\r\n        <mat-option value=\"ne\">nueva ecija</mat-option>\r\n        <mat-option value=\"bu\">bulacan</mat-option>\r\n        <mat-option value=\"be\">benguet</mat-option>\r\n        <mat-option value=\"tu\">tuguegarao</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>    \r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>location_on</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"location map\" id=\"locationMap\" [(ngModel)]=\"client.locationMap\">\r\n    </mat-form-field>\r\n  </div>\r\n  \r\n  <!-- Employment -->\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>people</mat-icon>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"employment\" [(ngModel)]=\"client.employment\">\r\n        <mat-option value=\"em\">employed</mat-option>\r\n        <mat-option value=\"se\">self-employed</mat-option>\r\n        <mat-option value=\"of\">ofw</mat-option>\r\n        <mat-option value=\"rp\">retiree/pensioner</mat-option>\r\n        <mat-option value=\"st\">Student</mat-option>\r\n        <mat-option value=\"ue\">Unemployed</mat-option>\r\n      </mat-select>\r\n  </mat-form-field>\r\n  </div>  \r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>business</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"company/business name\" id=\"businessName\" [(ngModel)]=\"client.businessName\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>map</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"company/business address\" id=\"businessAddress\" [(ngModel)]=\"client.businessAddress\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"company/business phone\" id=\"businessPhone\" [(ngModel)]=\"client.businessPhone\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"job title/position\" id=\"businessJobTitle\" [(ngModel)]=\"client.businessJobTitle\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"gross monthly income\" id=\"grossMonthlyIncome\" [(ngModel)]=\"client.grossMonthlyIncome\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"businessJoiningDate\" [(ngModel)]=\"client.businessJoiningDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker1\" placeholder=\"paydate 1\" [(ngModel)]=\"client.businessPayDate1\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker1></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker2\" placeholder=\"paydate 2\" [(ngModel)]=\"client.businessPayDate2\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker2></mat-datepicker>\r\n    </mat-form-field>  \r\n  </div>\r\n\r\n  <div style=\"display: flex; margin-top: 5vh\" fxLayoutAlign=\"center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n    <button mat-button>Cancel</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/add-client/add-client.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.form__field {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.form__item {\n  background: rgba(0, 0, 0, 0.25);\n  color: #fff;\n  border: 0;\n  padding: 10px;\n  margin: 0; }\n\n.form {\n  padding: 10px; }\n\n.form_field {\n  margin: 0; }\n\nmd-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\nmat-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\ninput {\n  font-family: 'Roboto'; }\n\nmd-input-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 150px; }\n\nmat-form-field {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 200px;\n  max-width: 300px;\n  width: 100%; }\n\nmd-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nmat-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nbutton md-icon {\n  margin-top: 0px; }\n\n.container {\n  padding-left: 20px;\n  padding-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_client_model__ = __webpack_require__("../../../../../client/app/models/client.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddClientComponent = (function () {
    function AddClientComponent(clientService, http, router) {
        this.clientService = clientService;
        this.http = http;
        this.router = router;
        this.client = new __WEBPACK_IMPORTED_MODULE_4__models_client_model__["a" /* ClientModel */]();
    }
    AddClientComponent.prototype.save = function () {
        var _this = this;
        console.log(this.client.firstName);
        this.clientService.addClient(this.client)
            .subscribe(function (res) {
            console.log('new client was added');
            _this.router.navigate(['client-list']);
        }, function (error) { return console.log(error); });
    };
    return AddClientComponent;
}());
AddClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-client',
        template: __webpack_require__("../../../../../client/app/add-client/add-client.component.html"),
        styles: [__webpack_require__("../../../../../client/app/add-client/add-client.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddClientComponent);

var _a, _b, _c;
//# sourceMappingURL=add-client.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-loan-payment/add-loan-payment-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"primary-color\">Client Payments</h1>\r\n<md-dialog-content class=\"accent-color\" style=\"max-width: 40rem;\">\r\n  <div class=\"container\" style=\"display: flex;\" fxLayout=\"column\">\r\n\r\n    <div fxFlex>\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field style=\"flex: 1\">\r\n        <input matInput placeholder=\"due amount\" id=\"dueAmount\" [(ngModel)]=\"payment.dueAmount\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>    \r\n    \r\n    <div>\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field> \r\n        <input matInput placeholder=\"due date\" id=\"dueDate\" [(ngModel)]=\"payment.dueDate\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex: 1\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field style=\"flex: 1\">\r\n        <input matInput placeholder=\"balance amount\" id=\"balanceAmount\" [(ngModel)]=\"payment.balanceAmount\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"last payment amount\" id=\"lastPaymentAmount\" [(ngModel)]=\"payment.lastPaymentAmount\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"last payment date\" id=\"lastPaymentDate\" [(ngModel)]=\"payment.lastPaymentDate\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex: 1\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field style=\"flex: 1\">\r\n        <input matInput placeholder=\"amount paid\" id=\"amountPaid\" [(ngModel)]=\"payment.paidAmount\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n    \r\n  </div>\r\n</md-dialog-content>\r\n<md-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close (click)=\"save()\">\r\n    Save\r\n  </button>  \r\n  <button mat-raised-button mat-dialog-close>\r\n    Cancel\r\n  </button>  \r\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../client/app/add-loan-payment/add-loan-payment-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLoanPaymentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_payment_service__ = __webpack_require__("../../../../../client/app/services/client-payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_clientpayment_model__ = __webpack_require__("../../../../../client/app/models/clientpayment.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddLoanPaymentDialogComponent = (function () {
    function AddLoanPaymentDialogComponent(data, paymentService) {
        this.data = data;
        this.paymentService = paymentService;
        console.log('constructor was called');
        console.dir(data);
        this.payment = new __WEBPACK_IMPORTED_MODULE_3__models_clientpayment_model__["a" /* ClientPaymentModel */]();
        this.payment.clientNumber = data.clientNumber;
        this.payment.loanId = data.loanId;
    }
    AddLoanPaymentDialogComponent.prototype.ngOnInit = function () {
    };
    AddLoanPaymentDialogComponent.prototype.save = function () {
        this.paymentService.addPayment(this.payment)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    return AddLoanPaymentDialogComponent;
}());
AddLoanPaymentDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-loan-payment-dialog',
        template: __webpack_require__("../../../../../client/app/add-loan-payment/add-loan-payment-dialog.component.html"),
        styles: ['./add-loan-payment-dialog.component.scss']
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_payment_service__["a" /* ClientPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_payment_service__["a" /* ClientPaymentService */]) === "function" && _a || Object])
], AddLoanPaymentDialogComponent);

var _a;
//# sourceMappingURL=add-loan-payment-dialog.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-new-loan/add-new-loan.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex\">\r\n   <mat-horizontal-stepper linear=\"true\">\r\n    <mat-step stepControl=\"firstStep\">\r\n      <form fxLayout=\"column\">\r\n        <ng-template matStepLabel>Tell us about yourself</ng-template>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"reason for the loan\">\r\n            <mat-option value=\"car\">Car</mat-option>\r\n            <mat-option value=\"house\">House</mat-option>\r\n            <mat-option value=\"other\">Other</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div>what is your primary source of income</div>\r\n        <div>\r\n        <mat-radio-group matRadio>\r\n          <mat-radio-button value=\"business\">Business</mat-radio-button>\r\n          <mat-radio-button value=\"employed\">Employed</mat-radio-button>\r\n          <mat-radio-button value=\"remittance\">Remittance</mat-radio-button>\r\n          <mat-radio-button value=\"pension\">Pension</mat-radio-button>\r\n        </mat-radio-group>\r\n        </div>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"How much do you need (peso)?\" name=\"principalAmount\" [(ngModel)]=\"loan.principalAmount\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"payment type\" name=\"paymentTypeId\" [(ngModel)]=\"loan.paymentTypeId\">\r\n            <mat-option value=\"daily\">Daily</mat-option>\r\n            <mat-option value=\"weekly\">Weekly</mat-option>\r\n            <mat-option value=\"monthly\">Monthly</mat-option>\r\n            <mat-option value=\"other\">Other</mat-option>\r\n            \r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"when do you need the money?\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"your email address\" value=\"\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"landline phone\" value=\"\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"mobile phone\" value=\"\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"facebook account\" value=\"\">\r\n        </mat-form-field>\r\n    \r\n\r\n        <div>\r\n          <button mat-button matStepperNext (click)=\"step1Next()\">Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step stepControl=\"secondStep\">\r\n      <form fxLayout=\"column\">\r\n        <ng-template matStepLabel>Tell us about your financials</ng-template>\r\n\r\n        <div style=\"display: flex; flex-wrap: wrap;\">\r\n          <mat-list>\r\n            <mat-list-item>\r\n              <div style=\"flex: 10\">Payment Number</div>\r\n              <div style=\"flex: 10\">Amount Due</div>\r\n              <div style=\"flex: 10\">Due Date</div>\r\n            </mat-list-item>\r\n            <mat-list-item *ngFor=\"let schedule of schedules\">\r\n              <div style=\"flex: 10\">{{schedule.paymentNumber}}</div>\r\n              <div style=\"flex: 10\">{{schedule.dueAmount}}</div>\r\n              <div style=\"flex: 10\">{{schedule.dueDate | date: 'MMM/dd/yyyy'}}</div>              \r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>        \r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"middle name\" value=\"\">\r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Prev</button>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/add-new-loan/add-new-loan.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/add-new-loan/add-new-loan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewLoanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_loan_model__ = __webpack_require__("../../../../../client/app/models/loan.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { PaymentSchedule } from '../models/payment-schedule.model';
var AddNewLoanComponent = (function () {
    function AddNewLoanComponent(loanService) {
        this.loanService = loanService;
        this.schedules = [];
        this.loan = new __WEBPACK_IMPORTED_MODULE_2__models_loan_model__["a" /* LoanModel */]();
        this.loan.principalAmount = 0;
    }
    AddNewLoanComponent.prototype.step1Next = function () {
        // console.log('spte1Next');
        // console.dir(this.loan);
        // this.loanService.paymentSchedule(this.loan)
        //   .subscribe(
        //     data => {
        //       this.schedules = data;
        //       console.log('found data');
        //       console.dir(data);
        //     },
        //     error => console.log(error)
        //   )
    };
    return AddNewLoanComponent;
}());
AddNewLoanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-new-loan',
        template: __webpack_require__("../../../../../client/app/add-new-loan/add-new-loan.component.html"),
        styles: [__webpack_require__("../../../../../client/app/add-new-loan/add-new-loan.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_loan_service__["a" /* LoanService */]) === "function" && _a || Object])
], AddNewLoanComponent);

var _a;
//# sourceMappingURL=add-new-loan.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-new-regular-loan/add-new-regular-loan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"container-header\">\r\n    Add New Loan - Regular\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"client number\" [(ngModel)]=\"client.clientNumber\" readonly=\"true\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>face</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"first name\" [(ngModel)]=\"client.firstName\" readonly=\"true\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"middle name\" [(ngModel)]=\"client.middleName\" readonly=\"true\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"last name\" [(ngModel)]=\"client.lastName\" readonly=\"true\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div> \r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"loan type\" [(ngModel)]=\"loan.loanTypeId\">\r\n        <mat-option value=\"sal\">salary</mat-option>\r\n        <mat-option value=\"per\">personal</mat-option>\r\n        <mat-option value=\"ofw\">ofw</mat-option>\r\n        <mat-option value=\"oth\">other</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>       \r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"loan proceed\" [(ngModel)]=\"loan.loanProceed\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>phone</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"loan amount\" [(ngModel)]=\"loan.principalAmount\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>email</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"interest rate (%)\" [(ngModel)]=\"loan.interestRate\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <!-- <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"birthdate\" id=\"birthdate\" name=\"birthdate\" [value]=\"client.birthdate | date: 'MM/dd/yyyy'\">\r\n    </mat-form-field>\r\n  </div> --> \r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix></mat-icon>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"payment type\" [(ngModel)]=\"loan.paymentTypeId\" (change)=\"loanTypeChangeEvent($event)\">\r\n        <mat-option value=\"dai\">daily</mat-option>\r\n        <mat-option value=\"wek\">weekly</mat-option>\r\n        <mat-option value=\"bwe\">bi-weekly</mat-option>\r\n        <mat-option value=\"mon\">monthly</mat-option>\r\n        <mat-option value=\"one\">one time</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>   \r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>email</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"number of payments\" [(ngModel)]=\"loan.numberOfPayments\" style=\"flex: 1\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"needByDatePicker\" placeholder=\"need by date\" [(ngModel)]=\"loan.needByDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"needByDatePicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #needByDatePicker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"releasePicker\" placeholder=\"release date\" [(ngModel)]=\"loan.releaseDate\" (change)=\"loanTypeChangeEvent($event)\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"releasePicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #releasePicker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>calendar_today</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"dueDatePicker\" placeholder=\"first payment date\" [(ngModel)]=\"loan.dueDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"dueDatePicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #dueDatePicker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex\">\r\n    <mat-icon matPrefix>email</mat-icon>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"maturityDatePicker\" placeholder=\"maturity date\" [(ngModel)]=\"loan.maturityDate\" style=\"flex: 1\" readonly=\"true\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"maturityDatePicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #maturityDatePicker></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div style=\"display: flex; margin-top: 5vh\" fxLayoutAlign=\"center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n    <button mat-button>Cancel</button>\r\n    <button mat-button (click)=\"calculatePayment()\">Show Schedule</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/add-new-regular-loan/add-new-regular-loan.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.form__field {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.form__item {\n  background: rgba(0, 0, 0, 0.25);\n  color: #fff;\n  border: 0;\n  padding: 10px;\n  margin: 0; }\n\n.form {\n  padding: 10px; }\n\n.form_field {\n  margin: 0; }\n\nmd-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\nmat-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\ninput {\n  font-family: 'Roboto'; }\n\nmd-input-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 150px; }\n\nmat-form-field {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 200px;\n  max-width: 300px;\n  width: 100%; }\n\nmd-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nmat-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nbutton md-icon {\n  margin-top: 0px; }\n\n.container {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.container-header {\n  font-family: 'Roboto'; }\n  .container-header h3 {\n    font-family: 'Roboto'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/add-new-regular-loan/add-new-regular-loan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewRegularLoanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_payment_schedule_service__ = __webpack_require__("../../../../../client/app/services/payment-schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loan_transaction_service__ = __webpack_require__("../../../../../client/app/services/loan-transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_client_model__ = __webpack_require__("../../../../../client/app/models/client.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_loan_model__ = __webpack_require__("../../../../../client/app/models/loan.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_payment_schedule_model__ = __webpack_require__("../../../../../client/app/models/payment-schedule.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_loan_transaction_model__ = __webpack_require__("../../../../../client/app/models/loan-transaction.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__payment_schedule_dialog_payment_schedule_dialog_component__ = __webpack_require__("../../../../../client/app/payment-schedule-dialog/payment-schedule-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddNewRegularLoanComponent = (function () {
    function AddNewRegularLoanComponent(clientService, dialog, loanService, paymentScheduleService, loanTransactionService, http, route, router) {
        this.clientService = clientService;
        this.dialog = dialog;
        this.loanService = loanService;
        this.paymentScheduleService = paymentScheduleService;
        this.loanTransactionService = loanTransactionService;
        this.http = http;
        this.route = route;
        this.router = router;
        this.schedules = [];
        this.client = new __WEBPACK_IMPORTED_MODULE_8__models_client_model__["a" /* ClientModel */]();
        this.loan = new __WEBPACK_IMPORTED_MODULE_9__models_loan_model__["a" /* LoanModel */]();
    }
    AddNewRegularLoanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.client._id = params['id'];
            _this.loadClient(_this.client);
        });
    };
    AddNewRegularLoanComponent.prototype.loadClient = function (client) {
        var _this = this;
        this.clientService.getClient(client)
            .subscribe(function (data) { return _this.client = data; }, function (error) { return console.log(error); });
    };
    AddNewRegularLoanComponent.prototype.save = function () {
        var _this = this;
        this.loanTransaction = new __WEBPACK_IMPORTED_MODULE_11__models_loan_transaction_model__["a" /* LoanTransactionModel */]();
        // console.log(this.client.firstName);
        // this.clientService.addClient(this.client)
        //   .subscribe(
        //     res => {
        //       console.log('new client was added');
        //       this.router.navigate(['client-list']);
        //     },
        //     error => console.log(error)
        //   );
        this.loan.loanId = this.randomString();
        console.log('save: ' + this.loan.loanId);
        // this.calculatePaymentSchedule();
        this.calculatePayment();
        // var paymentSchedule: PaymentScheduleModel = new PaymentScheduleModel();
        // paymentSchedule.loanId = this.loan.loanId;
        // paymentSchedule.dueAmount = 200000;
        this.loan.clientNumber = this.client.clientNumber;
        this.loan.balanceAmount = this.loan.principalAmount;
        this.loan.paymentSchedule = [];
        // this.loan.paymentSchedule.push(paymentSchedule);
        this.loan.paymentSchedule = this.schedules;
        this.loanService.addLoan(this.loan)
            .subscribe(function (res) {
            console.log('adding new loan');
            console.dir(res);
            // this.router.navigate(['/client-detail', {id: this.client._id}]);
            // record new RELPRINCIPAL transaction
            _this.loanTransaction.loanId = String(_this.loan.loanId);
            _this.loanTransaction.clientNumber = String(_this.loan.clientNumber);
            _this.loanTransaction.transactionId = "";
            _this.loanTransaction.transactionDate = new Date();
            _this.loanTransaction.transactionType = "RELPRIN";
            _this.loanTransaction.transactionDescription = "Principal Released";
            _this.loanTransaction.salaryAmount = 0;
            _this.loanTransaction.interestAmount = 0;
            _this.loanTransaction.releaseAmount = Number(_this.loan.principalAmount);
            _this.loanTransaction.paymentAmount = 0;
            _this.loanTransaction.otherDescription = "";
            _this.loanTransaction.otherAmount = 0;
            _this.loanTransaction.cashoutAmount = Number(_this.loan.principalAmount);
            _this.loanTransaction.debitAmount = Number(_this.loan.principalAmount);
            _this.loanTransaction.balanceAmount = Number(_this.loan.balanceAmount);
            _this.loanTransaction.creditAmount = 0;
            _this.loanTransactionService.add(_this.loanTransaction)
                .subscribe(function (res) {
                console.log('loan transaction was saved ');
                console.log(res);
            }, function (error) { return console.log(error); });
            _this.paymentScheduleService.add(_this.schedules)
                .subscribe(function (res) {
                console.log('payment schedules added');
                _this.router.navigate(['/client-detail', { id: _this.client._id }]);
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    /**
     * loan type
     */
    AddNewRegularLoanComponent.prototype.loanTypeChangeEvent = function (event) {
        var multiplier;
        console.dir(event);
        switch (event.value) {
            case 'dai':
                this.loan.numberOfPayments = 80;
                this.paymentInterval = 1;
                break;
            case 'wek':
                this.loan.numberOfPayments = 8;
                this.paymentInterval = 7;
                this.loan.loanTypeInterestRate = Number(this.loan.interestRate) / 4;
                break;
            case 'bwe':
                this.loan.numberOfPayments = 4;
                this.paymentInterval = 14;
                this.loan.loanTypeInterestRate = Number(this.loan.interestRate) / 2;
                break;
            case 'mon':
                this.loan.numberOfPayments = 2;
                this.paymentInterval = 28;
                this.loan.loanTypeInterestRate = this.loan.interestRate;
                break;
            case 'one':
                this.loan.numberOfPayments = 1;
                this.paymentInterval = 56;
                this.loan.loanTypeInterestRate = this.loan.interestRate;
                break;
            default:
                this.loan.numberOfPayments = 0;
                this.paymentInterval = 0;
                break;
        }
        multiplier = this.loan.numberOfPayments * this.paymentInterval;
        this.updateMaturityDate(multiplier);
    };
    AddNewRegularLoanComponent.prototype.updateMaturityDate = function (mult) {
        var _newDate;
        _newDate = new Date();
        _newDate.setDate(this.loan.releaseDate.getDate() + mult);
        this.loan.maturityDate = _newDate;
    };
    AddNewRegularLoanComponent.prototype.calculatePayment = function () {
        switch (this.loan.paymentTypeId) {
            case 'dai':
                this.calculatePaymentScheduleDaily();
                break;
            case 'wek':
            case 'bwe':
            case 'mon':
                this.calculatePaymentSchedule();
                break;
            case 'one':
            default:
                break;
        }
    };
    /**
     * monthly installment
     * interest amount = balance amount * interest rate
    */
    AddNewRegularLoanComponent.prototype.calculatePaymentSchedule = function () {
        var principalAmount = this.loan.principalAmount;
        // let interestRate: Number = Number(this.loan.interestRate) / 100;
        var interestRate = Number(this.loan.loanTypeInterestRate) / 100;
        var numberOfPayments = this.loan.numberOfPayments; // 12;
        var balanceAmount = principalAmount;
        var monthlyInstallment = Number(principalAmount) / Number(numberOfPayments);
        var interestAmount = 0;
        var dueDate;
        var dueDateTmp;
        var dueDateTmp2;
        var paymentInterval = Number(this.paymentInterval);
        console.log('add-new-regular-loan:calculatePaymentSchedule: ' + this.loan.dueDate);
        // dueDate = this.loan.dueDate;
        // dueDate = this.loan.releaseDate;
        dueDate = new Date(this.loan.releaseDate.getFullYear(), this.loan.releaseDate.getMonth(), this.loan.releaseDate.getDate(), 0, 0, 0);
        console.log(dueDate);
        // empty this.schedules
        this.schedules = [];
        for (var x = 1; x < (Number(numberOfPayments) + 1); x++) {
            this.paymentSchedule = new __WEBPACK_IMPORTED_MODULE_10__models_payment_schedule_model__["a" /* PaymentScheduleModel */]();
            this.paymentSchedule.loanId = this.loan.loanId;
            this.paymentSchedule.paymentNumber = x;
            if (x == 0) {
                this.paymentSchedule.balanceAmount = balanceAmount;
            }
            else {
                interestAmount = Number(balanceAmount) * Number(interestRate);
                balanceAmount = Number(balanceAmount) - Number(monthlyInstallment);
                this.paymentSchedule.balanceAmount = balanceAmount;
                this.paymentSchedule.installmentAmount = monthlyInstallment;
                this.paymentSchedule.interestAmount = interestAmount;
            }
            dueDate.setDate(dueDate.getDate() + paymentInterval);
            console.log('1: ' + dueDate);
            console.log('1a: ' + dueDate.getFullYear());
            console.log('1b: ' + (dueDate.getMonth() + 1));
            // console.log('1c: ' + dueDate.getDay());
            console.log('1d: ' + dueDate.getDate());
            dueDateTmp = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate(), 0, 0, 0);
            // dueDateTmp.setDate(dueDate.getDate());
            console.log('2: ' + dueDateTmp);
            this.paymentSchedule.dueDate = dueDateTmp;
            this.schedules.push(this.paymentSchedule);
            // dueDate.setDate(dueDate.getDate() + paymentInterval);
            console.log('3: ' + x);
            // dueDate.setDate(dueDate.getDate() + paymentInterval);
            console.log('4: ' + dueDate);
            // console.log('5a: ' + dueDate.getFullYear());
            // console.log('5b: ' + dueDate.getMonth());
            // console.log('5c: ' + dueDate.getDay());
            // console.log('5d: ' + dueDate.getDate());
            dueDateTmp2 = new Date(dueDate.getFullYear(), dueDate.getMonth() + 1, dueDate.getDate(), 0, 0, 0);
            console.log('6: ' + dueDateTmp2);
        }
        console.dir(this.schedules);
        this.loan.maturityDate = dueDateTmp;
        // this.showPaymentSchedule(this.schedules);
    };
    AddNewRegularLoanComponent.prototype.calculatePaymentScheduleDaily = function () {
        var principalAmount = this.loan.principalAmount;
        var interestRate = Number(this.loan.interestRate) / 100;
        var numberOfPayments = this.loan.numberOfPayments; // 12;
        var balanceAmount = principalAmount;
        var monthlyInstallment = Number(principalAmount) / Number(numberOfPayments);
        var interestAmount = 0;
        var dueDate;
        var dueDateTmp;
        var dueDateTmp2;
        var paymentInterval = Number(this.paymentInterval);
        var months;
        var appliedInterestRate;
        console.log('interestRate');
        console.log(interestRate);
        // calculate the number of months based on 30 days per month
        months = Number(numberOfPayments) / 30;
        console.log('months: ');
        console.log(months);
        // calculate applicable interest rate
        appliedInterestRate = Number(months) * Number(interestRate);
        console.log('appliedInterestRate: ');
        console.log(appliedInterestRate);
        // calculate interest amount per payment interval
        interestAmount = (Number(principalAmount) * Number(appliedInterestRate)) / Number(numberOfPayments);
        console.log('interestAmount: ');
        console.log(interestAmount);
        // console.log('add-new-regular-loan:calculatePaymentSchedule: ' + this.loan.dueDate);
        // dueDate = this.loan.dueDate;
        // dueDate = this.loan.releaseDate;
        dueDate = new Date(this.loan.releaseDate.getFullYear(), this.loan.releaseDate.getMonth(), this.loan.releaseDate.getDate(), 0, 0, 0);
        console.log(dueDate);
        // empty this.schedules
        this.schedules = [];
        for (var x = 1; x < (Number(numberOfPayments) + 1); x++) {
            this.paymentSchedule = new __WEBPACK_IMPORTED_MODULE_10__models_payment_schedule_model__["a" /* PaymentScheduleModel */]();
            this.paymentSchedule.paymentNumber = x;
            if (x == 0) {
                this.paymentSchedule.balanceAmount = balanceAmount;
            }
            else {
                // interestAmount = Number(balanceAmount) * Number(interestRate);
                balanceAmount = Number(balanceAmount) - Number(monthlyInstallment);
                this.paymentSchedule.balanceAmount = balanceAmount;
                this.paymentSchedule.installmentAmount = monthlyInstallment;
                this.paymentSchedule.interestAmount = interestAmount;
            }
            dueDate.setDate(dueDate.getDate() + paymentInterval);
            // console.log('1: ' + dueDate);
            // console.log('1a: ' + dueDate.getFullYear());
            // console.log('1b: ' + (dueDate.getMonth()+1));
            // console.log('1c: ' + dueDate.getDay());
            // console.log('1d: ' + dueDate.getDate());
            dueDateTmp = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate(), 0, 0, 0);
            // dueDateTmp.setDate(dueDate.getDate());
            // console.log('2: ' + dueDateTmp);
            this.paymentSchedule.dueDate = dueDateTmp;
            this.schedules.push(this.paymentSchedule);
            // dueDate.setDate(dueDate.getDate() + paymentInterval);
            // console.log('3: ' + x);
            // dueDate.setDate(dueDate.getDate() + paymentInterval);
            // console.log('4: ' + dueDate);
            // console.log('5a: ' + dueDate.getFullYear());
            // console.log('5b: ' + dueDate.getMonth());
            // console.log('5c: ' + dueDate.getDay());
            // console.log('5d: ' + dueDate.getDate());
            dueDateTmp2 = new Date(dueDate.getFullYear(), dueDate.getMonth() + 1, dueDate.getDate(), 0, 0, 0);
            // console.log('6: ' + dueDateTmp2);
        }
        console.dir(this.schedules);
        this.loan.maturityDate = dueDateTmp;
        this.showPaymentSchedule(this.schedules);
    };
    AddNewRegularLoanComponent.prototype.showPaymentSchedule = function (schedules) {
        var dialogConfig = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialogConfig */]();
        dialogConfig.data = { paymentSchedules: schedules };
        // dialogConfig.width = "400px";
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__payment_schedule_dialog_payment_schedule_dialog_component__["a" /* PaymentScheduleDialogComponent */], dialogConfig);
    };
    AddNewRegularLoanComponent.prototype.randomString = function () {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var string_length = 6;
        var randomstring = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring;
    };
    return AddNewRegularLoanComponent;
}());
AddNewRegularLoanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-new-regular-loan',
        template: __webpack_require__("../../../../../client/app/add-new-regular-loan/add-new-regular-loan.component.html"),
        styles: [__webpack_require__("../../../../../client/app/add-new-regular-loan/add-new-regular-loan.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_loan_service__["a" /* LoanService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_payment_schedule_service__["a" /* PaymentScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_payment_schedule_service__["a" /* PaymentScheduleService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_loan_transaction_service__["a" /* LoanTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_loan_transaction_service__["a" /* LoanTransactionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _h || Object])
], AddNewRegularLoanComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-new-regular-loan.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-payment/add-payment.component.html":
/***/ (function(module, exports) {

module.exports = "add payment\r\n\r\n<div class=\"container\"\r\nfxLayout\r\nfxLayout.xs=\"column\"\r\nfxLayoutAlign=\"center\"\r\nfxLayoutGap=\"10px\"\r\nfxLayoutGap.xs=\"0\">\r\n<div class=\"item item-1\" fxFlex=\"15%\">Item 1</div>\r\n<div class=\"item item-2\" fxFlex=\"20%\" fxFlexOrder=\"3\">Item 2</div>\r\n<div class=\"item item-3\" fxFlex>Item 3</div>\r\n</div>\r\n\r\n<div class=\"container\"\r\nfxLayout\r\nfxLayout.xs=\"column\"\r\nfxLayoutAlign=\"center\"\r\nfxLayoutGap=\"10px\"\r\nfxLayoutGap.xs=\"0\">\r\n<div class=\"item item-4\" fxFlex fxFlexOffset=\"50px\"  fxFlexOffset.xs=\"0\">Item 4</div>\r\n<div class=\"item item-5\" fxFlex=\"200px\">Item 5</div>\r\n</div>\r\n\r\n\r\n<div class=\"containerX\">\r\n  <div fxLayout=\"row wrap\" class=\"colored box nopad\" >\r\n    <div fxFlex=\"none\">     [flex=\"none\"]       </div>\r\n    <div fxFlex>            [flex]              </div>\r\n    <div fxFlex=\"nogrow\">   [flex=\"nogrow\"]     </div>\r\n    <div fxFlex=\"grow\">     [flex=\"grow\"]       </div>\r\n    \r\n    <div fxFlex=\"33.33%\">   [flex=\"33.33%\"]     </div>\r\n    <div fxFlex=\"33.33%\">   [flex=\"33.33%\"]     </div>\r\n    <div fxFlex=\"33.33%\">   [flex=\"33.33%\"]     </div>\r\n    \r\n  </div>          \r\n</div>\r\n\r\n<fx-version></fx-version>"

/***/ }),

/***/ "../../../../../client/app/add-payment/add-payment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerX {\n  border: solid 1px #b6b6b6; }\n\n.colorNested, .colored, .coloredContainerX {\n  height: 200px; }\n\nmd-card {\n  background-color: white; }\n\ndiv.coloredContainerX > div, div.colorNested > div > div {\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  opacity: 0.9;\n  color: #fff;\n  text-align: center; }\n\ndiv.coloredContainerX > div:nth-child(1), div.colorNested > div > div:nth-child(1) {\n  background-color: #009688; }\n\ndiv.coloredContainerX > div:nth-child(2), div.colorNested > div > div:nth-child(2) {\n  background-color: #3949ab; }\n\ndiv.coloredContainerX > div:nth-child(3), div.coloredChildren > div:nth-child(3), div.colorNested > div > div:nth-child(3) {\n  background-color: #9c27b0; }\n\ndiv.coloredContainerX > div:nth-child(4), div.coloredChildren > div:nth-child(4), div.colorNested > div > div:nth-child(4) {\n  background-color: #b08752; }\n\ndiv.coloredContainerX > div:nth-child(5), div.coloredChildren > div:nth-child(5), div.colorNested > div > div:nth-child(5) {\n  background-color: #5ca6b0; }\n\ndiv.colored > div {\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  opacity: 0.9;\n  color: #fff;\n  text-align: center; }\n\ndiv.colored > div:nth-child(1), .one {\n  background-color: #009688; }\n\ndiv.colored > div:nth-child(2), .two {\n  background-color: #3949ab; }\n\ndiv.colored > div:nth-child(3), .three {\n  background-color: #9c27b0; }\n\ndiv.colored > div:nth-child(4), .four {\n  background-color: #8bc34a; }\n\ndiv.colored > div:nth-child(5), .five {\n  background-color: #03A9F4; }\n\ndiv.colored > div:nth-child(6), .six {\n  background-color: #c9954e; }\n\ndiv.colored > div:nth-child(7), .seven {\n  background-color: #FF5722; }\n\n.hint {\n  margin: 5px;\n  font-size: 0.9em;\n  color: #a3a3a3;\n  margin-bottom: 0; }\n\n.title {\n  margin: 5px;\n  font-size: 0.9em;\n  color: #5c5c5c; }\n\n.box {\n  border: solid 1px gray; }\n\nbutton.md-primary {\n  margin-left: 25px; }\n\n.demo-content {\n  background-color: ghostwhite; }\n\nmd-toolbar-row button {\n  min-width: 150px; }\n\ndiv.colored.box.nopad > div {\n  padding: 0; }\n\n.intro {\n  margin-top: -52px;\n  margin-left: 15px;\n  color: #5c5c5c; }\n\n.version {\n  font-size: 0.8em;\n  color: #aeaeae;\n  margin-top: 20px; }\n\n.blocks {\n  min-width: 75px;\n  min-height: 50px; }\n\nhtml, body {\n  height: 100%;\n  min-height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/add-payment/add-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddPaymentComponent = (function () {
    function AddPaymentComponent() {
    }
    return AddPaymentComponent;
}());
AddPaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-payment',
        template: __webpack_require__("../../../../../client/app/add-payment/add-payment.component.html"),
        styles: [__webpack_require__("../../../../../client/app/add-payment/add-payment.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AddPaymentComponent);

//# sourceMappingURL=add-payment.component.js.map

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Registered users ({{users.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Username</th>\n          <th>Email</th>\n          <th>Role</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"users.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no registered users.</td>\n        </tr>  \n      </tbody>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{user.username}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.role}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </td>\n        </tr>  \n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).subscribe(function (data) { return _this.toast.setMessage('user deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getUsers(); });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../client/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../client/app/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n\n  <navbar></navbar>\n\n</div>\n<div>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  /* top: 0;\r\n  z-index: 999;\r\n  position: fixed; */ }\n\n.content {\n  /* flex: 1 1 auto; */\n  overflow-y: auto;\n  position: relative; }\n\n.navbar {\n  height: 48px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_module__ = __webpack_require__("../../../../../client/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_client_payment_service__ = __webpack_require__("../../../../../client/app/services/client-payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_payment_schedule_service__ = __webpack_require__("../../../../../client/app/services/payment-schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loan_transaction_service__ = __webpack_require__("../../../../../client/app/services/loan-transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_payment_add_payment_component__ = __webpack_require__("../../../../../client/app/add-payment/add-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_client_add_client_component__ = __webpack_require__("../../../../../client/app/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__client_list_client_list_component__ = __webpack_require__("../../../../../client/app/client-list/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__client_list_client_list_child_component__ = __webpack_require__("../../../../../client/app/client-list/client-list-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__loan_details_loan_details_component__ = __webpack_require__("../../../../../client/app/loan-details/loan-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__client_detail_client_detail_component__ = __webpack_require__("../../../../../client/app/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__client_list_loans_dialog_component__ = __webpack_require__("../../../../../client/app/client-list/loans-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__loan_payments_loan_payment_dialog_component__ = __webpack_require__("../../../../../client/app/loan-payments/loan-payment-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__add_loan_payment_add_loan_payment_dialog_component__ = __webpack_require__("../../../../../client/app/add-loan-payment/add-loan-payment-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__add_new_loan_add_new_loan_component__ = __webpack_require__("../../../../../client/app/add-new-loan/add-new-loan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__add_new_regular_loan_add_new_regular_loan_component__ = __webpack_require__("../../../../../client/app/add-new-regular-loan/add-new-regular-loan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__loan_payment_loan_payment_component__ = __webpack_require__("../../../../../client/app/loan-payment/loan-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__client_loan_payment_dialog_client_loan_payment_dialog_component__ = __webpack_require__("../../../../../client/app/client-loan-payment-dialog/client-loan-payment-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__payment_schedule_list_payment_schedule_list_component__ = __webpack_require__("../../../../../client/app/payment-schedule-list/payment-schedule-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__loans_dialog_child_loans_dialog_child_component__ = __webpack_require__("../../../../../client/app/loans-dialog-child/loans-dialog-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__loan_transaction_list_loan_transaction_list_component__ = __webpack_require__("../../../../../client/app/loan-transaction-list/loan-transaction-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__navbar_navbar_component__ = __webpack_require__("../../../../../client/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__home_home_component__ = __webpack_require__("../../../../../client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__payment_schedule_dialog_payment_schedule_dialog_component__ = __webpack_require__("../../../../../client/app/payment-schedule-dialog/payment-schedule-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































// import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdSelectModule, MdDialogModule, MdTableModule } from '@angular/material';






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__cats_cats_component__["a" /* CatsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_19__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_20__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_21__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_22__add_payment_add_payment_component__["a" /* AddPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_23__add_client_add_client_component__["a" /* AddClientComponent */],
            __WEBPACK_IMPORTED_MODULE_24__client_list_client_list_component__["a" /* ClientListComponent */],
            __WEBPACK_IMPORTED_MODULE_25__client_list_client_list_child_component__["a" /* ClientListChildComponent */],
            __WEBPACK_IMPORTED_MODULE_26__loan_details_loan_details_component__["a" /* LoanDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__client_detail_client_detail_component__["a" /* ClientDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__client_list_loans_dialog_component__["a" /* LoansDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_36__loans_dialog_child_loans_dialog_child_component__["a" /* LoansDialogChildComponent */],
            __WEBPACK_IMPORTED_MODULE_29__loan_payments_loan_payment_dialog_component__["a" /* LoanPaymentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_30__add_loan_payment_add_loan_payment_dialog_component__["a" /* AddLoanPaymentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_31__add_new_loan_add_new_loan_component__["a" /* AddNewLoanComponent */],
            __WEBPACK_IMPORTED_MODULE_32__add_new_regular_loan_add_new_regular_loan_component__["a" /* AddNewRegularLoanComponent */],
            __WEBPACK_IMPORTED_MODULE_33__loan_payment_loan_payment_component__["a" /* LoanPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_45__payment_schedule_dialog_payment_schedule_dialog_component__["a" /* PaymentScheduleDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_34__client_loan_payment_dialog_client_loan_payment_dialog_component__["a" /* ClientLoanPaymentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_35__payment_schedule_list_payment_schedule_list_component__["a" /* PaymentScheduleListComponent */],
            __WEBPACK_IMPORTED_MODULE_37__loan_transaction_list_loan_transaction_list_component__["a" /* LoanTransactionListComponent */],
            __WEBPACK_IMPORTED_MODULE_38__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_39__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__client_list_client_list_component__["b" /* SearchClientFilterPipe */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_30__add_loan_payment_add_loan_payment_dialog_component__["a" /* AddLoanPaymentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_28__client_list_loans_dialog_component__["a" /* LoansDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_29__loan_payments_loan_payment_dialog_component__["a" /* LoanPaymentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_34__client_loan_payment_dialog_client_loan_payment_dialog_component__["a" /* ClientLoanPaymentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_45__payment_schedule_dialog_payment_schedule_dialog_component__["a" /* PaymentScheduleDialogComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_44__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            // MdButtonModule,
            // MdMenuModule,
            // MdCardModule,
            // MdToolbarModule,
            // MdIconModule,
            // MdInputModule,
            // MdSelectModule,
            // MdDialogModule,
            // MdTableModule,
            __WEBPACK_IMPORTED_MODULE_43__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["l" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["r" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["i" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["o" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["g" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["q" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["k" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["p" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["n" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["d" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_41__angular_material__["m" /* MatNativeDateModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */],
            __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */],
            __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */],
            __WEBPACK_IMPORTED_MODULE_46__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_6__services_loan_service__["a" /* LoanService */],
            __WEBPACK_IMPORTED_MODULE_7__services_client_payment_service__["a" /* ClientPaymentService */],
            __WEBPACK_IMPORTED_MODULE_9__services_payment_schedule_service__["a" /* PaymentScheduleService */],
            __WEBPACK_IMPORTED_MODULE_10__services_loan_transaction_service__["a" /* LoanTransactionService */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current cats ({{cats.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Weight</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"cats.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no cats in the DB. Add a new cat below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of cats\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.age}}</td>\n          <td>{{cat.weight}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"cat.age\" placeholder=\"Age\" min=\"0\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"weight\" [(ngModel)]=\"cat.weight\" placeholder=\"Weight\" step=\"any\" min=\"0\" required>\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new cat</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addCat()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"age\" formControlName=\"age\" placeholder=\"Age\" min=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"weight\" formControlName=\"weight\" placeholder=\"Weight\" step=\"any\" min=\"0\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatsComponent = (function () {
    function CatsComponent(catService, formBuilder, http, toast) {
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.cat = {};
        this.cats = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.getCats();
        this.addCatForm = this.formBuilder.group({
            name: this.name,
            age: this.age,
            weight: this.weight
        });
    };
    CatsComponent.prototype.getCats = function () {
        var _this = this;
        this.catService.getCats().subscribe(function (data) { return _this.cats = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    CatsComponent.prototype.addCat = function () {
        var _this = this;
        this.catService.addCat(this.addCatForm.value).subscribe(function (res) {
            var newCat = res.json();
            _this.cats.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.enableEditing = function (cat) {
        this.isEditing = true;
        this.cat = cat;
    };
    CatsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.cat = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getCats();
    };
    CatsComponent.prototype.editCat = function (cat) {
        var _this = this;
        this.catService.editCat(cat).subscribe(function (res) {
            _this.isEditing = false;
            _this.cat = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.deleteCat = function (cat) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.catService.deleteCat(cat).subscribe(function (res) {
                var pos = _this.cats.map(function (elem) { return elem._id; }).indexOf(cat._id);
                _this.cats.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return CatsComponent;
}());
CatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cats',
        template: __webpack_require__("../../../../../client/app/cats/cats.component.html"),
        styles: [__webpack_require__("../../../../../client/app/cats/cats.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], CatsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cats.component.js.map

/***/ }),

/***/ "../../../../../client/app/client-detail/client-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"client number\" id=\"clientNumber\" name=\"clientNumber\" [(ngModel)]=\"_client.clientNumber\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"first name\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"_client.firstName\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"middle name\" id=\"middleName\" [(ngModel)]=\"_client.middleName\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>person</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"last name\" id=\"lastName\" [(ngModel)]=\"_client.lastName\" style=\"flex: 1\">\r\n      </mat-form-field>\r\n    </div>\r\n  \r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>calendar</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"birthdate\" id=\"birthdate\" name=\"birthdate\" [value]=\"_client.birthdate | date: 'MM/dd/yyyy'\">\r\n      </mat-form-field>\r\n    </div>\r\n  \r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>calendar</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"address1\" id=\"address1\" [(ngModel)]=\"_client.address1\">\r\n      </mat-form-field>\r\n    </div>\r\n      \r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>calendar</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"address2\" id=\"address2\" [(ngModel)]=\"_client.address2\">\r\n      </mat-form-field>\r\n    </div>\r\n  \r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>calendar</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"zone name\" id=\"zoneName\" [(ngModel)]=\"_client.zoneName\">\r\n      </mat-form-field>\r\n    </div>\r\n  \r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>calendar</mat-icon>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"barangay\" id=\"barangayName\" [(ngModel)]=\"_client.barangayName\">\r\n      </mat-form-field>\r\n    </div>\r\n  \r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>calendar</mat-icon>\r\n      <mat-select placeholder=\"city\" [(ngModel)]=\"_client.cityName\">\r\n        <mat-option value=\"sjc\">san jose city</mat-option>\r\n        <mat-option value=\"cab\">cabanatuan city</mat-option>\r\n        <mat-option value=\"bag\">baguio city</mat-option>\r\n        <mat-option value=\"scm\">science city of munoz</mat-option>\r\n      </mat-select>\r\n    </div>    \r\n    \r\n    <div style=\"display: flex\">\r\n      <mat-icon matPrefix>calendar</mat-icon>\r\n      <mat-select placeholder=\"province\" [(ngModel)]=\"_client.provinceName\">\r\n        <mat-option value=\"ne\">nueva ecija</mat-option>\r\n        <mat-option value=\"bu\">bulacan</mat-option>\r\n        <mat-option value=\"be\">benguet</mat-option>\r\n        <mat-option value=\"tu\">tuguegarao</mat-option>\r\n      </mat-select>\r\n    </div>    \r\n  \r\n    <div style=\"display: flex; margin-top: 5vh\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"update(_client)\">Update</button>\r\n      <button mat-button>Cancel</button>\r\n      <span style=\"flex: 1 1 auto\"></span>\r\n      <button mat-button color=\"warn\" (click)=\"newLoan(_client)\">New Loan</button>\r\n      <button mat-button color=\"accent\" (click)=\"loans(_client)\">Loans</button>\r\n      <button mat-button disabled>Inactive</button>\r\n    </div>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../client/app/client-detail/client-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\ninput {\n  font-family: 'Roboto'; }\n\nmat-form-field {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nmat-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/client-detail/client-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_client_model__ = __webpack_require__("../../../../../client/app/models/client.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_list_loans_dialog_component__ = __webpack_require__("../../../../../client/app/client-list/loans-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientDetailComponent = (function () {
    function ClientDetailComponent(route, router, dialog, clientService) {
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.clientService = clientService;
        this._client = new __WEBPACK_IMPORTED_MODULE_4__models_client_model__["a" /* ClientModel */]();
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this._client._id = params['id'];
            _this.clientDetails(_this._client);
        });
    };
    ClientDetailComponent.prototype.clientDetails = function (client) {
        var _this = this;
        this.clientService.getClient(client)
            .subscribe(function (data) { return _this._client = data; }, function (error) { return console.log(error); });
    };
    ClientDetailComponent.prototype.loans = function (client) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__client_list_loans_dialog_component__["a" /* LoansDialogComponent */], {
            data: { clientNumber: client.clientNumber }
        });
    };
    ClientDetailComponent.prototype.newLoan1 = function (client) {
        this.router.navigate(['/add-new-loan', { clientNumber: client.clientNumber }]);
    };
    ClientDetailComponent.prototype.newLoan = function (client) {
        this.router.navigate(['/add-new-regular-loan', { id: client._id }]);
    };
    ClientDetailComponent.prototype.update = function (client) {
        console.log(client.clientNumber);
        console.log(client.firstName);
        this.clientService.editClient(client)
            .subscribe(function (data) { return console.dir(data); }, function (error) { return console.dir(error); });
    };
    return ClientDetailComponent;
}());
ClientDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-detail',
        template: __webpack_require__("../../../../../client/app/client-detail/client-detail.component.html"),
        styles: [__webpack_require__("../../../../../client/app/client-detail/client-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _d || Object])
], ClientDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client-detail.component.js.map

/***/ }),

/***/ "../../../../../client/app/client-list/client-list-child.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a (click)=\"openLoansDialog()\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"loans>0\">\r\n  {{loans}}\r\n</a> -->\r\n<!-- <mat-form-field (click)=\"openLoansDialog()\" routerLinkActive=\"active\" *ngIf=\"loans>0\">\r\n  <input matInput [value]=\"loans\" readonly=\"true\">\r\n</mat-form-field> -->\r\n"

/***/ }),

/***/ "../../../../../client/app/client-list/client-list-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loans_dialog_component__ = __webpack_require__("../../../../../client/app/client-list/loans-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientListChildComponent = (function () {
    function ClientListChildComponent(dialog, loanService) {
        this.dialog = dialog;
        this.loanService = loanService;
        this.load = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loans = '0';
        console.log('client-list-child constructor');
        // console.log(this.clientNumber);
    }
    ClientListChildComponent.prototype.ngOnInit = function () {
        console.log('clientNumber: ' + this.clientNumber);
        this.checkLoan(this.clientNumber);
    };
    ClientListChildComponent.prototype.checkLoan = function (clientNumber) {
        var _this = this;
        console.log(clientNumber);
        this.loanService.countLoans(clientNumber)
            .subscribe(function (res) {
            console.log("client-list-child.component : checkLoan : subscribe");
            console.log(res);
            console.dir(res);
            _this.loans = res;
            _this.load.emit(res);
        }, function (error) {
            console.log(error);
            _this.loans = '-1';
        });
        //return clientNumber;
    };
    ClientListChildComponent.prototype.openLoansDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__loans_dialog_component__["a" /* LoansDialogComponent */], {
            data: { clientNumber: this.clientNumber }
        });
    };
    return ClientListChildComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('clientNumber'),
    __metadata("design:type", Object)
], ClientListChildComponent.prototype, "clientNumber", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('load'),
    __metadata("design:type", Object)
], ClientListChildComponent.prototype, "load", void 0);
ClientListChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-list-child',
        template: __webpack_require__("../../../../../client/app/client-list/client-list-child.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loan_service__["a" /* LoanService */]) === "function" && _b || Object])
], ClientListChildComponent);

var _a, _b;
//# sourceMappingURL=client-list-child.component.js.map

/***/ }),

/***/ "../../../../../client/app/client-list/client-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"display: flex\" *ngFor=\"let client of clients\">\r\n  <div style=\"flex: 1\">{{client.clientNumber}}</div>\r\n  <div style=\"flex: 1\">{{client.firstName}}</div>\r\n  <div style=\"flex: 1\">{{client.middleName}}</div>\r\n  <div style=\"flex: 1\">{{client.lastName}}</div>\r\n  <div style=\"flex: 1\"><client-list-child [clientNumber]=\"client.clientNumber\"></client-list-child></div>\r\n</div> -->\r\n\r\n<!-- <div class=\"\">\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n    <ng-container cdkColumnDef=\"clientNumber\">\r\n      <mat-header-cell>Client Number</mat-header-cell>\r\n      <mat-cell>{{ client.clientNumber }}</mat-cell>\r\n    </ng-container>\r\n  </mat-table>\r\n</div> -->\r\n\r\n<div>\r\n  <button mat-raised-button color=\"accent\" routerLink=\"/add-client\">Add Client</button>\r\n</div>\r\n<div style=\"display: flex; flex-wrap: wrap;\" class=\"container\" >\r\n  <div style=\"display: flex\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"seach\" #txtClientFirstName style=\"flex: 1\" [(ngModel)]=\"searchTerm\" (ngModelChange)=\"search()\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n    <!-- <mat-card style=\"flex: 1; max-width: 30rem; border-radius: 0px;\" *ngFor=\"let client of clients\" (click)=\"details(client._id)\"> -->\r\n    <mat-card style=\"flex: 1; max-width: 30rem; border-radius: 0px;\" *ngFor=\"let client of clients\">\r\n        <!-- <mat-card-title>{{ client.lastName }}, {{ client.firstName }}</mat-card-title> -->\r\n      <mat-card-title>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <div fxFlex=\"50\">\r\n              <img (click)=\"details(client._id)\" style=\"height: 50px; border-radius: 50%;\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Icons8_flat_businessman.svg/1024px-Icons8_flat_businessman.svg.png\">\r\n            </div>\r\n            <div fxFlex=\"50\" fxLayoutAlign=\"end\">{{ client.clientNumber }}</div>\r\n          </div>\r\n      </mat-card-title>\r\n\r\n      <mat-card-content>\r\n\r\n        <div fxLayout=\"column\">\r\n\r\n          <div fxLayout=\"row\">\r\n            <span class=\"mat-span-title\">{{ client.lastName }}</span>\r\n          </div>\r\n          <div fxLayout=\"row\">\r\n              <span>{{ client.firstName }} - {{ client.middleName }}</span>\r\n          </div>\r\n  \r\n          <div fxLayout=\"row\">\r\n            <div fxFlex=\"50\">\r\n              <client-list-child [clientNumber]=\"client.clientNumber\" (load)=\"client.loans = $event\"></client-list-child>\r\n              Current Loans: {{ client.loans }}\r\n            </div>\r\n            <div fxFlex=\"50\" fxLayoutAlign=\"end\">\r\n                <mat-icon matSuffix (click)=\"showLoans(client)\">receipt</mat-icon>\r\n            </div> \r\n          </div>\r\n\r\n        </div>\r\n    \r\n      </mat-card-content>\r\n      <!-- <mat-card-actions> -->\r\n          <!-- <client-list-child [clientNumber]=\"client.clientNumber\"></client-list-child> -->\r\n          <!-- <button mat-button (click)=\"details(client._id)\">Details</button> -->\r\n          <!-- <button mat-button (click)=\"showLoans(client)\">Loans</button> -->\r\n      <!-- </mat-card-actions> -->\r\n    </mat-card>  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../client/app/client-list/client-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding-left: 10px;\n  padding-right: 10px; }\n\nmat-card {\n  min-width: 17rem;\n  margin-bottom: 10px;\n  width: 100%;\n  background-color: #a2d200; }\n\nmat-form-field {\n  min-width: 200px;\n  max-width: 300px;\n  width: 100%; }\n  mat-form-field input {\n    width: 300px; }\n  mat-form-field mat-input-placeholder {\n    width: 100%; }\n\n#mat-span-title {\n  font-size: 30px;\n  font-weight: 700; }\n\n.mat-span-title {\n  font-size: 30px;\n  font-weight: 700; }\n\n.flex-container-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 300px; }\n\n.loan-dialog .mat-dialog-container {\n  max-width: none;\n  width: 100vw;\n  height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/client-list/client-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchClientFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_client_model__ = __webpack_require__("../../../../../client/app/models/client.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loans_dialog_component__ = __webpack_require__("../../../../../client/app/client-list/loans-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { ClientListChildComponent } from './client-list-child.component';
var ClientListComponent = (function () {
    function ClientListComponent(http, router, dialog, auth, clientService, loanService) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.auth = auth;
        this.clientService = clientService;
        this.loanService = loanService;
        this.clients = [];
        this.clientsCopy = [];
        this.clientNumber = "AnCdEf";
        this.client = new __WEBPACK_IMPORTED_MODULE_7__models_client_model__["a" /* ClientModel */]();
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.loggedIn) {
            this.clientService.getClients()
                .subscribe(function (data) {
                _this.clients = data;
                _this.clientsCopy = data;
                _this.dataSource = data;
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    ClientListComponent.prototype.details = function (id) {
        this.router.navigate(['/client-detail', { id: id }]);
    };
    ClientListComponent.prototype.save = function () {
        var _this = this;
        console.log(this.client.firstName);
        this.clientService.addClient(this.client)
            .subscribe(function (res) {
            // console.log('new client was added');
            _this.router.navigate(['client-list']);
        }, function (error) { return console.log(error); });
    };
    // openLoansDialog(clientNumber) {
    //   console.log(clientNumber);
    //   const dialogConfig = new MatDialogConfig();
    //   // dialogConfig.width = "400px";
    //   dialogConfig.data = { clientNumber: clientNumber };
    //   this.dialog.open(LoansDialogComponent, dialogConfig
    //     // width: '400px',
    //     // dialogConfig,
    //     // data: { clientNumber: clientNumber },
    //   );
    // }
    ClientListComponent.prototype.loans = function (event) {
        console.log('loans');
        console.dir(event);
        // this.loan = event;
        // this.client.loans = event;
    };
    ClientListComponent.prototype.showLoans = function (client) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__loans_dialog_component__["a" /* LoansDialogComponent */], {
            // width: '400px',
            // data: { clientNumber: client.clientNumber }
            data: { client: client }
        });
    };
    ClientListComponent.prototype.search = function () {
        var term = this.searchTerm;
        this.clients = this.clientsCopy.filter(function (tag) {
            return tag.firstName.toLowerCase().indexOf(term.toLowerCase()) >= 0;
            // return tag.firstName.indexOf(term) >= 0;
        });
    };
    return ClientListComponent;
}());
ClientListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-list',
        template: __webpack_require__("../../../../../client/app/client-list/client-list.component.html"),
        styles: [__webpack_require__("../../../../../client/app/client-list/client-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_client_service__["a" /* ClientService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_loan_service__["a" /* LoanService */]) === "function" && _f || Object])
], ClientListComponent);


var SearchClientFilterPipe = (function () {
    function SearchClientFilterPipe() {
    }
    SearchClientFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        return items.filter(function (it) { return it[field] == value; });
    };
    return SearchClientFilterPipe;
}());
SearchClientFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchClient'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SearchClientFilterPipe);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=client-list.component.js.map

/***/ }),

/***/ "../../../../../client/app/client-list/loans-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"primary-color\">Client Loans</h1>\r\n<mat-dialog-content class=\"accent-color\">\r\n  <!-- <header style=\"display: flex\">\r\n    <div style=\"flex: 1\">Loan Id</div>\r\n    <div style=\"flex: 1\">Application Date</div>\r\n    <div style=\"flex: 1\">Principal</div>\r\n    <div style=\"flex: 1\">Interest (%)</div>\r\n  </header>\r\n  <div style=\"display: flex\" *ngFor=\"let loan of loans\">\r\n    <div style=\"flex: 1\">{{loan.loanId}}</div>\r\n    <div style=\"flex: 1\">{{loan.applicationDate | date: 'MM/dd/yyyy'}}</div>\r\n    <div style=\"flex: 1\">{{loan.principalAmount}}</div>\r\n    <div style=\"flex: 1\"><a (click)=\"gotoDetails(loan)\" class=\"nav-item nav-link\" routerLinkActive=\"active\">{{loan.interestRate}}</a></div>\r\n  </div> -->\r\n  <!-- <div style=\"display: flex; flex-wrap: wrap\">\r\n    <mat-card *ngFor=\"let loan of loans\" style=\"flex: 1; max-width: 20rem\">\r\n      <mat-card-title>{{ loan.loanId }}</mat-card-title>\r\n      <mat-card-content>\r\n        <span matLine>{{ loan.applicationDate | date: 'MM/dd/yyyy' }}</span>\r\n        <span matLine>{{ loan.principalAmount }}</span>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-raised-button color=\"accent\" mat-dialog-close (click)=\"gotoDetails(loan)\">Details</button>\r\n      </mat-card-actions>\r\n    </mat-card> \r\n  </div> -->\r\n\r\n  <!-- <div style=\"display: flex\" *ngFor=\"let loan of loans\"> -->\r\n    <!-- <div style=\"flex: 1\">{{loan.loanId}}</div>\r\n    <div style=\"flex: 1\">{{loan.applicationDate | date: 'MM/dd/yyyy'}}</div>\r\n    <div style=\"flex: 1\">{{loan.principalAmount}}</div>\r\n    <div style=\"flex: 1\"><a (click)=\"gotoDetails(loan)\" class=\"nav-item nav-link\" routerLinkActive=\"active\">{{loan.interestRate}}</a></div> -->\r\n  \r\n    <!-- <div fxFlex fxLayout=\"column\">\r\n      <div>{{ loan.principalAmount }}</div>\r\n    </div>\r\n\r\n  </div> -->\r\n\r\n  <div fxFlex fxLayout=\"column\">\r\n\r\n  <div fxFlex *ngFor=\"let loan of loans\">\r\n\r\n    <!-- <div fxFlex fxLayout=\"column\">\r\n    <div fxFlex=\"40\" fxLayout=\"column\" style=\"flex: 0\">\r\n      <div>{{ loan.loanId }}</div>\r\n      <div>{{ loan.applicationDate | date: 'MM/dd/yyyy' }}</div>  \r\n    </div>\r\n\r\n    <div fxFlex=\"60\" fxLayout=\"column\">\r\n      <loans-dialog-child [loanId]=\"loan.loanId\" (loan)=\"loan.totalPaymentAmount = $event\"></loans-dialog-child>\r\n      <div>Principal:  {{ loan.principalAmount }}</div>  \r\n      <div>Payments: {{ loan.totalPaymentAmount }}</div>  \r\n      <div>Balance: \r\n          {{ getBalance(loan.principalAmount, loan.totalPaymentAmount) }}\r\n      </div>\r\n    </div>\r\n    </div> -->\r\n\r\n    <loans-dialog-child [loanId]=\"loan.loanId\" (loan)=\"loan.totalPaymentAmount = $event\"></loans-dialog-child>\r\n\r\n    <mat-card>\r\n      <mat-card-content fxFlex fxLayoutAlign=\"start\" fxLayout=\"column\" style=\"height: 120px\">\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n          <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n            <div fxFlex class=\"loanId\">{{ loan.loanId }}</div>\r\n            <div fxFlex>{{ loan.applicationDate }}</div>\r\n            <!-- <div fxFlex fxLayoutAlign=\"start bottom\">\r\n                <button mat-button mat-dialog-close (click)=\"gotoDetails(loan)\">Details</button>\r\n              </div> -->\r\n            </div>\r\n          <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n            <div fxFlex>Principal: {{ loan.principalAmount }}</div>\r\n            <div fxFlex>Payments: {{ loan.totalPaymentAmount }}</div>\r\n            <div fxFlex>Balance: {{ getBalance(loan.principalAmount, loan.totalPaymentAmount) }}</div>\r\n            <div fxFlex fxLayoutAlign=\"end\">\r\n              <mat-icon (click)=\"gotoDetails(loan)\" mat-dialog-close>assignment</mat-icon>\r\n              <mat-icon (click)=\"showAddPayment(loan)\" mat-dialog-close>add_circle</mat-icon>\r\n              <mat-icon (click)=\"showPaymentSchedule(loan)\" mat-dialog-close>date_range</mat-icon>\r\n              <mat-icon (click)=\"showLedger(loan)\" mat-dialog-close>date_range</mat-icon>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- <div fxFlex=\"40\" fxLayoutAlign=\"bottom\"> -->\r\n          <!-- <button mat-button mat-dialog-close (click)=\"gotoDetails(loan)\">Details</button>\r\n          <button mat-button (click)=\"showAddPayment(loan)\">Add Payment</button> -->\r\n          <!-- <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end bottom\">\r\n            <mat-icon (click)=\"gotoDetails(loan)\" mat-dialog-close>assignment</mat-icon>\r\n            <mat-icon (click)=\"showAddPayment(loan)\" mat-dialog-close>add_circle</mat-icon>\r\n            <mat-icon (click)=\"showPaymentSchedule(loan)\" mat-dialog-close>date_range</mat-icon>\r\n          </div>\r\n        </div> -->\r\n      </mat-card-content>\r\n      <!-- <mat-card-actions>\r\n        <button mat-button mat-dialog-close (click)=\"gotoDetails(loan)\">Details</button>\r\n        <button mat-button (click)=\"showAddPayment(loan)\">Add Payment</button>\r\n      </mat-card-actions> -->\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n  <!-- <div> -->\r\n    <!-- <mat-card *ngFor=\"let loan of loans\" style=\"width: 100%\">\r\n\r\n      <mat-card-content>\r\n\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"loan number\" [value]=\"loan.loanId\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>  \r\n    \r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"loan proceeds\" [value]=\"loan.loanProceed\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>  \r\n        <div style=\"display: flex\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"apply date\" [value]=\"loan.applicationDate | date: 'MM/dd/yyyy'\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>        \r\n        <div style=\"display: flex\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Principal\" [value]=\"loan.principalAmount\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>  \r\n\r\n        <div style=\"display: flex\">\r\n          <mat-form-field>\r\n            <loans-dialog-child [loanId]=\"loan.loanId\" (loan)=\"loan.totalPaymentAmount = $event\"></loans-dialog-child>\r\n            <input matInput placeholder=\"payments\" [value]=\"loan.totalPaymentAmount\" readonly=\"true\">\r\n            <mat-icon matSuffix>receipt</mat-icon>\r\n          </mat-form-field>\r\n        </div>  \r\n          \r\n        <div style=\"display: flex\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"balance\" [value]=\"getBalance(loan.principalAmount, loan.totalPaymentAmount)\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>  \r\n  \r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-raised-button color=\"accent\" mat-dialog-close (click)=\"gotoDetails(loan)\">Details</button>\r\n        <button mat-button (click)=\"showAddPayment(loan)\">Add Payment</button>\r\n      </mat-card-actions>\r\n    </mat-card>  -->\r\n  <!-- </div> -->\r\n\r\n\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button color=\"primary\" mat-dialog-close>\r\n    Close\r\n  </button>\r\n  <button mat-button (click)=\"showNewLoan()\" mat-dialog-close>\r\n      New Loan\r\n    </button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../client/app/client-list/loans-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".primary-color {\n  font-family: 'Roboto'; }\n\n.loanId {\n  font-size: 18px;\n  font-weight: bold; }\n\nmat-card {\n  width: 100%; }\n  mat-card mat-card-content {\n    margin-left: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/client-list/loans-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_loan_model__ = __webpack_require__("../../../../../client/app/models/loan.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_loan_payment_dialog_client_loan_payment_dialog_component__ = __webpack_require__("../../../../../client/app/client-loan-payment-dialog/client-loan-payment-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LoansDialogComponent = (function () {
    function LoansDialogComponent(router, data, loanService, dialog, dialogRef) {
        this.router = router;
        this.data = data;
        this.loanService = loanService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.loans = [];
        this.loanPayments = 0;
        console.log('constructor was called');
    }
    LoansDialogComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit was called');
        console.log('data: ' + this.data);
        console.dir('data dir: ' + this.data);
        console.dir('clientNumber: ' + this.data.client.clientNumber);
        this.client = this.data.client;
        this.clientLoans(this.data.client.clientNumber);
    };
    LoansDialogComponent.prototype.clientLoans = function (clientNumber) {
        var _this = this;
        this.loan = new __WEBPACK_IMPORTED_MODULE_3__models_loan_model__["a" /* LoanModel */]();
        this.loan.clientNumber = clientNumber;
        this.loanService.getLoans(this.loan)
            .subscribe(function (data) { return _this.loans = data; }, function (error) { return console.log(error); });
    };
    // load(event) {
    //   console.log('getLoanPayments');
    //   console.log(event);
    //   this.loanPayments = 100;
    // }
    LoansDialogComponent.prototype.loanEvent = function (event) {
        console.log('loans-dialog: loanEvent: ' + event);
        this.loanPayments = event;
    };
    LoansDialogComponent.prototype.getBalance = function (principal, payment) {
        return principal - payment;
    };
    LoansDialogComponent.prototype.gotoDetails = function (loan) {
        console.log('loanId: ' + loan);
        console.dir(loan);
        this.router.navigate(['/loan-details', { id: loan._id }]);
    };
    LoansDialogComponent.prototype.showAddPayment = function (loan) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__client_loan_payment_dialog_client_loan_payment_dialog_component__["a" /* ClientLoanPaymentDialogComponent */], {
            data: { loan: loan }
        });
    };
    LoansDialogComponent.prototype.showNewLoan = function () {
        this.router.navigate(['/add-new-regular-loan', { id: this.client._id }]);
    };
    LoansDialogComponent.prototype.showPaymentSchedule = function (loan) {
        this.dialogRef.close();
        this.router.navigate(['/payment-schedule-list', { loanId: loan.loanId }]);
    };
    LoansDialogComponent.prototype.showLedger = function (loan) {
        this.dialogRef.close();
        this.router.navigate(['/loan-transaction-list', { loanId: loan.loanId }]);
    };
    return LoansDialogComponent;
}());
LoansDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loans-dialog',
        template: __webpack_require__("../../../../../client/app/client-list/loans-dialog.component.html"),
        styles: [__webpack_require__("../../../../../client/app/client-list/loans-dialog.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_loan_service__["a" /* LoanService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */]) === "function" && _d || Object])
], LoansDialogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=loans-dialog.component.js.map

/***/ }),

/***/ "../../../../../client/app/client-loan-payment-dialog/client-loan-payment-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\">\r\n  <div flFlex>\r\n    <div fxLayout=\"row\">\r\n\r\n      <mat-dialog-content>\r\n\r\n      <div fxLayout=\"column\">\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"client number\" [value]=\"client.clientNumber\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"client name\" [value]=\"clientName\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"date\" [(ngModel)]=\"todayDate\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"principal amount\" [(ngModel)]=\"loan.principalAmount\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n  \r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"balance\" [(ngModel)]=\"loan.balanceAmount\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"last payment date\" [(ngModel)]=\"lastPaymentDate\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"interest %\" [(ngModel)]=\"payment.interestRate\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"interest amount\" [value]=\"interestAmount()\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"salary\" [(ngModel)]=\"payment.cashWithdrawal\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"less interest\" [value]=\"lessInterestAmount()\">\r\n          </mat-form-field>\r\n        </div> -->\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"principal\" [(ngModel)]=\"payment.paymentAmount\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"other item\" [(ngModel)]=\"payment.miscellaneousItem\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n          \r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"other amount\" [(ngModel)]=\"payment.miscellaneousAmount\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"collection\" [value]=\"collection()\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n        <mat-icon>person</mat-icon>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"cash out\" [value]=\"cashOut()\" readonly=\"true\">\r\n        </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"new balance\" [value]=\"newBalance()\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"loan id\" [(ngModel)]=\"loan.loanId\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <!-- <mat-icon>person</mat-icon>\r\n          <mat-form-field> -->\r\n            <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n            <button mat-raised-button [mat-dialog-close]>Close</button>\r\n          <!-- </mat-form-field> -->\r\n        </div>\r\n\r\n      </div>\r\n\r\n      </mat-dialog-content>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/client-loan-payment-dialog/client-loan-payment-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\nmd-input-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nmd-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n#inputEntry {\n  background-color: yellow;\n  background: yellow; }\n\n.input-readonly {\n  background-color: yellow;\n  background: yellow; }\n\n.input-editable {\n  background-color: yellow; }\n\n.input-editable1 {\n  background: yellow; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/client-loan-payment-dialog/client-loan-payment-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientLoanPaymentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_loan_payment_model__ = __webpack_require__("../../../../../client/app/models/loan-payment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_loan_transaction_model__ = __webpack_require__("../../../../../client/app/models/loan-transaction.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_client_payment_service__ = __webpack_require__("../../../../../client/app/services/client-payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_loan_model__ = __webpack_require__("../../../../../client/app/models/loan.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_client_service__ = __webpack_require__("../../../../../client/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_loan_transaction_service__ = __webpack_require__("../../../../../client/app/services/loan-transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_client_model__ = __webpack_require__("../../../../../client/app/models/client.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var ClientLoanPaymentDialogComponent = (function () {
    function ClientLoanPaymentDialogComponent(route, paymentService, loanService, clientService, datepipe, loanTransactionService, data) {
        this.route = route;
        this.paymentService = paymentService;
        this.loanService = loanService;
        this.clientService = clientService;
        this.datepipe = datepipe;
        this.loanTransactionService = loanTransactionService;
        this.data = data;
        this.payment = new __WEBPACK_IMPORTED_MODULE_4__models_loan_payment_model__["a" /* LoanPaymentModel */]();
        // sample data;
        // this.payment.clientNumber = "PR0001";
        // this.payment.balanceAmount = 100000;
        // this.payment.interestRate = 2.5;
        // this.clientName = "Precy Evangelista";
        // this.todayDate = "2/Nov/2018";
        this.todayDate = new Date().toDateString();
        console.log('client-loan-dialog:constructor:data: ');
        console.dir(this.data);
        this.getClientLoanDetails(this.data.loan);
    }
    ClientLoanPaymentDialogComponent.prototype.ngOnInit = function () {
    };
    ClientLoanPaymentDialogComponent.prototype.save = function () {
        var _this = this;
        var creditAmount = 0;
        var newBalance = this.payment.newBalanceAmount;
        this.loanTransaction = new __WEBPACK_IMPORTED_MODULE_5__models_loan_transaction_model__["a" /* LoanTransactionModel */]();
        console.log(this.loan.balanceAmount);
        console.log(this.payment.newBalanceAmount);
        // this.payment.interestAmount = this
        this.payment.balanceAmount = Number(this.loan.balanceAmount);
        this.payment.paymentDate = new Date();
        this.loan.balanceAmount = this.payment.newBalanceAmount;
        // this.loan.balanceAmount = this.payment.balanceAmount;
        this.paymentService.addPayment(this.payment)
            .subscribe(function (res) {
            console.log('successfully saved!');
            _this.loanService.editLoan(_this.loan)
                .subscribe(function (res) {
                console.log('loan has been updated');
            }, function (error) { return console.log(error); });
            _this.loanTransaction.loanId = String(_this.loan.loanId);
            _this.loanTransaction.clientNumber = String(_this.loan.clientNumber);
            _this.loanTransaction.transactionId = "";
            _this.loanTransaction.transactionDate = new Date();
            _this.loanTransaction.transactionType = "PAYMENT";
            _this.loanTransaction.transactionDescription = "Loan Payment";
            _this.loanTransaction.salaryAmount = _this.payment.cashWithdrawal;
            _this.loanTransaction.interestAmount = _this.payment.interestAmount;
            _this.loanTransaction.releaseAmount = 0;
            _this.loanTransaction.paymentAmount = _this.payment.paymentAmount;
            _this.loanTransaction.otherDescription = _this.payment.miscellaneousItem;
            _this.loanTransaction.otherAmount = _this.payment.miscellaneousAmount;
            _this.loanTransaction.cashoutAmount = _this.payment.cashOut;
            _this.loanTransaction.balanceAmount = newBalance;
            _this.loanTransaction.debitAmount = 0;
            creditAmount = Number.parseFloat(_this.payment.interestAmount.toString())
                + Number.parseFloat(_this.payment.paymentAmount.toString())
                + Number.parseFloat(_this.payment.miscellaneousAmount.toString());
            _this.loanTransaction.creditAmount = creditAmount;
            _this.loanTransactionService.add(_this.loanTransaction)
                .subscribe(function (res) {
                console.log('loan transaction was saved for loan repayments ');
                console.log(res);
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    ClientLoanPaymentDialogComponent.prototype.collection = function () {
        var collectionAmount;
        collectionAmount = Number.parseFloat(this.payment.interestAmount.toString())
            + Number.parseFloat(this.payment.paymentAmount.toString())
            + Number.parseFloat(this.payment.miscellaneousAmount.toString());
        return collectionAmount;
    };
    ClientLoanPaymentDialogComponent.prototype.test = function () {
        return 100.00;
    };
    ClientLoanPaymentDialogComponent.prototype.getClientLoanDetails = function (loan) {
        var _this = this;
        this.client = new __WEBPACK_IMPORTED_MODULE_11__models_client_model__["a" /* ClientModel */]();
        this.client.clientNumber = loan.clientNumber;
        this.clientService.getClientByClientNumber(this.client)
            .subscribe(function (data) {
            _this.client = data[0];
            console.dir(_this.client);
            _this.clientName = _this.client.lastName + ', ' + _this.client.firstName;
            _this.payment.clientNumber = _this.client.clientNumber;
        }, function (error) { return console.log(error); });
        this.loan = new __WEBPACK_IMPORTED_MODULE_8__models_loan_model__["a" /* LoanModel */]();
        this.loanService.getLoan(loan)
            .subscribe(function (data) {
            _this.loan = data;
            _this.payment.loanId = _this.loan.loanId;
            // get loan last payment
            _this.paymentService.getLoanPayments2(_this.loan.loanId)
                .subscribe(function (data) {
                console.log('loan last payment');
                console.dir(data);
                try {
                    _this.lastPaymentDate = _this.datepipe.transform(data[0].paymentDate, 'dd-MMM-yyyy');
                }
                catch (e) {
                    _this.lastPaymentDate = null;
                }
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    ClientLoanPaymentDialogComponent.prototype.interestAmount = function () {
        var balance;
        var rate;
        var amount;
        // balance = this.payment.balanceAmount;
        balance = this.loan.balanceAmount;
        rate = this.payment.interestRate;
        // rate = this.loan.interestRate;
        amount = Number(balance) * (Number(rate) / 100);
        this.payment.interestAmount = Number(balance) * (Number(rate) / 100);
        return this.payment.interestAmount;
    };
    ClientLoanPaymentDialogComponent.prototype.lessInterestAmount = function () {
        // let balance: Number = this.payment.balanceAmount;
        var balance = this.loan.balanceAmount;
        var cashWithdrawal = this.payment.cashWithdrawal;
        var interestAmount = this.payment.interestAmount;
        var lessInterestAmount;
        this.payment.lessInterestAmount = Number(cashWithdrawal) - Number(interestAmount);
        return this.payment.lessInterestAmount;
    };
    ClientLoanPaymentDialogComponent.prototype.cashOut = function () {
        var lessInterest = this.lessInterestAmount();
        var paymentAmount = this.payment.paymentAmount;
        var cashOut = Number(lessInterest) - Number(paymentAmount) - this.payment.miscellaneousAmount;
        this.payment.cashOut = cashOut;
        return cashOut;
    };
    ClientLoanPaymentDialogComponent.prototype.newBalance = function () {
        // let balance: Number = this.payment.balanceAmount;
        var balance = this.loan.balanceAmount;
        var paymentAmount = this.payment.paymentAmount;
        this.payment.newBalanceAmount = Number(balance) - Number(paymentAmount);
        return this.payment.newBalanceAmount;
    };
    return ClientLoanPaymentDialogComponent;
}());
ClientLoanPaymentDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'client-loan-payment-dialog',
        template: __webpack_require__("../../../../../client/app/client-loan-payment-dialog/client-loan-payment-dialog.component.html"),
        styles: [__webpack_require__("../../../../../client/app/client-loan-payment-dialog/client-loan-payment-dialog.component.scss")]
    }),
    __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_client_payment_service__["a" /* ClientPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_client_payment_service__["a" /* ClientPaymentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_loan_service__["a" /* LoanService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_client_service__["a" /* ClientService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__services_loan_transaction_service__["a" /* LoanTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_loan_transaction_service__["a" /* LoanTransactionService */]) === "function" && _f || Object, Object])
], ClientLoanPaymentDialogComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=client-loan-payment-dialog.component.js.map

/***/ }),

/***/ "../../../../../client/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-wrap: wrap\" fxLayout=\"column\">\r\n    \r\n  <div class=\"feature\">\r\n    <!-- <div style=\"min-width: 80vh; min-height: 75vh; background-color:coral; margin: 10px 10px 10px 10px\">\r\n      APPLY WITH CONFIDENCE\r\n    </div>\r\n\r\n    <div style=\"min-width: 80vh; min-height: 75vh; background-color:coral; margin: 10px 10px 10px 10px\">\r\n      APPLY WITH CONFIDENCE\r\n    </div> -->\r\n\r\n    <div flFlex>\r\n\r\n      <div fxLayout=\"row\">\r\n\r\n        <!-- <div fxLayout=\"column\"> -->\r\n\r\n        <mat-card>\r\n\r\n          <mat-card-title>Login</mat-card-title>\r\n\r\n          <mat-card-content fxLayout=\"column\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n\r\n            <div>\r\n              <mat-icon>lock</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"email\" placeholder=\"email address\"readonly=\"false\">\r\n              </mat-form-field>            \r\n            </div>\r\n\r\n            <div>\r\n              <mat-icon></mat-icon>\r\n              <mat-form-field>\r\n                <input matInput formControlName=\"password\" placeholder=\"password\" readonly=\"false\" type=\"password\">\r\n              </mat-form-field>            \r\n            </div>\r\n\r\n            <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n\r\n          </form>\r\n        </mat-card-content>\r\n\r\n        </mat-card>\r\n\r\n        <!-- </div> -->\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div fxLayout=\"column\">\r\n          <div fxFlex>\r\n            <mat-icon>person</mat-icon>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"login\" [(ngModel)]=\"clientName\" readonly=\"false\">\r\n            </mat-form-field>            \r\n          </div>\r\n          <div fxFlex>\r\n              <mat-icon>person</mat-icon>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"login\" [(ngModel)]=\"clientName\" readonly=\"false\">\r\n            </mat-form-field>            \r\n          </div>\r\n    </div> -->\r\n\r\n  </div>\r\n\r\n  <div class=\"eligible\" fxLayout=\"column\">\r\n  <!-- <div style=\"background-color:#8510C0; justify-content: center; align-items: center; min-height: 50vh; width: 100%; display: flex; flex-wrap: wrap;\"> -->\r\n\r\n    <!-- <div style=\"background-color:aqua; margin-bottom: 0px;\">\r\n      <h1>you are eligible if</h1>\r\n    </div> -->\r\n    <h1>You are Eligible if</h1>\r\n    \r\n    <div>\r\n    <!-- <div style=\"width: 100%; display: flex; flex-wrap: wrap; justify-content: center;\"> -->\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div style=\"width: 100%;\">\r\n            <!-- <img src=\"https://www.w3schools.com/w3css/img_avatar3.png\" style=\"max-width: 60px\"> -->\r\n            <mat-icon>person</mat-icon>\r\n            <!-- <div>You are 21 y/o or above</div> -->\r\n            <h2>21 y/o or above, but not 70 y/o upon loan maturity</h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div >\r\n            <mat-icon>home</mat-icon>\r\n            <h2>A Filipino citizen, bills on his/her name</h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div >\r\n            <mat-icon>store</mat-icon>\r\n            <h2>Self-employed operating a legitimate business that has been profitable at least 3 years</h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n        \r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div >\r\n            <mat-icon>attach_money</mat-icon>\r\n            <h2>Employed for at least 1 year earning a gross monthly income of Php15,000</h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"how-it-works\" fxLayout=\"column\">\r\n      \r\n    <h1>How LendUp Works</h1>\r\n    <div style=\"width: 100%; display: flex; flex-wrap: wrap; justify-content: center;\">\r\n      <mat-card>\r\n          <mat-card-headers>\r\n            <mat-card-title>Step 1</mat-card-title>\r\n          </mat-card-headers>\r\n    \r\n            <mat-card-content>\r\n          <div>\r\n            <h2>Accomplished application form which includes name and contact details. </h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card>\r\n        <mat-card-headers>\r\n          <mat-card-title>Step 2</mat-card-title>\r\n        </mat-card-headers>\r\n  \r\n        <mat-card-content>\r\n          <div >\r\n            <h2>Choose from several options and choose the best one</h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card>\r\n        <mat-card-headers>\r\n          <mat-card-title>Step 3</mat-card-title>\r\n        </mat-card-headers>\r\n\r\n        <mat-card-content>\r\n          <div >\r\n            <h2>We process your submitted loan application </h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n        \r\n      <mat-card>\r\n        <mat-card-headers>\r\n          <mat-card-title>Step 4</mat-card-title>\r\n        </mat-card-headers>\r\n\r\n        <mat-card-content>\r\n          <div >\r\n            <h2>Collect your loan after approval</h2>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n      \r\n  <!-- footer -->\r\n  <div class=\"footer\">\r\n  <!-- <div style=\"background-color:#545454; justify-content: center; align-items: center; min-height: 30vh; width: 100%; display: flex; flex-wrap: wrap;\"> -->\r\n      \r\n    <div>\r\n      <mat-card>\r\n        <mat-card-headers>\r\n          <mat-card-subtitle>ABOUT US</mat-card-subtitle>\r\n        </mat-card-headers>\r\n        <mat-card-content>\r\n          <p>Home</p>\r\n          <p>Our Story</p>\r\n          <p>Branches</p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card style=\"max-width: 25vh; margin: 10px 10px 10px 10px;\">\r\n        <mat-card-headers>\r\n          <mat-card-subtitle>PRODUCTS</mat-card-subtitle>\r\n        </mat-card-headers>\r\n        <mat-card-content>\r\n          <p>Personal Loan</p>\r\n          <p>Business Loan</p>\r\n          <p>Salary Loan</p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card style=\"max-width: 25vh; margin: 10px 10px 10px 10px;\">\r\n        <mat-card-headers>\r\n          <mat-card-subtitle>TOOLS</mat-card-subtitle>\r\n        </mat-card-headers>\r\n        <mat-card-content>\r\n          <p>Loan</p>\r\n          <p>Calculator</p>\r\n          <p>Personal Loan</p>\r\n          <p>Business Loan</p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card style=\"max-width: 25vh; margin: 10px 10px 10px 10px;\">\r\n        <mat-card-headers>\r\n          <mat-card-subtitle>GUIDES</mat-card-subtitle>\r\n        </mat-card-headers>\r\n        <mat-card-content>\r\n          <p>Personal Loan</p>\r\n          <p>Business Loan</p>\r\n          <p>Salary Loan</p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <mat-card style=\"max-width: 25vh; margin: 10px 10px 10px 10px;\">\r\n        <mat-card-headers>\r\n          <mat-card-subtitle>CONNECT WITH US</mat-card-subtitle>\r\n        </mat-card-headers>\r\n        <mat-card-content>\r\n          <mat-icon>facebook</mat-icon>\r\n          <mat-icon>instagram</mat-icon>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n      \r\n\r\n</div>\r\n    "

/***/ }),

/***/ "../../../../../client/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-input-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 150px; }\n\nmat-form-field {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 200px;\n  max-width: 300px;\n  width: 100%; }\n\n.feature {\n  background-color: #fafafa;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 500px;\n  height: 500px;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background-image: url(\"/assets/lu_dash_04.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center; }\n  .feature div {\n    margin-left: 20px;\n    margin-right: 20px;\n    max-width: 300px; }\n    .feature div div {\n      width: 100%; }\n      .feature div div div div mat-button {\n        padding-left: 5px;\n        padding-right: 5px; }\n  .feature h1 {\n    opacity: 0;\n    font-family: 'Roboto';\n    font-size: 48pt;\n    color: #fafafa; }\n\n.feature\ndiv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.eligible {\n  background-color: #fafafa;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 50vh;\n  height: 80vh;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .eligible div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .eligible div mat-card {\n      max-width: 25vh;\n      height: 25vh;\n      margin-top: 5px;\n      margin-left: 10px;\n      margin-right: 10px;\n      margin-bottom: 5px; }\n      .eligible div mat-card mat-card-content div mat-icon {\n        font-size: 80px;\n        width: 100px;\n        height: 60px;\n        margin-bottom: 10px;\n        color: #FF4499; }\n      .eligible div mat-card mat-card-content div h2 {\n        font-family: Quicksand;\n        color: #545454;\n        font-weight: 400;\n        font-size: 14pt; }\n    .eligible div div {\n      margin-top: 30px; }\n  .eligible h1 {\n    font-family: Quicksand;\n    font-size: 2em; }\n\n.how-it-works {\n  background-color: #FAFAFA;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 50vh;\n  height: 80vh;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .how-it-works div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .how-it-works div mat-card {\n      max-width: 25vh;\n      height: 25vh;\n      margin-top: 5px;\n      margin-left: 10px;\n      margin-right: 10px;\n      margin-bottom: 5px; }\n      .how-it-works div mat-card mat-card-content div mat-icon {\n        font-size: 80px;\n        width: 100px;\n        height: 60px;\n        margin-bottom: 10px;\n        color: #5E5E5E; }\n      .how-it-works div mat-card mat-card-content div h2 {\n        font-family: Quicksand;\n        color: #545454;\n        font-weight: 400;\n        font-size: 14pt; }\n    .how-it-works div div {\n      margin-top: 30px; }\n  .how-it-works h1 {\n    font-family: Quicksand; }\n\n.footer {\n  background-color: #545454;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 30vh;\n  height: 50vh;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .footer div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .footer div mat-card {\n      width: 20vh;\n      max-width: 25vh;\n      margin: 10px 10px 10px 10px;\n      color: white;\n      background-color: #545454;\n      box-shadow: none; }\n      .footer div mat-card mat-card-headers mat-card-subtitle {\n        font-weight: 600;\n        color: white; }\n\n.check {\n  background-color: #545454;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 30vh;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_loan_application_model__ = __webpack_require__("../../../../../client/app/models/loan-application.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6)]);
        this.occupation = "";
        this.loanApplication = new __WEBPACK_IMPORTED_MODULE_5__models_loan_application_model__["a" /* LoanApplicationModel */]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    Object.defineProperty(HomeComponent.prototype, "isOccupationSelfEmployed", {
        // occupationSelfEmployed() {
        //   console.log(this.occupation);
        //   if (this.occupation == "self-employed") {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
        get: function () {
            return this.occupation == "self-employed";
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.test = function () {
        console.log(this.occupation);
        console.log(this.occupation == "self-employed");
        // console.log(this.occupationSelfEmployed());
    };
    HomeComponent.prototype.videoStart = function () {
        var video = this.hardwareVideo.nativeElement;
        var n = navigator;
        n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        n.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
        // NOTE: For Video + Audio
        // n.mediaDevices.getUserMedia({video: true, audio: true}).then(function(stream) {
        //     video.src = window.URL.createObjectURL(stream);
        //     video.play();
        // });
    };
    HomeComponent.prototype.snapshot = function () {
        var canvas = this.canvasVideo.nativeElement;
        var video = this.hardwareVideo.nativeElement;
        var context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, 640, 480);
    };
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/client-list']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hardwareVideo'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "hardwareVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvasser'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "canvasVideo", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("../../../../../client/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../client/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../client/app/loan-details/loan-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\">\r\n  <div fxFlex>\r\n      <div fxLayout=\"row\">\r\n          <div fxFlex fxLayout=\"column\">\r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"client number\" [value]=\"loan.clientNumber\" readonly=\"true\">\r\n              </mat-form-field>\r\n            </div>            \r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"loan id\" [value]=\"loan.loanId\" readonly=\"true\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n                <mat-icon matPrefix>person</mat-icon>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"loan amount\" [value]=\"loan.principalAmount\" readonly=\"true\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n                <mat-icon matPrefix>person</mat-icon>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"interest rate\" [value]=\"loan.interestRate\" readonly=\"true\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"number of payments\" [value]=\"loan.numberOfPayments\" readonly=\"true\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxFlex fxLayout=\"column\">\r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"loan type\" [value]=\"loan.loanTypeId\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n                <mat-icon matPrefix>person</mat-icon>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"payment type\" [value]=\"loan.paymentTypeId\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"application date\" [value]=\"loan.applicationDate | date: 'MM/dd/yyyy'\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"approve date\" [value]=\"loan.loanApproveDate | date: 'MM/dd/yyyy'\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"release date\" [value]=\"loan.releaseDate | date: 'MM/dd/yyyy'\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex>\r\n              <mat-icon matPrefix>person</mat-icon>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"due date\" [value]=\"loan.dueDate | date: 'MM/dd/yyyy'\">\r\n              </mat-form-field>\r\n            </div>\r\n    \r\n          </div> <!-- div fxFlex fxLayout=\"column\" -->\r\n      </div>        \r\n  </div>  \r\n  <!-- <div fxFlex>\r\n    <div style=\"display: flex\" *ngFor=\"let payment of payments\">\r\n      <div style=\"flex: 1\">{{payment.dueAmount}}</div>\r\n      <div style=\"flex: 1\">{{payment.dueDate | date: 'mm/dd/yyyy'}}</div>\r\n      <div style=\"flex: 1\">{{payment.balanceAmount}}</div>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div style=\"display: flex; margin-top: 5vh\" fxLayoutAlign=\"center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"addPaymentDialog()\">Add Payment</button>\r\n    <button mat-raised-button (click)=\"paymentsDialog()\">Payments</button>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../client/app/loan-details/loan-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\nmd-input-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nmd-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/loan-details/loan-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loan_service__ = __webpack_require__("../../../../../client/app/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_payment_service__ = __webpack_require__("../../../../../client/app/services/client-payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_loan_model__ = __webpack_require__("../../../../../client/app/models/loan.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loan_payments_loan_payment_dialog_component__ = __webpack_require__("../../../../../client/app/loan-payments/loan-payment-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_loan_payment_add_loan_payment_dialog_component__ = __webpack_require__("../../../../../client/app/add-loan-payment/add-loan-payment-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MdDialog } from '@angular/material';





var LoanDetailsComponent = (function () {
    function LoanDetailsComponent(route, dialog, loanServie, paymentService) {
        this.route = route;
        this.dialog = dialog;
        this.loanServie = loanServie;
        this.paymentService = paymentService;
        this.payments = [];
        this.loan = new __WEBPACK_IMPORTED_MODULE_5__models_loan_model__["a" /* LoanModel */]();
        // this.payments = new ClientPaymentModel[];
    }
    LoanDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.loanId = params['id'];
            console.dir('' + _this.loan);
            _this.getLoanDetails(_this.loanId);
        });
    };
    LoanDetailsComponent.prototype.getLoanDetails = function (id) {
        var _this = this;
        this.loanModel = new __WEBPACK_IMPORTED_MODULE_5__models_loan_model__["a" /* LoanModel */]();
        this.loanModel._id = id;
        this.loanServie.getLoan(this.loanModel)
            .subscribe(function (data) {
            console.log('data found');
            _this.loan = data;
            console.dir(_this.loan);
            console.log('checking loan payments');
            _this.getLoanPayments(_this.loan.clientNumber);
            // this.loan.subscribe (
            //   data => console.log(data.clientNumber),
            //   error => console.log(error)
            // );
            // this.loan.map (
            //   data => console.log(data)
            // )
        }, function (error) { return console.log(error); });
    };
    LoanDetailsComponent.prototype.getLoanPayments = function (clientNumber) {
        var _this = this;
        this.paymentService.getPayments(clientNumber)
            .subscribe(function (data) {
            _this.payments = data;
            console.dir(_this.payments);
        }, function (error) { return console.log(error); });
    };
    LoanDetailsComponent.prototype.paymentsDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__loan_payments_loan_payment_dialog_component__["a" /* LoanPaymentDialogComponent */], {
            data: { loanId: this.loan.loanId }
        });
    };
    LoanDetailsComponent.prototype.addPaymentDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__add_loan_payment_add_loan_payment_dialog_component__["a" /* AddLoanPaymentDialogComponent */], {
            width: '40rem',
            data: {
                loanId: this.loan.loanId,
                clientNumber: this.loan.clientNumber
            }
        });
    };
    return LoanDetailsComponent;
}());
LoanDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loan-details',
        template: __webpack_require__("../../../../../client/app/loan-details/loan-details.component.html"),
        styles: [__webpack_require__("../../../../../client/app/loan-details/loan-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_loan_service__["a" /* LoanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_loan_service__["a" /* LoanService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_client_payment_service__["a" /* ClientPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_client_payment_service__["a" /* ClientPaymentService */]) === "function" && _d || Object])
], LoanDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=loan-details.component.js.map

/***/ }),

/***/ "../../../../../client/app/loan-payment/loan-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\">\r\n  <div flFlex>\r\n    <div fxLayout=\"row\">\r\n      <div fxLayout=\"column\">\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"client number\" [(ngModel)]=\"payment.clientNumber\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"client name\" [(ngModel)]=\"clientName\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"date\" [(ngModel)]=\"todayDate\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"balance\" [(ngModel)]=\"payment.balanceAmount\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"interest %\" [(ngModel)]=\"payment.interestRate\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"interest amount\" [value]=\"interestAmount()\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"salary\" [(ngModel)]=\"payment.cashWithdrawal\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"less interest\" [value]=\"lessInterestAmount()\">\r\n          </mat-form-field>\r\n        </div> -->\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"principal\" [(ngModel)]=\"payment.paymentAmount\" class=\"input-editable\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"cash out\" [value]=\"cashOut()\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"new balancer\" [value]=\"newBalance()\" readonly=\"true\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex>\r\n          <mat-icon>person</mat-icon>\r\n          <mat-form-field>\r\n            <button mat-raised-button color=\"primary\">Save</button>\r\n            <button mat-raised-button>Close</button>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../client/app/loan-payment/loan-payment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-icon {\n  color: gray;\n  width: 24px;\n  margin: 16px 20px 0 10px; }\n\nmd-input-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nmd-select {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n#inputEntry {\n  background-color: yellow;\n  background: yellow; }\n\n.input-readonly {\n  background-color: yellow;\n  background: yellow; }\n\n.input-editable {\n  background-color: yellow; }\n\n.input-editable1 {\n  background: yellow; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/loan-payment/loan-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_loan_payment_model__ = __webpack_require__("../../../../../client/app/models/loan-payment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_payment_service__ = __webpack_require__("../../../../../client/app/services/client-payment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import Client from '../../../server/models/client';
var LoanPaymentComponent = (function () {
    function LoanPaymentComponent(route, paymentService) {
        this.route = route;
        this.paymentService = paymentService;
        this.payment = new __WEBPACK_IMPORTED_MODULE_2__models_loan_payment_model__["a" /* LoanPaymentModel */]();
        // sample data;
        this.payment.clientNumber = "PR0001";
        this.payment.balanceAmount = 100000;
        this.payment.interestRate = 2.5;
        this.clientName = "Precy Evangelista";
        this.todayDate = "2/Nov/2018";
    }
    LoanPaymentComponent.prototype.ngOnInit = function () {
    };
    LoanPaymentComponent.prototype.test = function () {
        return 100.00;
    };
    LoanPaymentComponent.prototype.interestAmount = function () {
        var balance;
        var rate;
        var amount;
        balance = this.payment.balanceAmount;
        rate = this.payment.interestRate;
        amount = Number(balance) * (Number(rate) / 100);
        this.payment.interestAmount = Number(balance) * (Number(rate) / 100);
        return this.payment.interestAmount;
    };
    LoanPaymentComponent.prototype.lessInterestAmount = function () {
        var balance = this.payment.balanceAmount;
        var cashWithdrawal = this.payment.cashWithdrawal;
        var interestAmount = this.payment.interestAmount;
        var lessInterestAmount;
        this.payment.lessInterestAmount = Number(cashWithdrawal) - Number(interestAmount);
        return this.payment.lessInterestAmount;
    };
    LoanPaymentComponent.prototype.cashOut = function () {
        var lessInterest = this.lessInterestAmount();
        var paymentAmount = this.payment.paymentAmount;
        var cashOut = Number(lessInterest) - Number(paymentAmount);
        return cashOut;
    };
    LoanPaymentComponent.prototype.newBalance = function () {
        var balance = this.payment.balanceAmount;
        var paymentAmount = this.payment.paymentAmount;
        this.payment.newBalanceAmount = Number(balance) - Number(paymentAmount);
        return this.payment.newBalanceAmount;
    };
    return LoanPaymentComponent;
}());
LoanPaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loan-payment',
        template: __webpack_require__("../../../../../client/app/loan-payment/loan-payment.component.html"),
        styles: [__webpack_require__("../../../../../client/app/loan-payment/loan-payment.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_payment_service__["a" /* ClientPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_payment_service__["a" /* ClientPaymentService */]) === "function" && _b || Object])
], LoanPaymentComponent);

var _a, _b;
//# sourceMappingURL=loan-payment.component.js.map

/***/ }),

/***/ "../../../../../client/app/loan-payments/loan-payment-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"primary-color\">Client Payments</h1>\r\n<mat-dialog-content class=\"accent-color\">\r\n  <!-- <header style=\"display: flex\">\r\n    <div style=\"flex: 1\">Due Amount</div>\r\n    <div style=\"flex: 1\">Due Date</div>\r\n    <div style=\"flex: 1\">Balance</div>\r\n    <div style=\"flex: 1\">Last Paid Amount</div>\r\n    <div style=\"flex: 1\">Last Paid Date</div>\r\n  </header>\r\n  <div style=\"display: flex\" *ngFor=\"let payment of payments\">\r\n    <div style=\"flex: 1\">{{payment.dueAmount}}</div>\r\n    <div style=\"flex: 1\">{{payment.dueDate | date: 'MM/dd/yyyy'}}</div>\r\n    <div style=\"flex: 1\">{{payment.balanceAmount}}</div>\r\n    <div style=\"flex: 1\">{{payment.lastPaymentAmount}}</div>\r\n    <div style=\"flex: 1\">{{payment.lastPaymentDate | date: 'MM/dd/yyyy'}}</div>\r\n  </div> -->\r\n\r\n  <div style=\"display: flex; flex-wrap: wrap;\">\r\n    <mat-card *ngFor=\"let payment of payments\" style=\"flex: 1; max-width: 20rem\">\r\n      <mat-card-header>\r\n        Client Payments\r\n      </mat-card-header>\r\n      <mat-card-contents>\r\n        <mat-form-field>\r\n          <input matInput readonly=\"true\" placeholder=\"amount due\" [value]=\"payment.dueAmount\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput readonly=\"true\" placeholder=\"due date\" [value]=\"payment.dueDate | date: 'dd/MMM/yyyy'\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput readonly=\"true\" placeholder=\"balance\" [value]=\"payment.balanceAmount\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput readonly=\"true\" placeholder=\"previous payment amount\" [value]=\"payment.lastPaymentAmount\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput readonly=\"true\" placeholder=\"previous payment date\" [value]=\"payment.lastPaymentDate | date: 'dd/MMM/yyyy'\">\r\n        </mat-form-field>\r\n  \r\n        <mat-form-field>\r\n          <input matInput readonly=\"true\" placeholder=\"amount paid\" [value]=\"payment.paidAmount\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput readonly=\"true\" placeholder=\"date paid\" [value]=\"payment.paidDate | date: 'dd/MMM/yyyy'\">\r\n        </mat-form-field>\r\n        \r\n\r\n      </mat-card-contents>\r\n    </mat-card>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close>\r\n    close button\r\n  </button>  \r\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../client/app/loan-payments/loan-payment-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/loan-payments/loan-payment-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPaymentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_payment_service__ = __webpack_require__("../../../../../client/app/services/client-payment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import { MdDialog, MD_DIALOG_DATA } from '@angular/material';



var LoanPaymentDialogComponent = (function () {
    function LoanPaymentDialogComponent(dialog, data, auth, paymentService) {
        this.dialog = dialog;
        this.data = data;
        this.auth = auth;
        this.paymentService = paymentService;
        this.payments = [];
        console.dir(data);
    }
    LoanPaymentDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.dir(this.data);
        this.paymentService.getLoanPayments(this.data.loanId)
            .subscribe(function (data) {
            _this.payments = data;
            console.log('payments found');
            console.dir(_this.payments);
        }, function (error) { return console.log(error); });
    };
    return LoanPaymentDialogComponent;
}());
LoanPaymentDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loan-payment',
        template: __webpack_require__("../../../../../client/app/loan-payments/loan-payment-dialog.component.html"),
        styles: [__webpack_require__("../../../../../client/app/loan-payments/loan-payment-dialog.component.scss")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_payment_service__["a" /* ClientPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_payment_service__["a" /* ClientPaymentService */]) === "function" && _c || Object])
], LoanPaymentDialogComponent);

var _a, _b, _c;
//# sourceMappingURL=loan-payment-dialog.component.js.map

/***/ }),

/***/ "../../../../../client/app/loan-transaction-list/loan-transaction-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\r\n  <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n    <h3>Loan Transaction</h3>\r\n    <mat-card *ngFor=\"let transaction of transactions\">\r\n      <mat-card-title></mat-card-title>\r\n\r\n      <mat-card-content>\r\n\r\n        <div class=\"schedule\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n          <div fxFlex=\"10\">{{ transaction.transactionDate | date: 'yyyy/MM/dd' }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.transactionType }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.transactionDescription }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.salaryAmount | number: '1.2-2' }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.interestAmount | number: '1.2-2' }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.releaseAmount | number: '1.2-2' }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.paymentAmount | number: '1.2-2' }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.otherAmount | number: '1.2-2' }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.cashoutAmount | number: '1.2-2' }}</div>\r\n          <div fxFlex=\"30\">{{ transaction.balanceAmount | number: '1.2-2' }}</div>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n</mat-card>"

/***/ }),

/***/ "../../../../../client/app/loan-transaction-list/loan-transaction-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/loan-transaction-list/loan-transaction-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanTransactionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loan_transaction_service__ = __webpack_require__("../../../../../client/app/services/loan-transaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanTransactionListComponent = (function () {
    function LoanTransactionListComponent(route, loanTransactionService) {
        this.route = route;
        this.loanTransactionService = loanTransactionService;
        this.transactions = [];
    }
    LoanTransactionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.loanId = params['loanId'];
            _this.getLoanTransactions(_this.loanId);
        });
    };
    LoanTransactionListComponent.prototype.getLoanTransactions = function (loanId) {
        var _this = this;
        console.log(loanId);
        this.transactions = [];
        this.loanTransactionService.getList(loanId)
            .subscribe(function (data) { return _this.transactions = data; }, function (error) { return console.log(error); });
    };
    return LoanTransactionListComponent;
}());
LoanTransactionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loan-transaction-list',
        template: __webpack_require__("../../../../../client/app/loan-transaction-list/loan-transaction-list.component.html"),
        styles: [__webpack_require__("../../../../../client/app/loan-transaction-list/loan-transaction-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_loan_transaction_service__["a" /* LoanTransactionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loan_transaction_service__["a" /* LoanTransactionService */]) === "function" && _b || Object])
], LoanTransactionListComponent);

var _a, _b;
//# sourceMappingURL=loan-transaction-list.component.js.map

/***/ }),

/***/ "../../../../../client/app/loans-dialog-child/loans-dialog-child.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a (click)=\"openLoansDialog()\" class=\"nav-item nav-link\" routerLinkActive=\"active\" *ngIf=\"loans>0\">\r\n  {{loans}}\r\n</a> -->\r\n<!-- <mat-form-field (click)=\"openLoansDialog()\" routerLinkActive=\"active\" *ngIf=\"loans>0\">\r\n  <input matInput [value]=\"loans\" readonly=\"true\">\r\n</mat-form-field> -->\r\n"

/***/ }),

/***/ "../../../../../client/app/loans-dialog-child/loans-dialog-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoansDialogChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_payment_service__ = __webpack_require__("../../../../../client/app/services/client-payment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoansDialogChildComponent = (function () {
    function LoansDialogChildComponent(dialog, clientPaymentService) {
        this.dialog = dialog;
        this.clientPaymentService = clientPaymentService;
        this.loan = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loans = '0';
        console.log('client-list-child constructor');
        // console.log(this.clientNumber);
    }
    LoansDialogChildComponent.prototype.ngOnInit = function () {
        console.log('loans-dialog-child : OnInit:  ' + this.loanId);
        this.getLoanPayments(this.loanId);
    };
    LoansDialogChildComponent.prototype.getLoanPayments = function (loanId) {
        var _this = this;
        console.log("loans-dialog-child : getLoanPayments: " + loanId);
        this.clientPaymentService.getLoanPayments(loanId)
            .subscribe(function (res) {
            // console.log(res);
            // console.dir(res);
            console.log('loans-dialog-child : getLoanPayments : subscribe: ' + loanId);
            // var total = res.reduce( (sum, item) => sum + item.paidAmount, 0 );
            var total = res.reduce(function (sum, item) { return sum + item.paymentAmount; }, 0);
            console.log(total);
            _this.loans = res;
            // this.load.emit(res);
            _this.loan.emit(total.toString());
        }, function (error) {
            console.log(error);
            _this.loans = '-1';
        });
        //return clientNumber;
    };
    return LoansDialogChildComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('loanId'),
    __metadata("design:type", Object)
], LoansDialogChildComponent.prototype, "loanId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('loan'),
    __metadata("design:type", Object)
], LoansDialogChildComponent.prototype, "loan", void 0);
LoansDialogChildComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loans-dialog-child',
        template: __webpack_require__("../../../../../client/app/loans-dialog-child/loans-dialog-child.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_payment_service__["a" /* ClientPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_payment_service__["a" /* ClientPaymentService */]) === "function" && _b || Object])
], LoansDialogChildComponent);

var _a, _b;
//# sourceMappingURL=loans-dialog-child.component.js.map

/***/ }),

/***/ "../../../../../client/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Login</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6)]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../client/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../client/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../client/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: '',
        styles: ['']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../client/app/models/base.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModel; });
var BaseModel = (function () {
    function BaseModel() {
    }
    return BaseModel;
}());

//# sourceMappingURL=base.model.js.map

/***/ }),

/***/ "../../../../../client/app/models/client.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__("../../../../../client/app/models/base.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ClientModel = (function (_super) {
    __extends(ClientModel, _super);
    function ClientModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clientNumber = '';
        _this.firstName = '';
        _this.middleName = '';
        _this.lastName = '';
        _this.surName = '';
        _this.gender = '';
        _this.mobilePhone = '';
        _this.emailAddress = '';
        _this.birthdate = new Date();
        _this.address1 = '';
        _this.address2 = '';
        _this.zoneName = '';
        _this.barangayName = '';
        _this.cityName = '';
        _this.provinceName = '';
        _this.locationMap = '';
        _this.employment = '';
        _this.businessName = '';
        _this.businessAddress = '';
        _this.businessPhone = '';
        _this.businessJobTitle = '';
        _this.grossMonthlyIncome = 0;
        _this.businessJoiningDate = new Date();
        _this.businessPayDate1 = new Date();
        _this.businessPayDate2 = new Date();
        _this.lastUpdate = new Date();
        _this.creationDate = new Date();
        _this.loans = 0;
        return _this;
    }
    return ClientModel;
}(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* BaseModel */]));

//# sourceMappingURL=client.model.js.map

/***/ }),

/***/ "../../../../../client/app/models/clientpayment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPaymentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__("../../../../../client/app/models/base.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ClientPaymentModel = (function (_super) {
    __extends(ClientPaymentModel, _super);
    function ClientPaymentModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientPaymentModel;
}(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* BaseModel */]));

//# sourceMappingURL=clientpayment.model.js.map

/***/ }),

/***/ "../../../../../client/app/models/loan-application.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanApplicationModel; });
var LoanApplicationModel = (function () {
    function LoanApplicationModel() {
    }
    return LoanApplicationModel;
}());

//# sourceMappingURL=loan-application.model.js.map

/***/ }),

/***/ "../../../../../client/app/models/loan-payment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanPaymentModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__("../../../../../client/app/models/base.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LoanPaymentModel = (function (_super) {
    __extends(LoanPaymentModel, _super);
    function LoanPaymentModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balanceAmount = 0;
        _this.interestRate = 0;
        _this.interestAmount = 0;
        _this.cashWithdrawal = 0;
        _this.lessInterestAmount = 0;
        _this.miscellaneousItem = 'none';
        _this.miscellaneousAmount = 0;
        _this.paymentAmount = 0;
        _this.newBalanceAmount = 0;
        _this.cashOut = 0;
        return _this;
    }
    return LoanPaymentModel;
}(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* BaseModel */]));

//# sourceMappingURL=loan-payment.model.js.map

/***/ }),

/***/ "../../../../../client/app/models/loan-transaction.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanTransactionModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__("../../../../../client/app/models/base.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LoanTransactionModel = (function (_super) {
    __extends(LoanTransactionModel, _super);
    function LoanTransactionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoanTransactionModel;
}(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* BaseModel */]));

//# sourceMappingURL=loan-transaction.model.js.map

/***/ }),

/***/ "../../../../../client/app/models/loan.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__("../../../../../client/app/models/base.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LoanModel = (function (_super) {
    __extends(LoanModel, _super);
    function LoanModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoanModel;
}(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* BaseModel */]));

//# sourceMappingURL=loan.model.js.map

/***/ }),

/***/ "../../../../../client/app/models/payment-schedule.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentScheduleModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__("../../../../../client/app/models/base.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PaymentScheduleModel = (function (_super) {
    __extends(PaymentScheduleModel, _super);
    function PaymentScheduleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PaymentScheduleModel;
}(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* BaseModel */]));

//# sourceMappingURL=payment-schedule.model.js.map

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  \r\n  <mat-toolbar color=\"accent\">\r\n          \r\n    <button mat-button routerLink=\"/\">\r\n    <mat-icon>home</mat-icon> \r\n        {{title}}</button>\r\n  \r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"fill-space\"></span>\r\n    <!-- <span flex></span> -->\r\n    <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\r\n        <button mat-button routerLink=\"/whatis\">What is LendUp</button>\r\n        <button mat-button routerLink=\"/dashboard\">How LendUp Works?</button>\r\n        <button mat-button routerLink=\"/dashboard\">Our Products</button>\r\n        <button mat-button routerLink=\"/add-client\">Add Client</button>\r\n        <button mat-button routerLink=\"/loan-payment\">Payments</button>\r\n        <button mat-button routerLink=\"/client-list\">Collector</button>\r\n      </div>\r\n    <button mat-button [mat-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm>\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n          \r\n  </mat-toolbar>\r\n  <mat-menu x-position=\"before\" #menu=\"matMenu\">\r\n    <button mat-menu-item routerLink=\"/whatis\">What is LendUp</button>\r\n    <button mat-menu-item routerLink=\"/dashboard\">How LendUp Works?</button>\r\n    <button mat-menu-item>Our Products</button>\r\n    <button mat-menu-item routerLink=\"/add-client\">Add Client</button>\r\n    <button mat-button routerLink=\"/loan-payment\">Payments</button>\r\n    <button mat-button routerLink=\"/client-list\">Collector</button>\r\n  </mat-menu>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-space {\n  /* // use flexbox to fill the remaining space.\r\n  // all rows use a flexbox layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.navbar {\n  margin-top: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n  top: 0;\n  height: 64px;\n  width: 100%;\n  z-index: 999;\n  position: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.title = '';
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar',
        template: __webpack_require__("../../../../../client/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../client/app/navbar/navbar.component.scss")]
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">404 Not Found</h4>\n  <div class=\"card-block\">\n    <p>The page you requested was not found.</p>\n    <p>Go to <a routerLink=\"/\">Homepage</a>.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../client/app/not-found/not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../client/app/payment-schedule-dialog/payment-schedule-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Payment Schedule</h3>\r\n\r\n<mat-dialog-content>\r\n\r\n  <div fxFlex fxLayout=\"column\">\r\n\r\n    <div *ngFor=\"let paymentSchedule of paymentSchedules\">\r\n\r\n      <mat-card>\r\n\r\n        <mat-card-content>\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n            <div fxFlex=\"10\" style=\"font-size: 14pt; font-weight: bold; margin-right: 10px\">{{ paymentSchedule.paymentNumber }}</div>\r\n            <div fxFlex=\"90\" fxLayout=\"column\" style=\"font-size: 8pt;\">\r\n\r\n              <div fxLayout=\"row\">\r\n\r\n                <div fxFlex=\"50\">Due Date</div>\r\n                <div fxFlex=\"50\" fxLayoutAlign=\"end\">{{ paymentSchedule.dueDate | date: 'MM/dd/yyyy' }}</div>\r\n\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n\r\n                <div fxFlex=\"50\">Installment</div>\r\n                <div fxFlex=\"50\" fxLayoutAlign=\"end\">{{ paymentSchedule.installmentAmount | number: '1.2-2' }}</div>\r\n\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n\r\n                <div fxFlex=\"50\">Interest</div>\r\n                <div fxFlex=\"50\" fxLayoutAlign=\"end\">{{ paymentSchedule.interestAmount | number: '1.2-2' }}</div>\r\n  \r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n\r\n                <div fxFlex=\"50\">To Pay</div>\r\n                <div fxFlex=\"50\" fxLayoutAlign=\"end\">{{ paymentSchedule.installmentAmount + paymentSchedule.interestAmount | number: '1.2-2' }}</div>\r\n  \r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n\r\n                <div fxFlex=\"50\">Balance</div>\r\n                <div fxFlex=\"50\" fxLayoutAlign=\"end\">{{ paymentSchedule.balanceAmount | number: '1.2-2' }}</div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </mat-card-content>\r\n\r\n      </mat-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</mat-dialog-content>"

/***/ }),

/***/ "../../../../../client/app/payment-schedule-dialog/payment-schedule-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentScheduleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PaymentScheduleDialogComponent = (function () {
    function PaymentScheduleDialogComponent(data) {
        this.data = data;
        this.paymentSchedules = data.paymentSchedules;
    }
    PaymentScheduleDialogComponent.prototype.ngOnInit = function () { };
    return PaymentScheduleDialogComponent;
}());
PaymentScheduleDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'payment-schedule-dialog',
        template: __webpack_require__("../../../../../client/app/payment-schedule-dialog/payment-schedule-dialog.component.html"),
        styles: ['./payment-schedule-dialog.component.scss']
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], PaymentScheduleDialogComponent);

//# sourceMappingURL=payment-schedule-dialog.component.js.map

/***/ }),

/***/ "../../../../../client/app/payment-schedule-list/payment-schedule-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top -->\r\n<mat-card>\r\n\r\n<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n  <h3>Payment Schedule</h3>\r\n  <mat-card *ngFor=\"let paymentSchedule of paymentSchedules\">\r\n    <mat-card-title>\r\n\r\n    </mat-card-title>\r\n\r\n    <mat-card-content>\r\n\r\n      <div class=\"schedule\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n        <div fxFlex=\"10\">{{ paymentSchedule.paymentNumber }}</div>\r\n        <div fxFlex=\"30\">{{ paymentSchedule.dueDate | date: 'yyyy/MM/dd' }}</div>\r\n        <div fxFlex=\"60\" fxLayoutAlign=\"end\">{{ paymentSchedule.installmentAmount | number: '1.2-2' }}</div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<mat-card-actions>\r\n  <button mat-button>test</button>\r\n</mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../client/app/payment-schedule-list/payment-schedule-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".schedule {\n  font-size: 9pt; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/payment-schedule-list/payment-schedule-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentScheduleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_payment_schedule_model__ = __webpack_require__("../../../../../client/app/models/payment-schedule.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_payment_schedule_service__ = __webpack_require__("../../../../../client/app/services/payment-schedule.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentScheduleListComponent = (function () {
    function PaymentScheduleListComponent(http, route, router, paymentScheduleService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.paymentScheduleService = paymentScheduleService;
        this.paymentSchedules = [];
        this.paymentSchedule = new __WEBPACK_IMPORTED_MODULE_3__models_payment_schedule_model__["a" /* PaymentScheduleModel */]();
    }
    PaymentScheduleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.loanId = params['loanId'];
            _this.getPaymentSchedules(_this.loanId);
            console.log('payment-schedule-list.component:OnInit: ' + _this.loanId);
        });
    };
    PaymentScheduleListComponent.prototype.getPaymentSchedules = function (loanId) {
        var _this = this;
        this.paymentScheduleService.getByLoanId(loanId)
            .subscribe(function (data) { return _this.paymentSchedules = data; }, function (error) { return console.log(error); });
    };
    return PaymentScheduleListComponent;
}());
PaymentScheduleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'payment-schedule-list',
        template: __webpack_require__("../../../../../client/app/payment-schedule-list/payment-schedule-list.component.html"),
        styles: [__webpack_require__("../../../../../client/app/payment-schedule-list/payment-schedule-list.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_payment_schedule_service__["a" /* PaymentScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_payment_schedule_service__["a" /* PaymentScheduleService */]) === "function" && _d || Object])
], PaymentScheduleListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=payment-schedule-list.component.js.map

/***/ }),

/***/ "../../../../../client/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Register</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n      <div class=\"input-group\" [ngClass]=\"setClassUsername()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" formControlName=\"role\">\n          <option value=\"\" selected disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!registerForm.valid\"><i class=\"fa fa-user-plus\"></i> Register</button>\n    </form>\n  </div>\n</div>\n\n<div>\n  <md-card>\n    <button md-button>All</button>\n    <button md-raised-button>Of</button>\n    <button md-raised-button color=\"primary\">The</button>\n    <button md-raised-button color=\"accent\">Buttons</button>\n  </md-card>\n</div>\n\n<button md-button>LIKE</button>\n<button md-button>SHARE</button>\n\n<md-form-field>\n  <input mdInput value=\"test input\">\n  <md-icon mdPrefix>person</md-icon>\n</md-form-field>\n\n<md-input-container>\n  <input mdInput value=\"test\">\n</md-input-container>\n\n<form class=\"example-form\">\n    <md-form-field class=\"example-full-width\">\n      <input mdInput placeholder=\"Favorite food\" value=\"Sushi\">\n    </md-form-field>\n</form>"

/***/ }),

/***/ "../../../../../client/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-icon {\n  position: absolute;\n  padding-right: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern('[a-zA-Z0-9_-\\s]*')]);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(6)]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
    };
    RegisterComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/login']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../client/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../client/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../client/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_payment_add_payment_component__ = __webpack_require__("../../../../../client/app/add-payment/add-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_client_add_client_component__ = __webpack_require__("../../../../../client/app/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__client_list_client_list_component__ = __webpack_require__("../../../../../client/app/client-list/client-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loan_details_loan_details_component__ = __webpack_require__("../../../../../client/app/loan-details/loan-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__client_detail_client_detail_component__ = __webpack_require__("../../../../../client/app/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_new_loan_add_new_loan_component__ = __webpack_require__("../../../../../client/app/add-new-loan/add-new-loan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_new_regular_loan_add_new_regular_loan_component__ = __webpack_require__("../../../../../client/app/add-new-regular-loan/add-new-regular-loan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loan_payment_loan_payment_component__ = __webpack_require__("../../../../../client/app/loan-payment/loan-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__payment_schedule_list_payment_schedule_list_component__ = __webpack_require__("../../../../../client/app/payment-schedule-list/payment-schedule-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__loan_transaction_list_loan_transaction_list_component__ = __webpack_require__("../../../../../client/app/loan-transaction-list/loan-transaction-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */] },
    { path: 'whatis', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'cats', component: __WEBPACK_IMPORTED_MODULE_2__cats_cats_component__["a" /* CatsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_6__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_7__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_8__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */]] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'add-payment', component: __WEBPACK_IMPORTED_MODULE_10__add_payment_add_payment_component__["a" /* AddPaymentComponent */] },
    { path: 'client-detail', component: __WEBPACK_IMPORTED_MODULE_14__client_detail_client_detail_component__["a" /* ClientDetailComponent */] },
    { path: 'add-client', component: __WEBPACK_IMPORTED_MODULE_11__add_client_add_client_component__["a" /* AddClientComponent */] },
    { path: 'client-list', component: __WEBPACK_IMPORTED_MODULE_12__client_list_client_list_component__["a" /* ClientListComponent */] },
    { path: 'loan-details', component: __WEBPACK_IMPORTED_MODULE_13__loan_details_loan_details_component__["a" /* LoanDetailsComponent */] },
    { path: 'add-new-loan', component: __WEBPACK_IMPORTED_MODULE_15__add_new_loan_add_new_loan_component__["a" /* AddNewLoanComponent */] },
    { path: 'loan-payment', component: __WEBPACK_IMPORTED_MODULE_17__loan_payment_loan_payment_component__["a" /* LoanPaymentComponent */] },
    { path: 'add-new-regular-loan', component: __WEBPACK_IMPORTED_MODULE_16__add_new_regular_loan_add_new_regular_loan_component__["a" /* AddNewRegularLoanComponent */] },
    { path: 'payment-schedule-list', component: __WEBPACK_IMPORTED_MODULE_21__payment_schedule_list_payment_schedule_list_component__["a" /* PaymentScheduleListComponent */] },
    { path: 'loan-transaction-list', component: __WEBPACK_IMPORTED_MODULE_22__loan_transaction_list_loan_transaction_list_component__["a" /* LoanTransactionListComponent */] },
    { path: '**', redirectTo: '/notfound' },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.auth.isAdmin;
    };
    return AuthGuardAdmin;
}());
AuthGuardAdmin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardAdmin);

var _a, _b;
//# sourceMappingURL=auth-guard-admin.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    return AuthGuardLogin;
}());
AuthGuardLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardLogin);

var _a, _b;
//# sourceMappingURL=auth-guard-login.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.currentUser = { _id: '', username: '', role: '' };
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', username: '', role: '' };
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/cat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatService = (function () {
    function CatService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CatService.prototype.getCats = function () {
        return this.http.get('/api/cats').map(function (res) { return res.json(); });
    };
    CatService.prototype.countCats = function () {
        return this.http.get('/api/cats/count').map(function (res) { return res.json(); });
    };
    CatService.prototype.addCat = function (cat) {
        return this.http.post('/api/cat', JSON.stringify(cat), this.options);
    };
    CatService.prototype.getCat = function (cat) {
        return this.http.get("/api/cat/" + cat._id).map(function (res) { return res.json(); });
    };
    CatService.prototype.editCat = function (cat) {
        return this.http.put("/api/cat/" + cat._id, JSON.stringify(cat), this.options);
    };
    CatService.prototype.deleteCat = function (cat) {
        return this.http.delete("/api/cat/" + cat._id, this.options);
    };
    return CatService;
}());
CatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CatService);

var _a;
//# sourceMappingURL=cat.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/client-payment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPaymentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientPaymentService = (function () {
    function ClientPaymentService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    ClientPaymentService.prototype.addPayment = function (payment) {
        return this.http.post('/api/clientpayment', JSON.stringify(payment), this.options);
    };
    ClientPaymentService.prototype.getPayments = function (clientNumber) {
        return this.http.get("/api/clientpayments/client/" + clientNumber).map(function (res) { return res.json(); });
    };
    ClientPaymentService.prototype.getLoanPayments = function (loanId) {
        return this.http.get("/api/clientpayments/loan/" + loanId).map(function (res) { return res.json(); });
    };
    ClientPaymentService.prototype.getLoanPayments2 = function (loanId) {
        return this.http.get("/api/clientpayments/loan/lastpayment/" + loanId).map(function (res) { return res.json(); });
    };
    return ClientPaymentService;
}());
ClientPaymentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ClientPaymentService);

var _a;
//# sourceMappingURL=client-payment.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    ClientService.prototype.getClients = function () {
        return this.http.get('/api/clients').map(function (res) { return res.json(); });
    };
    ClientService.prototype.addClient = function (client) {
        return this.http.post('/api/client', JSON.stringify(client), this.options);
    };
    ClientService.prototype.getClient = function (client) {
        return this.http.get("/api/client/" + client._id).map(function (res) { return res.json(); });
    };
    ClientService.prototype.getClientByClientNumber = function (client) {
        return this.http.get("/api/client/client/" + client.clientNumber).map(function (res) { return res.json(); });
    };
    ClientService.prototype.editClient = function (client) {
        return this.http.put("/api/client/" + client._id, JSON.stringify(client), this.options);
    };
    ClientService.prototype.deleteClient = function (client) {
        return this.http.delete("/api/client/" + client._id, this.options);
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/loan-transaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanTransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanTransactionService = (function () {
    function LoanTransactionService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    LoanTransactionService.prototype.add = function (loanTransaction) {
        return this.http.post('/api/loantransaction', JSON.stringify(loanTransaction), this.options);
    };
    LoanTransactionService.prototype.getList = function (loanId) {
        return this.http.get("/api/loantransaction/loan/" + loanId).map(function (res) { return res.json(); });
    };
    return LoanTransactionService;
}());
LoanTransactionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], LoanTransactionService);

var _a;
//# sourceMappingURL=loan-transaction.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/loan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanService = (function () {
    function LoanService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    // paymentSchedule(loan): Observable<any> {
    //   return this.http.post('/api/loan/calculate', JSON.stringify(loan), this.options);
    // }
    LoanService.prototype.paymentSchedule = function (loan) {
        return this.http.post('/api/loan/calculate', JSON.stringify(loan), this.options).map(function (res) { return res.json(); });
    };
    LoanService.prototype.getLoans = function (loan) {
        return this.http.get("/api/loans/client/" + loan.clientNumber).map(function (res) { return res.json(); });
    };
    LoanService.prototype.countLoans = function (clientNumber) {
        return this.http.get("/api/loans/client/count/" + clientNumber).map(function (res) { return res.json(); });
    };
    LoanService.prototype.addLoan = function (loan) {
        return this.http.post('/api/loan', JSON.stringify(loan), this.options);
    };
    LoanService.prototype.getLoan = function (loan) {
        return this.http.get("/api/loan/" + loan._id).map(function (res) { return res.json(); });
    };
    LoanService.prototype.editLoan = function (loan) {
        return this.http.put("/api/loan/" + loan._id, JSON.stringify(loan), this.options);
    };
    LoanService.prototype.deleteLoan = function (loan) {
        return this.http.delete("/api/loan/" + loan._id, this.options);
    };
    LoanService.prototype.updateLoan = function (loan) {
        return this.http.put("/api/loan/" + loan._id, this.options);
    };
    return LoanService;
}());
LoanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], LoanService);

var _a;
//# sourceMappingURL=loan.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/payment-schedule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentScheduleService = (function () {
    function PaymentScheduleService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    PaymentScheduleService.prototype.add = function (schedule) {
        return this.http.post('/api/paymentschedule', JSON.stringify(schedule), this.options);
    };
    PaymentScheduleService.prototype.getByLoanId = function (loanId) {
        return this.http.get("/api/paymentschedules/loan/" + loanId).map(function (res) { return res.json(); });
        ;
    };
    return PaymentScheduleService;
}());
PaymentScheduleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PaymentScheduleService);

var _a;
//# sourceMappingURL=payment-schedule.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/api/login', JSON.stringify(credentials), this.options);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users').map(function (res) { return res.json(); });
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('/api/users/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get("/api/user/" + user._id).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put("/api/user/" + user._id, JSON.stringify(user), this.options);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete("/api/user/" + user._id, this.options);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"condition\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "condition", void 0);
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../client/app/shared/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/loading/loading.component.scss")]
    })
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__ = __webpack_require__("../../../../../client/app/shared/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        exports: [
            // Shared Modules
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            // Shared Components
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <strong>Message:</strong> {{message.body}}\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  z-index: 999;\n  position: fixed;\n  bottom: 15px;\n  left: 25%;\n  width: 50%;\n  opacity: 0.9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    return ToastComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "message", void 0);
ToastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__("../../../../../client/app/shared/toast/toast.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/toast/toast.component.scss")]
    })
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map