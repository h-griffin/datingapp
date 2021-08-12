(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+6CW":
/*!***********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\n  border: none;\n}\n\n.chat{\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.chat li{\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px dotted #B3A9A9;\n}\n\n.rounded-circle{\n  max-height: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2hhdHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2hhdCBsaXtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0IzQTlBOTtcbn1cblxuLnJvdW5kZWQtY2lyY2xle1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "/Lly":
/*!*************************************************************!*\
  !*** ./src/app/errors/test-errors/test-errors.component.ts ***!
  \*************************************************************/
/*! exports provided: TestErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestErrorsComponent", function() { return TestErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_test_errors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./test-errors.component.html */ "LXXr");
/* harmony import */ var _test_errors_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-errors.component.css */ "GOUF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






var TestErrorsComponent = /** @class */ (function () {
    function TestErrorsComponent(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.validationErrors = []; // display text error on page
    }
    TestErrorsComponent.prototype.ngOnInit = function () {
    };
    TestErrorsComponent.prototype.get404Error = function () {
        this.http.get(this.baseUrl + 'buggy/not-found').subscribe(function (response) {
            console.log('[test-errors.component.ts] get404Error()', response);
        }, function (error) {
            console.log('[test-errors.component.ts] get404Error()', error);
        });
    };
    TestErrorsComponent.prototype.get400Error = function () {
        this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(function (response) {
            console.log('[test-errors.component.ts] get400Error()', response);
        }, function (error) {
            console.log('[test-errors.component.ts] get400Error()', error);
        });
    };
    TestErrorsComponent.prototype.get500Error = function () {
        this.http.get(this.baseUrl + 'buggy/server-error').subscribe(function (response) {
            console.log('[test-errors.component.ts] get500Error()', response);
        }, function (error) {
            console.log('[test-errors.component.ts] get500Error()', error);
        });
    };
    TestErrorsComponent.prototype.get401Error = function () {
        this.http.get(this.baseUrl + 'buggy/auth').subscribe(function (response) {
            console.log('[test-errors.component.ts] get401Error()', response);
        }, function (error) {
            console.log('[test-errors.component.ts] get401Error()', error);
        });
    };
    TestErrorsComponent.prototype.get400ValidationError = function () {
        var _this = this;
        this.http.post(this.baseUrl + 'account/register', {}).subscribe(function (response) {
            console.log('[test-errors.component.ts] get400ValidationError()', response);
        }, function (error) {
            console.log('[test-errors.component.ts] get400ValidationError()', error);
            _this.validationErrors = error;
        });
    };
    TestErrorsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    TestErrorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-test-errors',
            template: _raw_loader_test_errors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_test_errors_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TestErrorsComponent);
    return TestErrorsComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/haleygriffin/udemy/csharp/datingapp/client/src/main.ts */"zUnb");


/***/ }),

/***/ "0r7+":
/*!***********************************************************!*\
  !*** ./src/app/_forms/date-input/date-input.component.ts ***!
  \***********************************************************/
/*! exports provided: DateInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInputComponent", function() { return DateInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_date_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./date-input.component.html */ "rRnX");
/* harmony import */ var _date_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-input.component.css */ "UpVr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






var DateInputComponent = /** @class */ (function () {
    function DateInputComponent(ngControl) {
        this.ngControl = ngControl;
        this.ngControl.valueAccessor = this;
        this.bsConfig = {
            containerClass: 'theme-red',
            dateInputFormat: 'DD MMMM YYYY'
        };
    }
    DateInputComponent.prototype.writeValue = function (obj) {
    };
    DateInputComponent.prototype.registerOnChange = function (fn) {
    };
    DateInputComponent.prototype.registerOnTouched = function (fn) {
    };
    DateInputComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
    ]; };
    DateInputComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    DateInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-date-input',
            template: _raw_loader_date_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_date_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]])
    ], DateInputComponent);
    return DateInputComponent;
}());



/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, router, toastr, fb) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        this.fb = fb;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.validationErrors = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18); //18+ bday on sign up
    };
    RegisterComponent.prototype.initializeForm = function () {
        var _this = this;
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.matchValues('password')]]
        });
        // change password after pw confirm
        this.registerForm.controls.password.valueChanges.subscribe(function () {
            _this.registerForm.controls.confirmPassword.updateValueAndValidity();
        });
    };
    RegisterComponent.prototype.matchValues = function (matchTo) {
        return function (control) {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value) ? null : { isMatching: true };
        };
    };
    // register user then hide form
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountService.register(this.registerForm.value).subscribe(function (response) {
            _this.router.navigateByUrl('/members');
        }, function (error) {
            console.log("[register.component.ts] register() validation error", error);
            _this.validationErrors = error;
        });
    };
    RegisterComponent.prototype.cancel = function () {
        console.log("[register.component.ts] form cancelled");
        this.cancelRegister.emit('false');
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    RegisterComponent.propDecorators = {
        cancelRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "1f5s":
/*!************************************************************!*\
  !*** ./src/app/_forms/text-input/text-input.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19mb3Jtcy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "2Hd7":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-panel/admin-panel.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Admin Panel</h2>\n\n<div class=\"tab-panel\">\n  <tabset class=\"member-tabset\" >\n    <tab heading=\"User Management\" *appHasRole='[\"Admin\"]' >\n      <div class=\"container\">\n        <app-user-management></app-user-management>\n      </div>\n    </tab>\n\n    <tab heading=\"Photo Management\" *appHasRole='[\"Admin\", \"Moderator\"]' >\n      <div class=\"container\">\n        <app-photo-management></app-photo-management>\n      </div>\n    </tab>\n\n  </tabset>\n</div>\n\n\n");

/***/ }),

/***/ "2qCV":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-messages.component.html */ "BopY");
/* harmony import */ var _member_messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-messages.component.css */ "+6CW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/message.service */ "Qskx");






var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.messageService.sendMessage(this.username, this.messageContent).then(function () {
            _this.messageFrom.reset(); // clear text
        });
    };
    MemberMessagesComponent.ctorParameters = function () { return [
        { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
    ]; };
    MemberMessagesComponent.propDecorators = {
        messageFrom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["messageForm",] }],
        messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    MemberMessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-member-messages',
            template: _raw_loader_member_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_member_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "4+ph":
/*!**********************************************************************!*\
  !*** ./src/app/admin/photo-management/photo-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: PhotoManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoManagementComponent", function() { return PhotoManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_photo_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./photo-management.component.html */ "GV+h");
/* harmony import */ var _photo_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-management.component.css */ "Gxrn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");





var PhotoManagementComponent = /** @class */ (function () {
    function PhotoManagementComponent(adminService) {
        this.adminService = adminService;
    }
    PhotoManagementComponent.prototype.ngOnInit = function () {
    };
    PhotoManagementComponent.prototype.getPhotosForApproval = function () {
        var _this = this;
        this.adminService.getPhotosForApproval().subscribe(function (photos) {
            _this.photos = photos;
        });
    };
    PhotoManagementComponent.prototype.approvePhoto = function (photoId) {
        var _this = this;
        this.adminService.approvePhoto(photoId).subscribe(function () {
            _this.photos.splice(_this.photos.findIndex(function (p) { return p.id === photoId; }), 1);
        });
    };
    PhotoManagementComponent.prototype.rejectPhoto = function (photoId) {
        var _this = this;
        this.adminService.rejectPhoto(photoId).subscribe(function () {
            _this.photos.splice(_this.photos.findIndex(function (p) { return p.id === photoId; }), 1);
        });
    };
    PhotoManagementComponent.ctorParameters = function () { return [
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
    ]; };
    PhotoManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-photo-management',
            template: _raw_loader_photo_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_photo_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], PhotoManagementComponent);
    return PhotoManagementComponent;
}());



/***/ }),

/***/ "4rg4":
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "Tkli");
/* harmony import */ var _not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.css */ "7KZ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.ctorParameters = function () { return []; };
    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-not-found',
            template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "5ZPe":
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presence.service */ "mV+E");







var AccountService = /** @class */ (function () {
    function AccountService(http, presence) {
        this.http = http;
        this.presence = presence;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        // observable to store user in
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1); // so other components can observe (auth guard subscribes)
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    AccountService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'account/login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var user = response;
            if (user) {
                _this.setCurrentUser(user);
                _this.presence.createHubConnection(user);
            }
        }));
    };
    AccountService.prototype.register = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'account/register', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user) {
                _this.setCurrentUser(user);
                _this.presence.createHubConnection(user);
            }
        }));
    };
    AccountService.prototype.setCurrentUser = function (user) {
        user.roles = [];
        var roles = this.getDecodedToken(user.token).role;
        Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    };
    AccountService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
        this.presence.stopHubConnection();
    };
    // roles located in token
    AccountService.prototype.getDecodedToken = function (token) {
        // string of 3 [0,1,2] header, payload, signature // payload [1]
        return JSON.parse(atob(token.split(".")[1]));
    };
    AccountService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"] }
    ]; };
    AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "7KZ6":
/*!**********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "81j5":
/*!***************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.ts ***!
  \***************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./server-error.component.html */ "MhCG");
/* harmony import */ var _server_error_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-error.component.css */ "R5SI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent(router) {
        var _a, _b;
        this.router = router;
        var navigation = this.router.getCurrentNavigation();
        this.error = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.error; // optional cahining incase user inst rerouted
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ServerErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-server-error',
            template: _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_server_error_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "8T1h":
/*!***************************************************!*\
  !*** ./src/app/_directives/has-role.directive.ts ***!
  \***************************************************/
/*! exports provided: HasRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function() { return HasRoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");




var HasRoleDirective = /** @class */ (function () {
    function HasRoleDirective(viewContainerRef, templateRef, accountService) {
        var _this = this;
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.accountService = accountService;
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (user) {
            _this.user = user;
        });
    }
    HasRoleDirective.prototype.ngOnInit = function () {
        var _this = this;
        var _a, _b;
        // clear view/container if on roles
        if (!((_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) || this.user == null) {
            this.viewContainerRef.clear();
            return;
        }
        // if user has a role in list, create embeded view and use admin link as template ref
        if ((_b = this.user) === null || _b === void 0 ? void 0 : _b.roles.some(function (r) { return _this.appHasRole.includes(r); })) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.clear();
        }
    };
    HasRoleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
    ]; };
    HasRoleDirective.propDecorators = {
        appHasRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    HasRoleDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHasRole]' // *appHasRole='["Admin"]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], HasRoleDirective);
    return HasRoleDirective;
}());



/***/ }),

/***/ "8rMn":
/*!*******************************************!*\
  !*** ./src/app/_services/busy.service.ts ***!
  \*******************************************/
/*! exports provided: BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return BusyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



var BusyService = /** @class */ (function () {
    function BusyService(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0; // counts how many requests are in process
    }
    BusyService.prototype.busy = function () {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: "line-scale-party",
            bdColor: "rgba(255,255,255,0)",
            color: "#333333"
        });
    };
    BusyService.prototype.idle = function () {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    };
    BusyService.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    BusyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], BusyService);
    return BusyService;
}());



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = !this.registerMode;
    };
    HomeComponent.prototype.cancelRegisterMode = function (event) {
        this.registerMode = event; // stop displaying register form
    };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Au4E":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
// PaginatedResult<Members[]>  array of members
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://localhost:5001/api/',
    hubUrl: 'https://localhost:5001/hubs/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BopY":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-messages/member-messages.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-body\">\n\n    <div *ngIf=\"(messageService.messageThread$ | async)?.length === 0\" >\n      No messages yet... say hi by using the message box below\n    </div>\n\n    <ul\n      #scrollMe\n      style=\"overflow: scroll; height: 500px;\"\n      [scrollTop]=\"scrollMe.scrollHeight\"\n      *ngIf=\"(messageService.messageThread$ | async)?.length > 0\"\n      class=\"chat\"\n      >\n\n      <li *ngFor=\"let message of (messageService.messageThread$ | async)\" >\n\n        <div *ngIf=\"message.senderUsername == username\">\n          <span  class=\"chat-img float-left mr-3\">\n            <img class=\"rounded-circle\" src=\"{{message.senderPhotoUrl || './assets/user.png'}}\" alt=\"{{message.senderUsername}}\">\n          </span>\n\n          <div class=\"chat-body\" >\n            <div class=\"header float-left\">\n              <small class=\"text-muted\">\n                <span class=\"fa fa-clock-o\">  {{message.messageSent | timeago}}</span>\n                <span class=\"text-danger\" *ngIf=\"!message.dateRead\n                  && message.senderUsername !== username\">\n                   (unread)</span>\n                <span class=\"text-success\" *ngIf=\"message.dateRead\n                  && message.senderUsername !== username\">\n                   (read {{message.dateRead | timeago}})</span>\n              </small>\n            </div>\n            <br>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n\n        <div *ngIf=\"message.recipientUsername == username\">\n          <span class=\"chat-img float-right ml-3\">\n            <img class=\"rounded-circle\" src=\"{{message.senderPhotoUrl || './assets/user.png'}}\" alt=\"{{message.senderUsername}}\">\n          </span>\n\n          <div class=\"chat-body\" >\n            <div  class=\"header float-right\">\n              <small class=\"text-muted\">\n                <span class=\"fa fa-clock-o\">  {{message.messageSent | timeago}}</span>\n                <span class=\"text-danger\" *ngIf=\"!message.dateRead\n                  && message.senderUsername !== username\">\n                   (unread)</span>\n                <span class=\"text-success\" *ngIf=\"message.dateRead\n                  && message.senderUsername !== username\">\n                   (read {{message.dateRead | timeago}})</span>\n              </small>\n            </div>\n            <br>\n            <p style=\"text-align: right\">{{message.content}}</p>\n          </div>\n        </div>\n\n\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"card-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"sendMessage()\" autocomplete=\"off\">\n      <div class=\"input-group\">\n\n        <input type=\"text\" class=\"form-control input-sm\" placeholder=\"Send a private message\"\n          name=\"messageContent\"\n          required\n          [(ngModel)]=\"messageContent\"\n          >\n\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" type=\"submit\"\n            [disabled]=\"!messageForm.valid\"\n            >Send</button>\n        </div>\n\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "Btx/":
/*!**************************************************!*\
  !*** ./src/app/_interceptors/jwt.interceptor.ts ***!
  \**************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(accountService) {
        this.accountService = accountService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var currentUser;
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (user) { return currentUser = user; });
        if (currentUser) {
            //clone request adn add authentication header
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
    ]; };
    JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "Cegr":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/roles-modal/roles-modal.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edit roles for {{user.username}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #rolesForm=\"ngForm\" id=\"rolesForm\" >\n    <div class=\"form-check\" *ngFor=\"let role of roles\" >\n      <input type=\"checkbox\"\n        class=\"form-check-input\"\n        [checked]=\"role.checked\"\n        value=\"role.name\"\n        (change)=\"role.checked = !role.checked\"\n        [disabled]=\"role.name === 'Admin' && user.username === 'admin' \"\n      >\n      <label>{{role.name}}</label>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"updateRoles()\">Submit</button>\n</div>\n");

/***/ }),

/***/ "CfLO":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/confirm-dialogue/confirm-dialogue.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n\n</div>\n<div class=\"modal-body\">\n  <p>{{message}}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"confirm()\">{{btnOkText}}</button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{btnCancelText}}</button>\n</div>\n");

/***/ }),

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./messages.component.html */ "rt/O");
/* harmony import */ var _messages_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.component.css */ "Okie");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/confirm.service */ "xuvy");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/message.service */ "Qskx");






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService, confirmService) {
        this.messageService = messageService;
        this.confirmService = confirmService;
        this.messages = [];
        this.container = "Unread";
        this.pageNumber = 1;
        this.pageSize = 5;
        this.loading = false;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.loading = true;
        this.messageService.getMessages(this.pageNumber, this.pageSize, this.container).subscribe(function (response) {
            // response is paginated
            _this.messages = response.result;
            _this.pagination = response.pagination;
            _this.loading = false;
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.confirmService.confirm("Confirm delete message", "This cannot be undone").subscribe(function (result) {
            if (result) { //bool
                _this.messageService.deleteMessage(id).subscribe(function () {
                    _this.messages.splice(_this.messages.findIndex(function (m) { return m.id === id; }), 1); // (index/id, delete 1)
                });
            }
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pageNumber = event.page;
        this.loadMessages();
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _services_confirm_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"] }
    ]; };
    MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-messages',
            template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_messages_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _services_confirm_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "FRJe":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/photo-editor/photo-editor.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-2 img-wrapper\" *ngFor=\"let photo of member.photos\">\n      <img src=\"{{photo.url}}\" alt=\"{{photo.url}}\" class=\"img-thumbnail p-1\"\n          [class.not-approved]=\"!photo.isApproved\"\n      >\n\n      <div class=\"text-center img-text\" *ngIf=\"!photo.isApproved\">\n          <span class=\"text-danger \">Awaiting approval</span>\n      </div>\n\n      <div class=\"text-center\">\n          <button\n              [disabled]=\"photo.isMain || !photo.isApproved\"\n              (click)=\"setMainPhoto(photo)\"\n              [ngClass]='photo.isMain ? \"btn-success active\" : \"btn-outline-success\"'\n              class=\"btn btn-sm \"\n          >Main</button>\n          &nbsp;\n          <button\n              [disabled]=\"photo.isMain\"\n              (click)=\"deletePhoto(photo.id)\"\n              class=\"btn btn-sm btn-danger\"\n          ><i class=\"fa fa-trash\"></i></button>\n      </div>\n  </div>\n</div>\n\n<div class=\"row mt-3\">\n\n<div class=\"col-md-3\">\n\n    <h3>Add Photos</h3>\n\n    <div ng2FileDrop\n          [ngClass]=\"{'nv-file-over': hasBaseDropzoneOver}\"\n          (fileOver)=\"fileOverBase($event)\"\n          [uploader]=\"uploader\"\n          class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n          <i class=\"fa fa-upload fa-3x\"></i>\n        Drop Photos Here\n    </div>\n\n    Multiple\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n    Single\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n</div>\n\n<div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n    <table class=\"table\">\n        <thead>\n        <tr>\n            <th width=\"50%\">Name</th>\n            <th>Size</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n            <td><strong>{{ item?.file?.name }}</strong></td>\n            <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <div>\n        <div>\n            Queue progress:\n            <div class=\"progress\">\n                <div class=\"progress-bar mb-3 mt-2\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n            </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-s mt-3 \"\n                (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n            <span class=\"fa fa-upload\"></span> Upload all\n        </button>\n        <button type=\"button\" class=\"btn btn-warning btn-s mt-3 ml-3\"\n                (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n            <span class=\"fa fa-ban\"></span> Cancel all\n        </button>\n        <button type=\"button\" class=\"btn btn-danger btn-s mt-3 ml-3\"\n                (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n            <span class=\"fa fa-trash\"></span> Remove all\n        </button>\n    </div>\n\n</div>\n\n</div>\n");

/***/ }),

/***/ "GCkI":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user-management/user-management.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <table class=\"table\">\n    <tr>\n      <th style=\"width: 30%;\" >UserName</th>\n      <th style=\"width: 40%;\" >Active roles</th>\n      <th style=\"width: 30%;\" ></th>\n    </tr>\n\n    <tr *ngFor=\"let user of users\" >\n      <td>{{user.username}}</td>\n      <td>{{user.roles}}</td>\n      <td><button (click)=\"openRolesModal(user)\" class=\"btn btn-info\">Edit Roles</button></td>\n    </tr>\n  </table>\n</div>\n\n\n");

/***/ }),

/***/ "GOUF":
/*!**************************************************************!*\
  !*** ./src/app/errors/test-errors/test-errors.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy90ZXN0LWVycm9ycy90ZXN0LWVycm9ycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "GV+h":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/photo-management/photo-management.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\" >\n    <h4>{{photo.username}}</h4>\n    <img src=\"{{photo.url}}\" alt=\"{{photo.username}}\" class=\"img-thumbnail p-1\">\n\n    <div class=\"text-center\">\n      <button class=\"btn btn-sm btn-success mr-1\" (click)=\"approvePhoto(photo.id)\" >Approve</button>\n      <button class=\"btn btn-sm btn-danger\" (click)=\"rejectPhoto(photo.id)\" >Reject</button>\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n  <div style=\"text-align: center;\" *ngIf=\"!registerMode\">\n    <h1>Find your match</h1>\n    <p class=\"lead\">come on in to view your matches... all you need to do is sign up!</p>\n    <div class=\"text-center\">\n      <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\n      <button class=\"btn btn-info btn-lg\">Learn More</button>\n    </div>\n  </div>\n\n  <div class=\"container\" *ngIf=\"registerMode\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-4\">\n          <app-register (cancelRegister)=\"cancelRegisterMode($event)\" ></app-register>\n        </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Gxrn":
/*!***********************************************************************!*\
  !*** ./src/app/admin/photo-management/photo-management.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img-thumbnail{\n  height: 150px;\n  min-width: 150px !important;\n  margin-bottom: 2px;\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGhvdG8tbWFuYWdlbWVudC9waG90by1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bob3RvLW1hbmFnZW1lbnQvcGhvdG8tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmltZy10aHVtYm5haWx7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1pbi13aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "LXXr":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/test-errors/test-errors.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n  <h1>open the console to see errors</h1>\n  <p>right click to inspect page, then view console</p>\n  <br>\n  <button (click)=\"get500Error()\" class=\"btn btn-outline-primary mr-3\">Test 500 Error</button>\n  <button (click)=\"get404Error()\" class=\"btn btn-outline-primary mr-3\">Test 404 Error</button>\n  <button (click)=\"get401Error()\" class=\"btn btn-outline-primary mr-3\">Test 401 Error</button>\n  <button (click)=\"get400Error()\" class=\"btn btn-outline-primary mr-3\">Test 400 Error</button>\n  <button (click)=\"get400ValidationError()\" class=\"btn btn-outline-primary mr-3\">Test 400 Validation Error</button>\n\n  <div class=\"row mt-5\" *ngIf=\"validationErrors.length > 0\">\n    <ul class=\"text-danger\">\n      <li *ngFor=\"let error of validationErrors\">\n        {{error}}\n      </li>\n    </ul>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "LlU7":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lists/lists.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mt-3\">\n  <h2>{{predicate === 'liked' ? 'members i like' : 'members who like me'}}</h2>\n</div>\n\n\n<div class=\"container mt-3\">\n  <div class=\"row\">\n    <div class=\"btn-group\" name=\"predicate\">\n\n      <button\n        class=\"btn btn-primary\"\n        btnRadio=\"liked\"\n        [(ngModel)]=\"predicate\"\n        (click)=\"loadLikes()\">\n      Members I like</button>\n\n      <button\n        class=\"btn btn-primary\"\n        btnRadio=\"likedBy\"\n        [(ngModel)]=\"predicate\"\n        (click)=\"loadLikes()\">\n      Members who like me</button>\n\n    </div>\n  </div>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-2\" *ngFor=\"let member of members\">\n      <app-member-card [member]=\"member\" ></app-member-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n  <pagination\n    [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\"\n\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n");

/***/ }),

/***/ "MJ6T":
/*!************************************************************************!*\
  !*** ./src/app/modals/confirm-dialogue/confirm-dialogue.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jb25maXJtLWRpYWxvZ3VlL2NvbmZpcm0tZGlhbG9ndWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "MMab":
/*!****************************************************!*\
  !*** ./src/app/_interceptors/error.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            if (error) {
                switch (error.status) {
                    case 400:
                        if (error.error.errors) {
                            var modalStateErrors = [];
                            for (var key in error.error.errors) {
                                if (error.error.errors[key]) {
                                    modalStateErrors.push(error.error.errors[key]); // display errors in a flat list under sign up (no matrix array)
                                }
                            }
                            throw modalStateErrors.flat();
                        }
                        else if (typeof (error.error) === 'object') {
                            _this.toastr.error(error.statusText, error.status);
                        }
                        else {
                            // string
                            _this.toastr.error(error.error, error.status);
                        }
                        break;
                    case 401:
                        _this.toastr.error(error.statusText, error.status);
                        break;
                    case 404:
                        _this.router.navigateByUrl('/not-found');
                        break;
                    case 500:
                        var navigationExtras = { state: { error: error.error } };
                        _this.router.navigateByUrl('/server-error', navigationExtras);
                        break;
                    default:
                        _this.toastr.error('Something unexpected went wrong');
                        console.log(error);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    ErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "MhCG":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/server-error/server-error.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>500 Internal Server Error - refreshing page will make the error disappear</h4>\n\n<ng-container *ngIf=\"error\">\n  <h5 class=\"text-danger\">Error: {{error.message}}</h5>\n  <p class=\"font-weight-bold\">note: if you are seeing this then Angular is probably not to blame</p>\n  <p>what to do next></p>\n  <ol>\n    <li>open the chrome dev tools</li>\n    <li>inspect the network tab</li>\n    <li>check the failing request (in red)</li>\n    <li>examine the request url - make sure this is correct (req diff/wrong server?)</li>\n    <li>reproduce the error in postman - if we see same response, then the issue is not with Angular</li>\n  </ol>\n  <p>following is the stak trace - this is where your investigation should start</p>\n  <code class=\"mt-5\" style=\"background-color: whitesmoke;\">{{error.details}}</code>\n</ng-container>\n\n\n");

/***/ }),

/***/ "NWYD":
/*!****************************************!*\
  !*** ./src/app/_guards/admin.guard.ts ***!
  \****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");





var AdminGuard = /** @class */ (function () {
    function AdminGuard(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        return this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user.roles.includes("Admin") || user.roles.includes("Moderator")) {
                return true;
            }
            _this.toastr.error("You cannot enter this area");
        }));
    };
    AdminGuard.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "OMJ/":
/*!********************************************!*\
  !*** ./src/app/_services/admin.service.ts ***!
  \********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    AdminService.prototype.getUsersWithRoles = function () {
        return this.http.get(this.baseUrl + "admin/users-with-roles");
    };
    AdminService.prototype.updateUserRoles = function (username, roles) {
        return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
    };
    AdminService.prototype.getPhotosForApproval = function () {
        return this.http.get(this.baseUrl + 'admin/photos-to-moderate');
    };
    AdminService.prototype.approvePhoto = function (photoId) {
        return this.http.post(this.baseUrl + 'admin/approve-photo/' + photoId, {});
    };
    AdminService.prototype.rejectPhoto = function (photoId) {
        return this.http.post(this.baseUrl + 'admin/reject-photo' + photoId, {});
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForm.valid && register()\" autocomplete=\"off\">\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\" style=\"margin-right: 10px;\"> I am a: </label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" value=\"male\" formControlName=\"gender\">Male\n    </label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" value=\"female\" formControlName=\"gender\" class=\"ml-3\">Female\n    </label>\n  </div>\n\n  <app-text-input [formControl]='registerForm.controls[\"username\"]'\n  [label]='\"Username\"' ></app-text-input>\n\n  <app-text-input [formControl]='registerForm.controls[\"knownAs\"]'\n  [label]='\"Known as\"' ></app-text-input>\n\n  <app-date-input [formControl]='registerForm.controls[\"dateOfBirth\"]'\n  [label]='\"Date of Birth\"' [maxDate]='maxDate' ></app-date-input>\n\n  <app-text-input [formControl]='registerForm.controls[\"city\"]'\n  [label]='\"City\"' ></app-text-input>\n\n  <app-text-input [formControl]='registerForm.controls[\"country\"]'\n  [label]='\"Country\"' ></app-text-input>\n\n  <app-text-input [formControl]='registerForm.controls[\"password\"]'\n    [label]='\"Password\"' [type]='\"password\"' ></app-text-input>\n\n  <app-text-input [formControl]='registerForm.controls[\"confirmPassword\"]'\n    [label]='\"Confirm Password\"' [type]='\"password\"'></app-text-input>\n\n    <div class=\"row\" *ngIf=\"validationErrors.length > 0\">\n      <ul class=\"text-danger\">\n        <li *ngFor=\"let error of validationErrors\">\n          {{error}}\n        </li>\n      </ul>\n    </div>\n\n  <div class=\"form-group text-center\">\n    <button [disabled]='!registerForm.valid' class=\"btn btn-success mr-2\" type=\"submit\">Register</button>\n    <button class=\"btn btn-default mr-2\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</form>\n\n\n\n\n");

/***/ }),

/***/ "OcPW":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-management.component.html */ "GCkI");
/* harmony import */ var _user_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component.css */ "nyuw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/roles-modal/roles-modal.component */ "yNbP");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/admin.service */ "OMJ/");







var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(adminService, modalService) {
        this.adminService = adminService;
        this.modalService = modalService;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.getUsersWithRoles();
    };
    UserManagementComponent.prototype.getUsersWithRoles = function () {
        var _this = this;
        this.adminService.getUsersWithRoles().subscribe(function (users) {
            _this.users = users;
        });
    };
    UserManagementComponent.prototype.openRolesModal = function (user) {
        var _this = this;
        var config = {
            class: "modal-dialog-centered",
            initialState: {
                user: user,
                roles: this.getRolesArray(user)
            }
        };
        this.bsModalRef = this.modalService.show(src_app_modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__["RolesModalComponent"], config);
        this.bsModalRef.content.updateSelectedRoles.subscribe(function (values) {
            var rolesToUpdate = {
                roles: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(values.filter(function (el) { return el.checked === true; }).map(function (el) { return el.name; }))
            };
            if (rolesToUpdate) {
                _this.adminService.updateUserRoles(user.username, rolesToUpdate.roles).subscribe(function () {
                    user.roles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(rolesToUpdate.roles);
                });
            }
        });
    };
    UserManagementComponent.prototype.getRolesArray = function (user) {
        var roles = [];
        var userRoles = user.roles;
        var availableRoles = [
            { name: 'Admin', value: 'Admin' },
            { name: 'Moderator', value: 'Moderator' },
            { name: 'Member', value: 'Member' }
        ];
        availableRoles.forEach(function (role) {
            var e_1, _a;
            var isMatch = false;
            try {
                for (var userRoles_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(userRoles), userRoles_1_1 = userRoles_1.next(); !userRoles_1_1.done; userRoles_1_1 = userRoles_1.next()) {
                    var userRole = userRoles_1_1.value;
                    if (role.name === userRole) {
                        isMatch = true;
                        role.checked = true;
                        roles.push(role);
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (userRoles_1_1 && !userRoles_1_1.done && (_a = userRoles_1.return)) _a.call(userRoles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!isMatch) {
                role.checked = false;
                roles.push(role);
            }
        });
        return roles;
    };
    UserManagementComponent.ctorParameters = function () { return [
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
    ]; };
    UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-management',
            template: _raw_loader_user_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "Od0w":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-list/member-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"text-center mt-3\">\n  <h2>Your Matches - {{pagination?.totalItems}} found</h2>\n</div>\n\n<div class=\"container mt-3\">\n  <form #form=\"ngForm\" class=\"form-inline mb-3\" (ngSubmit)=\"loadMembers()\" autocomplete=\"off\">\n    <div class=\"form-group\">\n      <label>Age From: </label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px;\" name=\"minAge\" [(ngModel)]=\"userParams.minAge\">\n    </div>\n\n    <div class=\"form-group px-2\">\n      <label>Age To: </label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px;\" name=\"maxAge\" [(ngModel)]=\"userParams.maxAge\">\n    </div>\n\n    <div class=\"form-group px-2\">\n      <label>Show: </label>\n      <select name=\"gender\" style=\"width: 130px\" [(ngModel)]=\"userParams.gender\" class=\"form-control ml-1\" >\n        <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n          {{gender.display}}\n        </option>\n      </select>\n    </div>\n\n    <button class=\"btn btn-primary ml-1\" type=\"submit\">Apply Filters</button>\n    <button (click)=\"resetFilters()\" class=\"btn btn-info ml-1\" type=\"submit\">Reset Filters</button>\n\n    <div class=\"col\">\n      <div class=\"btn-group float-right\">\n      <button class=\"btn btn-primary\"\n        type=\"button\"\n        name=\"orderBy\"\n        (click)=\"loadMembers()\"\n        btnRadio=\"lastActive\"\n        [(ngModel)]=\"userParams.orderBy\">Last Active</button>\n\n      <button class=\"btn btn-primary\"\n        type=\"button\"\n        name=\"orderBy\"\n        (click)=\"loadMembers()\"\n        btnRadio=\"created\"\n        [(ngModel)]=\"userParams.orderBy\">Newest Members</button>\n    </div>\n    </div>\n\n  </form>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-2\" *ngFor=\"let member of members\">\n    <app-member-card [member]=\"member\"></app-member-card>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n  <pagination\n    [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\"\n\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n\n\n<!-- <div class=\"row\">\n  <div class=\"col-2\">\n    <p *ngFor=\"let member of members\">\n      {{member.knownAs}}\n    </p>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "Okie":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-circle{\n  max-height: 50px;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNpcmNsZXtcbiAgbWF4LWhlaWdodDogNTBweDtcbn1cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "PL33":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-detail.component.html */ "rw5Q");
/* harmony import */ var _member_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-detail.component.css */ "Us+a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/ngx-gallery */ "XGsO");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/message.service */ "Qskx");
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/_services/presence.service */ "mV+E");











var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(presence, route, messageService, accountService, router) {
        var _this = this;
        this.presence = presence;
        this.route = route;
        this.messageService = messageService;
        this.accountService = accountService;
        this.router = router;
        this.messages = [];
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (user) { return _this.user = user; });
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.member = data.member;
        });
        this.route.queryParams.subscribe(function (params) {
            params.tab ? _this.selectTab(params.tab) : _this.selectTab(0);
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var e_1, _a;
        var imageUrls = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.member.photos), _c = _b.next(); !_c.done; _c = _b.next()) {
                var photo = _c.value;
                imageUrls.push({
                    small: photo === null || photo === void 0 ? void 0 : photo.url,
                    medium: photo === null || photo === void 0 ? void 0 : photo.url,
                    large: photo === null || photo === void 0 ? void 0 : photo.url,
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.loadMessages = function () {
        var _this = this;
        this.messageService.getMessageThread(this.member.username).subscribe(function (messages) {
            // no pagination so dont need to get from response body
            _this.messages = messages;
        });
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    MemberDetailComponent.prototype.onTabActivated = function (data) {
        this.activeTab = data;
        if (this.activeTab.heading === "Messages" && this.messages.length === 0) {
            this.messageService.createHubConnection(this.user, this.member.username);
        }
        else {
            // leave message tab
            this.messageService.stopHubConnection();
        }
    };
    // leave mem detail component / page
    MemberDetailComponent.prototype.ngOnDestroy = function () {
        this.messageService.stopHubConnection();
    };
    MemberDetailComponent.ctorParameters = function () { return [
        { type: src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_10__["PresenceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"] },
        { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    MemberDetailComponent.propDecorators = {
        memberTabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['memberTabs', { static: true },] }]
    };
    MemberDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-member-detail',
            template: _raw_loader_member_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_member_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_10__["PresenceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"], src_app_services_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.accountService.currentUser$.pipe(// subscribed to automatically
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user)
                return true;
            _this.toastr.error("you shall not pass");
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "Qskx":
/*!**********************************************!*\
  !*** ./src/app/_services/message.service.ts ***!
  \**********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginationHelper */ "uFUS");








var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].hubUrl;
        this.messageThreadSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.messageThread$ = this.messageThreadSource.asObservable();
    }
    MessageService.prototype.createHubConnection = function (user, otherUsername) {
        var _this = this;
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl(this.hubUrl + 'message?user=' + otherUsername, {
            accessTokenFactory: function () { return user.token; }
        })
            .withAutomaticReconnect()
            .build();
        this.hubConnection.start().catch(function (error) { return console.log("[message.service.ts] createHubConnection()", error); });
        this.hubConnection.on("ReceiveMessageThread", function (messages) {
            _this.messageThreadSource.next(messages);
        });
        this.hubConnection.on("NewMessage", function (message) {
            _this.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (messages) {
                _this.messageThreadSource.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(messages, [message])); // new arr with added message
            });
        });
        this.hubConnection.on("UpdatedGroup", function (group) {
            // look inside message thread and mark messages as read for new connection
            if (group.connections.some(function (x) { return x.username == otherUsername; })) {
                _this.messageThread$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (messages) {
                    messages.forEach(function (message) {
                        if (!message.dateRead) {
                            message.dateRead = new Date(Date.now());
                        }
                    });
                    _this.messageThreadSource.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(messages));
                });
            }
        });
    };
    MessageService.prototype.stopHubConnection = function () {
        if (this.hubConnection) {
            this.hubConnection.stop();
        }
    };
    MessageService.prototype.getMessages = function (pageNumber, pageSize, container) {
        var params = Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_7__["getPaginationHeaders"])(pageNumber, pageSize);
        params = params.append('Container', container);
        return Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_7__["getPaginatedResult"])(this.baseUrl + 'messages', params, this.http);
    };
    MessageService.prototype.getMessageThread = function (username) {
        // paginate later
        return this.http.get(this.baseUrl + 'messages/thread/' + username);
    };
    MessageService.prototype.sendMessage = function (username, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this.hubConnection.invoke("SendMessage", { recipientUsername: username, content: content }) // return promise not obs
                        .catch(function (error) { return console.log(error); })]; // no access to error interceptor because it is not http
            });
        });
    };
    MessageService.prototype.deleteMessage = function (id) {
        return this.http.delete(this.baseUrl + "messages/" + id);
    };
    MessageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "R5SI":
/*!****************************************************************!*\
  !*** ./src/app/errors/server-error/server-error.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9ycy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Rv1c":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-list.component.html */ "Od0w");
/* harmony import */ var _member_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-list.component.css */ "V6PN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");





var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(memberService) {
        this.memberService = memberService;
        this.genderList = [{ value: "male", display: "Males" }, { value: "female", display: "Females" }];
        this.userParams = this.memberService.getUserParams();
    }
    MemberListComponent.prototype.ngOnInit = function () {
        // this.members$ = this.memberService.getMembers();
        this.loadMembers();
    };
    MemberListComponent.prototype.loadMembers = function () {
        var _this = this;
        this.memberService.setUserParams(this.userParams);
        this.memberService.getMembers(this.userParams).subscribe(function (response) {
            _this.members = response.result;
            _this.pagination = response.pagination;
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams = this.memberService.resetUserParams();
        this.loadMembers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.userParams.pageNumber = event.page;
        this.memberService.setUserParams(this.userParams);
        this.loadMembers();
    };
    MemberListComponent.ctorParameters = function () { return [
        { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"] }
    ]; };
    MemberListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-member-list',
            template: _raw_loader_member_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_member_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "SECP":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-toggle, .dropdown-item{\n  cursor: pointer;\n}\n\nimg{\n  max-height: 50px;\n  border: 2px solid #fff;\n  display: inline;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVte1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZ3tcbiAgbWF4LWhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "SFMN":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-edit/member-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"member\">\n  <div class=\"col-4\">\n    <h1>Your Profile</h1>\n  </div>\n\n  <div class=\"col-8\">\n    <div class=\"alert alert-info\" *ngIf=\"editForm.dirty\" >\n      <strong>Information: </strong> you have made changes, any unsaved changes will be lost\n    </div>\n  </div>\n\n  <div class=\"col-4\">\n    <div class=\"card\">\n\n      <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" class=\"card-img-top img-tumbnail\">\n\n      <div class=\"card-body\">\n        <div>\n          <strong>Location:</strong>\n          <p>{{member.city}}, {{member.country}}</p>\n        </div>\n\n        <div>\n          <strong>Age:</strong>\n          <p>{{member.age}}</p>\n        </div>\n\n        <div>\n          <strong>Last Active:</strong>\n          <p>{{member.lastActive | timeago}}</p>\n        </div>\n\n        <div>\n          <strong>Member Since:</strong>\n          <p>{{member.created | date: 'dd MMM yyyy'}}</p>\n        </div>\n      </div>\n\n      <div class=\"card-footer\">\n        <button [disabled]=\"!editForm.dirty\" form=\"editForm\" type=\"submit\" class=\"btn btn-success btn-block\">Save Changes</button>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-8\">\n    <tabset class=\"member-tabset\">\n      <tab heading=\"About {{member.knownAs}}\">\n\n        <form #editForm=\"ngForm\" (ngSubmit)=\"updateMember()\" id=\"editForm\">\n          <h4 class=\"mt-2\" >Description</h4>\n          <textarea [(ngModel)]=\"member.introduction\" name=\"introduction\" rows=\"6\" class=\"form-control\"></textarea>\n\n          <h4 class=\"mt-2\" >Looking for</h4>\n          <textarea [(ngModel)]=\"member.lookingFor\" name=\"lookingFor\" rows=\"6\" class=\"form-control\"></textarea>\n\n          <h4 class=\"mt-2\" >Interests</h4>\n          <textarea [(ngModel)]=\"member.interests\" name=\"interests\" rows=\"6\" class=\"form-control\"></textarea>\n\n          <h4 class=\"mt-2\" >Location Details</h4>\n          <div class=\"form-inline\">\n            <label for=\"city\">City: </label>\n            <input [(ngModel)]=\"member.city\" type=\"text\" name=\"city\" class=\"form-control mx-2\">\n\n            <label for=\"country\">Country: </label>\n            <input [(ngModel)]=\"member.country\" type=\"text\" name=\"country\" class=\"form-control mx-2\">\n          </div>\n        </form>\n      </tab>\n\n      <tab heading=\"Edit Photos\">\n        <app-photo-editor [member]=\"member\" ></app-photo-editor>\n      </tab>\n\n    </tabset>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/account.service */ "5ZPe");
/* harmony import */ var _services_presence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/presence.service */ "mV+E");






var AppComponent = /** @class */ (function () {
    function AppComponent(accountService, presence) {
        this.accountService = accountService;
        this.presence = presence;
        this.title = 'Dating App';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setCurrentUSer();
    };
    // set user in account service
    AppComponent.prototype.setCurrentUSer = function () {
        var user = JSON.parse(localStorage.getItem('user')); // undo stringified
        if (user) {
            this.accountService.setCurrentUser(user);
            this.presence.createHubConnection(user); // access to token
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
        { type: _services_presence_service__WEBPACK_IMPORTED_MODULE_5__["PresenceService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"], _services_presence_service__WEBPACK_IMPORTED_MODULE_5__["PresenceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "Tkli":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/errors/not-found/not-found.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1>Not Found</h1>\n  <button class=\"btn btn-info btn-lg\" routerLink=\"/errors\">Return to Error Page</button>\n  <br>\n  <br>\n  <button class=\"btn btn-info btn-lg\" routerLink=\"/\">Return to Home Page</button>\n</div>\n");

/***/ }),

/***/ "U0OR":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card img {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.card-body{\n  padding: 0 25px;\n}\n\n.card-footer{\n  padding: 10px 15px;\n  background-color: #fff;\n  border-top: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1lZGl0L21lbWJlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCBpbWcge1xuICBtYXJnaW46IDI1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogODUlO1xufVxuXG4uY2FyZC1ib2R5e1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cblxuLmNhcmQtZm9vdGVye1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "UpVr":
/*!************************************************************!*\
  !*** ./src/app/_forms/date-input/date-input.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19mb3Jtcy9kYXRlLWlucHV0L2RhdGUtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Ur/1":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-card/member-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" class=\"card-img-top\">\n    <ul class=\"list-inline member-icons animate text-center\">\n\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" routerLink=\"/members/{{member.username}}\">\n        <i class=\"fa fa-user\"></i></button></li>\n\n        <li class=\"list-inline-item\"><button (click)=\"addLike(member)\" class=\"btn btn-primary\">\n        <i class=\"fa fa-heart\"></i></button></li>\n\n        <li class=\"list-inline-item\"><button class=\"btn btn-primary\"\n          routerLink=\"/members/{{member.username}}\"\n          [queryParams]='{tab: 3}'\n          >\n\n        <i class=\"fa fa-envelope\"></i></button></li>\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\">\n      <span [class.is-online]=\"(presence.onlineUsers$ | async).includes(member.username)\" >\n        <i class=\"fa fa-user mr-2\"></i>\n      </span>\n      {{member.knownAs}}, {{member.age}}\n\n    </h6>\n    <p class=\"card-text text-muted text-center\">{{member.city}}</p>\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "Us+a":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card img {\n  margin: 25px;\n  width: 85%;\n  height: 85%;\n}\n\n.card-body{\n  padding: 0 25px;\n}\n\n.card-footer{\n  padding: 10px 15px;\n  background-color: #fff;\n  border-top: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIGltZyB7XG4gIG1hcmdpbjogMjVweDtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiA4NSU7XG59XG5cbi5jYXJkLWJvZHl7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuXG4uY2FyZC1mb290ZXJ7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "V6PN":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VNsv":
/*!******************************************************!*\
  !*** ./src/app/_interceptors/loading.interceptor.ts ***!
  \******************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/busy.service */ "8rMn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(busyService) {
        this.busyService = busyService;
    }
    LoadingInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.busyService.busy();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.busyService.idle();
        }));
    };
    LoadingInterceptor.ctorParameters = function () { return [
        { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"] }
    ]; };
    LoadingInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"]])
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner>\n  <h3>Loading...</h3>\n</ngx-spinner>\n\n\n<app-nav></app-nav>\n\n<div class=\"container\" style=\"margin-top: 100px\">\n   <router-outlet></router-outlet>\n</div>\n\n");

/***/ }),

/***/ "YMan":
/*!**********************************************!*\
  !*** ./src/app/_services/members.service.ts ***!
  \**********************************************/
/*! exports provided: MembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersService", function() { return MembersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _models_userParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/userParams */ "nXO7");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.service */ "5ZPe");
/* harmony import */ var _paginationHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paginationHelper */ "uFUS");









var MembersService = /** @class */ (function () {
    function MembersService(http, accountService) {
        var _this = this;
        this.http = http;
        this.accountService = accountService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.members = [];
        this.memberCache = new Map();
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (user) {
            _this.user = user;
            _this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_6__["UserParams"](user);
        });
    }
    MembersService.prototype.getUserParams = function () {
        return this.userParams;
    };
    MembersService.prototype.setUserParams = function (params) {
        this.userParams = params;
    };
    MembersService.prototype.resetUserParams = function () {
        this.userParams = new _models_userParams__WEBPACK_IMPORTED_MODULE_6__["UserParams"](this.user);
        return this.userParams;
    };
    MembersService.prototype.getMembers = function (userParams) {
        var _this = this;
        // console.log(Object.values(userParams).join('-'));
        // check cache results of query
        var response = this.memberCache.get(Object.values(userParams).join('-')); // same key to get and set
        if (response) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response);
        }
        var params = Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_8__["getPaginationHeaders"])(userParams.pageNumber, userParams.pageSize);
        params = params.append("minAge", userParams.minAge.toString());
        params = params.append("maxAge", userParams.maxAge.toString());
        params = params.append("gender", userParams.gender); // already string
        params = params.append("orderBy", userParams.orderBy);
        return Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_8__["getPaginatedResult"])(this.baseUrl + 'users', params, this.http)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.memberCache.set(Object.values(userParams).join('-'), response);
            return response;
        }));
    };
    // could use navigation extras but member detailed resolver cannot use it
    MembersService.prototype.getMember = function (username) {
        var member = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.memberCache.values()).reduce(function (arr, el) { return arr.concat(el.result); }, []) //previous arr, do to each element- concat new to previous arr
            .find(function (member) { return member.username === username; });
        if (member) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(member);
        }
        return this.http.get(this.baseUrl + 'users/' + username); // getting member from api
    };
    MembersService.prototype.updateMember = function (member) {
        var _this = this;
        return this.http.put(this.baseUrl + 'users', member).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            // get member from service
            var index = _this.members.indexOf(member);
            _this.members[index] = member;
        }));
    };
    MembersService.prototype.setMainPhoto = function (photoId) {
        return this.http.put(this.baseUrl + "users/set-main-photo/" + photoId, {});
    };
    MembersService.prototype.deletePhoto = function (photoId) {
        return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
    };
    MembersService.prototype.addLike = function (username) {
        return this.http.post(this.baseUrl + 'likes/' + username, {});
    };
    MembersService.prototype.getLikes = function (predicate, pageNumber, pageSize) {
        var params = Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_8__["getPaginationHeaders"])(pageNumber, pageSize);
        params = params.append('predicate', predicate);
        return Object(_paginationHelper__WEBPACK_IMPORTED_MODULE_8__["getPaginatedResult"])(this.baseUrl + 'likes', params, this.http);
    };
    MembersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }
    ]; };
    MembersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]])
    ], MembersService);
    return MembersService;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "Rv1c");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "PL33");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lists/lists.component */ "hnRM");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _module_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_module/shared.module */ "iWKi");
/* harmony import */ var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./errors/test-errors/test-errors.component */ "/Lly");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_interceptors/error.interceptor */ "MMab");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "4rg4");
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ "81j5");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "kntC");
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_interceptors/jwt.interceptor */ "Btx/");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "u2he");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_interceptors/loading.interceptor */ "VNsv");
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ "Zkt1");
/* harmony import */ var _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_forms/text-input/text-input.component */ "hOav");
/* harmony import */ var _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_forms/date-input/date-input.component */ "0r7+");
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ "2qCV");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "qPLm");
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_directives/has-role.directive */ "8T1h");
/* harmony import */ var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/user-management/user-management.component */ "OcPW");
/* harmony import */ var _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/photo-management/photo-management.component */ "4+ph");
/* harmony import */ var _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modals/roles-modal/roles-modal.component */ "yNbP");
/* harmony import */ var _modals_confirm_dialogue_confirm_dialogue_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modals/confirm-dialogue/confirm-dialogue.component */ "gLcp");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__["MemberListComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_13__["ListsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
                _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_16__["TestErrorsComponent"],
                _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__["ServerErrorComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_20__["MemberCardComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_22__["MemberEditComponent"],
                _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_25__["PhotoEditorComponent"],
                _forms_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_26__["TextInputComponent"],
                _forms_date_input_date_input_component__WEBPACK_IMPORTED_MODULE_27__["DateInputComponent"],
                _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__["MemberMessagesComponent"],
                _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"],
                _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_30__["HasRoleDirective"],
                _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_31__["UserManagementComponent"],
                _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_32__["PhotoManagementComponent"],
                _modals_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_33__["RolesModalComponent"],
                _modals_confirm_dialogue_confirm_dialogue_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmDialogueComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _module_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_21__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_24__["LoadingInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "Zkt1":
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_photo_editor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./photo-editor.component.html */ "FRJe");
/* harmony import */ var _photo_editor_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-editor.component.css */ "cGH7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");









var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(accountService, memberService) {
        var _this = this;
        this.accountService = accountService;
        this.memberService = memberService;
        this.hasBaseDropzoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        //get user out of observable
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (user) { return _this.user = user; });
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    // set base drop zone
    PhotoEditorComponent.prototype.fileOverBase = function (event) {
        this.hasBaseDropzoneOver = event;
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.memberService.setMainPhoto(photo.id).subscribe(function () {
            _this.user.photoUrl = photo.url;
            _this.accountService.setCurrentUser(_this.user); // update observable and photo in local storage
            _this.member.photoUrl = photo.url;
            _this.member.photos.forEach(function (p) {
                if (p.isMain)
                    p.isMain = false;
                if (p.id == photo.id)
                    p.isMain = true;
            });
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (photoId) {
        var _this = this;
        this.memberService.deletePhoto(photoId).subscribe(function () {
            _this.member.photos = _this.member.photos.filter(function (x) { return x.id !== photoId; });
        });
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: this.baseUrl + "users/add-photo",
            authToken: "Bearer " + this.user.token,
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false; // already using bearer
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var photo = JSON.parse(response);
                _this.member.photos.push(photo);
                if (photo.isMain) {
                    _this.user.photoUrl = photo.url,
                        _this.member.photoUrl = photo.url,
                        _this.accountService.setCurrentUser(_this.user); // upate img everywehre
                }
            }
        };
    };
    PhotoEditorComponent.ctorParameters = function () { return [
        { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
        { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__["MembersService"] }
    ]; };
    PhotoEditorComponent.propDecorators = {
        member: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    PhotoEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-photo-editor',
            template: _raw_loader_photo_editor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_photo_editor_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"], src_app_services_members_service__WEBPACK_IMPORTED_MODULE_7__["MembersService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "a8qC":
/*!********************************************************!*\
  !*** ./src/app/_resolvers/member-detailed.resolver.ts ***!
  \********************************************************/
/*! exports provided: MemberDetailedResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailedResolver", function() { return MemberDetailedResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/members.service */ "YMan");



var MemberDetailedResolver = /** @class */ (function () {
    function MemberDetailedResolver(membersService) {
        this.membersService = membersService;
    }
    MemberDetailedResolver.prototype.resolve = function (route) {
        return this.membersService.getMember(route.paramMap.get('username'));
    };
    MemberDetailedResolver.ctorParameters = function () { return [
        { type: _services_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"] }
    ]; };
    MemberDetailedResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"]])
    ], MemberDetailedResolver);
    return MemberDetailedResolver;
}());



/***/ }),

/***/ "cGH7":
/*!*****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img-thumbnail{\n  height: 100px;\n  min-width: 100px !important;\n  margin-bottom: 2px;\n}\n\n.nv-file-over{\n  border: dotted 3px red;\n}\n\ninput[type=file]{\n  color: transparent;\n}\n\n.not-approved{\n  opacity: 0.2;\n}\n\n.img-wrapper{\n  position: relative;\n}\n\n.img-text{\n  position: absolute;\n  bottom: 45%;\n  left: 5%\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvcGhvdG8tZWRpdG9yL3Bob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmltZy10aHVtYm5haWx7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ubnYtZmlsZS1vdmVye1xuICBib3JkZXI6IGRvdHRlZCAzcHggcmVkO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVde1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ub3QtYXBwcm92ZWR7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmltZy13cmFwcGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWctdGV4dHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ1JTtcbiAgbGVmdDogNSVcbn1cblxuIl19 */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "gLcp":
/*!***********************************************************************!*\
  !*** ./src/app/modals/confirm-dialogue/confirm-dialogue.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmDialogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogueComponent", function() { return ConfirmDialogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_confirm_dialogue_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./confirm-dialogue.component.html */ "CfLO");
/* harmony import */ var _confirm_dialogue_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialogue.component.css */ "MJ6T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





var ConfirmDialogueComponent = /** @class */ (function () {
    function ConfirmDialogueComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ConfirmDialogueComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogueComponent.prototype.confirm = function () {
        this.result = true;
        this.bsModalRef.hide();
    };
    ConfirmDialogueComponent.prototype.decline = function () {
        this.result = false;
        this.bsModalRef.hide();
    };
    ConfirmDialogueComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
    ]; };
    ConfirmDialogueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-confirm-dialogue',
            template: _raw_loader_confirm_dialogue_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_confirm_dialogue_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], ConfirmDialogueComponent);
    return ConfirmDialogueComponent;
}());



/***/ }),

/***/ "gTRF":
/*!**************************************************************!*\
  !*** ./src/app/modals/roles-modal/roles-modal.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yb2xlcy1tb2RhbC9yb2xlcy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "hOav":
/*!***********************************************************!*\
  !*** ./src/app/_forms/text-input/text-input.component.ts ***!
  \***********************************************************/
/*! exports provided: TextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputComponent", function() { return TextInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_text_input_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./text-input.component.html */ "n7CQ");
/* harmony import */ var _text_input_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-input.component.css */ "1f5s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var TextInputComponent = /** @class */ (function () {
    function TextInputComponent(ngControl) {
        this.ngControl = ngControl;
        this.type = 'text';
        this.ngControl.valueAccessor = this;
    }
    TextInputComponent.prototype.writeValue = function (obj) {
    };
    TextInputComponent.prototype.registerOnChange = function (fn) {
    };
    TextInputComponent.prototype.registerOnTouched = function (fn) {
    };
    TextInputComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] }
    ]; };
    TextInputComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TextInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-text-input',
            template: _raw_loader_text_input_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_text_input_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]])
    ], TextInputComponent);
    return TextInputComponent;
}());



/***/ }),

/***/ "hnRM":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lists.component.html */ "LlU7");
/* harmony import */ var _lists_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists.component.css */ "zqoj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/members.service */ "YMan");





var ListsComponent = /** @class */ (function () {
    function ListsComponent(memberService) {
        this.memberService = memberService;
        this.predicate = 'liked';
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    ListsComponent.prototype.ngOnInit = function () {
        this.loadLikes();
    };
    ListsComponent.prototype.loadLikes = function () {
        var _this = this;
        this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(function (response) {
            _this.members = response.result;
            _this.pagination = response.pagination;
        });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pageNumber = event.page;
        this.loadLikes();
    };
    ListsComponent.ctorParameters = function () { return [
        { type: _services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"] }
    ]; };
    ListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-lists',
            template: _raw_loader_lists_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_lists_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "hqKe":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "iWKi":
/*!******************************************!*\
  !*** ./src/app/_module/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/ngx-gallery */ "XGsO");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "s3T5");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    positionClass: 'toast-bottom-right'
                }),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
                ngx_timeago__WEBPACK_IMPORTED_MODULE_11__["TimeagoModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot()
            ],
            exports: [
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"],
                _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"],
                ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
                ngx_timeago__WEBPACK_IMPORTED_MODULE_11__["TimeagoModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "keMZ");
/* harmony import */ var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.css */ "SECP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/account.service */ "5ZPe");







var NavComponent = /** @class */ (function () {
    function NavComponent(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        // store input info
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        // console.log("[nav.component.ts login()]",this.model)
        this.accountService.login(this.model).subscribe(function (response) {
            console.log("[nav.components.ts] accountservice.login()", response);
            _this.router.navigateByUrl('members');
        });
    };
    NavComponent.prototype.logout = function () {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    };
    NavComponent.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-nav',
            template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "keMZ":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">Dating App</a>\n    <!-- <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\"> -->\n      <ul class=\"navbar-nav mr-auto\">\n        <ng-container *ngIf=\"accountService.currentUser$ | async\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/members\" routerLinkActive=\"active\">Matches</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/lists\" routerLinkActive=\"active\">Likes</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/messages\" routerLinkActive=\"active\">Messages</a>\n          </li>\n          <li class=\"nav-item\" *appHasRole=\"['Admin', 'Moderator']\" >\n            <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\n          </li>\n        </ng-container>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/errors\" routerLinkActive=\"active\">Errors</a>\n        </li>\n      </ul>\n\n      <div class=\"dropdown\" *ngIf=\"(accountService.currentUser$ | async) as user\" dropdown>\n        <img src=\"{{user.photoUrl || './assets/user.png'}}\" alt=\"{{user.username}}\">\n        <a class=\"dropdown-toggle text-light ml-2\" dropdownToggle>Welcome {{user.knownAs || user.username | titlecase}}</a>\n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n          <a class=\"dropdown-item\" routerLink=\"/member/edit\">Edit Profile</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n        </div>\n      </div>\n\n      <form #loginForm=\"ngForm\" *ngIf=\"(accountService.currentUser$ | async) === null\"  class=\"form-inline mt-2 mt-md-0\" (ngSubmit)=\"login()\" autocomplete=\"off\">\n        <input\n          name=\"username\"\n          [(ngModel)]=\"model.username\"\n\n          class=\"form-control mr-sm-2\"\n          type=\"text\"\n          placeholder=\"Username\" >\n        <input\n          name=\"password\"\n          [(ngModel)]=\"model.password\"\n\n          class=\"form-control mr-sm-2\"\n          type=\"password\"\n          placeholder=\"Password\" >\n        <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Login</button>\n      </form>\n    </div>\n  <!-- </div> -->\n</nav>\n\n");

/***/ }),

/***/ "kntC":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-card.component.html */ "Ur/1");
/* harmony import */ var _member_card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-card.component.css */ "oXys");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");
/* harmony import */ var src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/presence.service */ "mV+E");







var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(memberService, toastr, presence) {
        this.memberService = memberService;
        this.toastr = toastr;
        this.presence = presence;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.addLike = function (member) {
        var _this = this;
        this.memberService.addLike(member.username).subscribe(function () {
            _this.toastr.success("you have liked " + member.knownAs);
        }); // interceptor handles error
    };
    MemberCardComponent.ctorParameters = function () { return [
        { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__["MembersService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"] }
    ]; };
    MemberCardComponent.propDecorators = {
        member: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    MemberCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-member-card',
            template: _raw_loader_member_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_member_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_members_service__WEBPACK_IMPORTED_MODULE_5__["MembersService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], src_app_services_presence_service__WEBPACK_IMPORTED_MODULE_6__["PresenceService"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "mV+E":
/*!***********************************************!*\
  !*** ./src/app/_services/presence.service.ts ***!
  \***********************************************/
/*! exports provided: PresenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceService", function() { return PresenceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");








var PresenceService = /** @class */ (function () {
    function PresenceService(toastr, router) {
        this.toastr = toastr;
        this.router = router;
        this.hubUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].hubUrl;
        this.onlineUsersSource = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.onlineUsers$ = this.onlineUsersSource.asObservable();
    }
    PresenceService.prototype.createHubConnection = function (user) {
        var _this = this;
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl(this.hubUrl + 'presence', {
            accessTokenFactory: function () { return user.token; }
        })
            .withAutomaticReconnect() //network problem
            .build();
        this.hubConnection
            .start()
            .catch(function (error) { return console.log("[presence.service.ts] createHubConnection()", error); });
        this.hubConnection.on("UserIsOnline", function (username) {
            _this.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (usernames) {
                _this.onlineUsersSource.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(usernames, [username]));
            });
        });
        this.hubConnection.on("UserIsOffline", function (username) {
            _this.onlineUsers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (usernames) {
                _this.onlineUsersSource.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(usernames.filter(function (x) { return x !== username; })));
            });
        });
        this.hubConnection.on("GetOnlineUsers", function (usernames) {
            _this.onlineUsersSource.next(usernames);
        });
        this.hubConnection.on("NewMessageReceived", function (_a) {
            var username = _a.username, knownAs = _a.knownAs;
            _this.toastr.info(knownAs + " has sent you a new message!")
                .onTap
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                .subscribe(function () { return _this.router.navigateByUrl('/members/' + username + '?tab=3'); });
        });
    };
    PresenceService.prototype.stopHubConnection = function () {
        this.hubConnection.stop().catch(function (error) { return console.log("[presence.service.ts] stopHubConnection()", error); });
    };
    PresenceService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PresenceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PresenceService);
    return PresenceService;
}());



/***/ }),

/***/ "n7CQ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_forms/text-input/text-input.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n  <input\n    [class.is-invalid]=\"ngControl.touched && ngControl.invalid\"\n    type=\"{{type}}\"\n    class=\"form-control\"\n    name=\"password\"\n    [formControl]=\"ngControl.control\"\n    placeholder=\"{{label}}\">\n\n  <div *ngIf=\"ngControl.control.errors?.required\" class=\"invalid-feedback\">\n    Please enter a {{label}}</div>\n\n  <div *ngIf=\"ngControl.control.errors?.minlength\" class=\"invalid-feedback\">\n    {{label}} msut be at least {{ngControl.control.errors.minlength['requiredLength']}} characters</div>\n\n  <div *ngIf=\"ngControl.control.errors?.maxlength\" class=\"invalid-feedback\">\n    {{label}} must be at most {{ngControl.control.errors.maxlength['requiredLength']}} characters</div>\n\n  <div *ngIf=\"ngControl.control.errors?.isMatching\" class=\"invalid-feedback\">\n    Passwords do not match</div>\n\n\n</div>\n");

/***/ }),

/***/ "nXO7":
/*!***************************************!*\
  !*** ./src/app/_models/userParams.ts ***!
  \***************************************/
/*! exports provided: UserParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserParams", function() { return UserParams; });
var UserParams = /** @class */ (function () {
    function UserParams(user) {
        this.minAge = 18;
        this.maxAge = 99;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.orderBy = 'lastActive';
        this.gender = user.gender === "female" ? "male" : "female";
    }
    return UserParams;
}());



/***/ }),

/***/ "nyuw":
/*!*********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "oXys":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card:hover img{\n  transform: scale(1.1, 1.1);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n  opacity: 0.7;\n}\n\n.card img{\n  transform: scale(1.0, 1.0);\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n}\n\n.card-img-wrapper{\n  overflow: hidden;\n  position: relative;\n}\n\n.member-icons{\n  position: absolute;\n  bottom: -30%;\n  left: 0%;\n  right: 0%;\n  margin-right: auto;\n  margin-left: auto;\n  opacity: 0;\n}\n\n.card-img-wrapper:hover .member-icons{\n  bottom: 0%;\n  opacity: 1;\n}\n\n.animate{\n  transition: all 0.3 ease-in-out;\n}\n\n@-webkit-keyframes fa-blink{\n  0% {opacity: 1;}\n  100% {opacity: 0.4;}\n}\n\n@keyframes fa-blink{\n  0% {opacity: 1;}\n  100% {opacity: 0.4;}\n}\n\n.is-online{\n  -webkit-animation: fa-blink 1.5s linear infinite;\n          animation: fa-blink 1.5s linear infinite;\n  color: rgb(1, 189, 42);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLElBQUksVUFBVSxDQUFDO0VBQ2YsTUFBTSxZQUFZLENBQUM7QUFDckI7O0FBSEE7RUFDRSxJQUFJLFVBQVUsQ0FBQztFQUNmLE1BQU0sWUFBWSxDQUFDO0FBQ3JCOztBQUVBO0VBQ0UsZ0RBQXdDO1VBQXhDLHdDQUF3QztFQUN4QyxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1jYXJkL21lbWJlci1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDpob3ZlciBpbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jYXJkIGltZ3tcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5jYXJkLWltZy13cmFwcGVye1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tZW1iZXItaWNvbnN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMzAlO1xuICBsZWZ0OiAwJTtcbiAgcmlnaHQ6IDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25ze1xuICBib3R0b206IDAlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYW5pbWF0ZXtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYS1ibGlua3tcbiAgMCUge29wYWNpdHk6IDE7fVxuICAxMDAlIHtvcGFjaXR5OiAwLjQ7fVxufVxuXG4uaXMtb25saW5le1xuICBhbmltYXRpb246IGZhLWJsaW5rIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICBjb2xvcjogcmdiKDEsIDE4OSwgNDIpO1xufVxuIl19 */");

/***/ }),

/***/ "qPLm":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-panel.component.html */ "2Hd7");
/* harmony import */ var _admin_panel_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-panel.component.css */ "hqKe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent.ctorParameters = function () { return []; };
    AdminPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-admin-panel',
            template: _raw_loader_admin_panel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_panel_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "rRnX":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_forms/date-input/date-input.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n  <input\n    type='text'\n    [class.is-invalid]='ngControl.touched && ngControl.invalid'\n    class='form-control'\n    [formControl]='ngControl.control'\n    placeholder=\"{{label}}\"\n    bsDatepicker\n    [bsConfig]='bsConfig'\n    [maxDate]='maxDate'\n   >\n   <div *ngIf=\"ngControl.control.errors?.required\" class=\"invalid-feedback\">{{label}} is required</div>\n</div>\n\n\n\n");

/***/ }),

/***/ "rt/O":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-4\">\n  <div class=\"btn-group\" name=\"container\">\n\n    <button class=\"btn btn-primary\" btnRadio=\"Unread\" (click)=\"loadMessages()\" [(ngModel)]=\"container\">\n      <i class=\"fa fa-envelope\"></i> Unread\n    </button>\n\n    <button class=\"btn btn-primary\" btnRadio=\"Inbox\" (click)=\"loadMessages()\" [(ngModel)]=\"container\">\n      <i class=\"fa fa-envelope-open\"></i> Inbox\n    </button>\n\n    <button class=\"btn btn-primary\" btnRadio=\"Outbox\" (click)=\"loadMessages()\" [(ngModel)]=\"container\">\n      <i class=\"fa fa-paper-plane\"></i> Outbox\n    </button>\n\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"messages?.length === 0\" >\n  <h3>No Messages</h3>\n</div>\n\n<div class=\"row\" *ngIf=\"messages?.length > 0\" >\n  <table class=\"table table-hover\" style=\"cursor: pointer\" >\n    <tr>\n      <th style=\"width: 40%\">Message</th>\n      <th style=\"width: 20%\">From / To</th>\n      <th style=\"width: 20%\">Sent / Received</th>\n      <th style=\"width: 20%\"></th>\n    </tr>\n    <tr [hidden]=\"loading\" *ngFor=\"let message of messages\"\n      routerLink=\"{{container === 'Outbox'\n          ? '/members/' + message.recipientUsername\n          : '/members/' + message.senderUsername}}\" [queryParams]='{tab: 3}' >\n        <td>{{message.content}}</td>\n        <td>\n          <div *ngIf=\"container === 'Outbox'\" >\n            <img\n            class=\"img-circle rounded-circle mr-2\"\n            src=\"{{message.recipientPhotoUrl || './assets/user.png'}}\"\n            alt=\"{{message.recipientUsername}}\">\n\n            <strong>{{message.recipientUsername | titlecase}}</strong>\n          </div>\n\n          <div *ngIf=\"container !== 'Outbox'\" >\n            <img\n            class=\"img-circle rounded-circle mr-2\"\n            src=\"{{message.senderPhotoUrl || './assets/user.png'}}\"\n            alt=\"{{message.senderUsername}}\">\n\n            <strong>{{message.senderUsername | titlecase}}</strong>\n          </div>\n        </td>\n\n        <td>{{message.messageSent | timeago}}</td>\n        <td>\n          <button\n            (click)=\"$event.stopPropagation()\"  \n            (click)=\"deleteMessage(message.id)\"\n            class=\"btn btn-danger\">Delete</button>\n        </td>\n      </tr>\n  </table>\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination && !loading\">\n  <pagination\n    [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\"\n\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\">\n  </pagination>\n</div>\n");

/***/ }),

/***/ "rw5Q":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/member-detail/member-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"  >\n  <div class=\"col-4\">\n    <div class=\"card\">\n\n      <img src=\"{{member.photoUrl || './assets/user.png'}}\" alt=\"{{member.knownAs}}\" class=\"card-img-top img-tumbnail\">\n\n      <div class=\"card-body\">\n        <div class=\"mb-2\" *ngIf=\"(presence.onlineUsers$ | async).includes(member.username)\" >\n          <i class=\"fa fa-user-circle text-success\"></i> Online now\n        </div>\n\n\n        <div>\n          <strong>Location:</strong>\n          <p>{{member.city}}, {{member.country}}</p>\n        </div>\n\n        <div>\n          <strong>Age:</strong>\n          <p>{{member.age}}</p>\n        </div>\n\n        <div>\n          <strong>Last Active:</strong>\n          <p>{{member.lastActive | timeago}}</p>\n        </div>\n\n        <div>\n          <strong>Member Since:</strong>\n          <p>{{member.created | date: 'dd MMM yyyy'}}</p>\n        </div>\n      </div>\n\n      <div class=\"card-footer\">\n        <div class=\"btn-group d-flex\">\n          <button class=\"btn btn-primary\">\n            Like</button>\n          <button class=\"btn btn-success\" (click)=\"selectTab(3)\" >\n            Message</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-8\">\n    <tabset class=\"member-tabset\" #memberTabs>\n      <tab heading=\"About {{member.knownAs}}\" (selectTab)=\"onTabActivated($event)\" >\n        <h4>Description</h4>\n        <p>{{member.introduction}}</p>\n        <h4>Looking for</h4>\n        <p>{{member.lookingFor}}</p>\n      </tab>\n\n      <tab heading=\"Interests\" (selectTab)=\"onTabActivated($event)\" >\n        <h4>Interests</h4>\n        <p>{{member.interests}}</p>\n      </tab>\n\n      <tab heading=\"Photos\" (selectTab)=\"onTabActivated($event)\" >\n        <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\" style=\"display: inline-block; margin-bottom: 20px;\"></ngx-gallery>\n      </tab>\n\n      <tab heading=\"Messages\" (selectTab)=\"onTabActivated($event)\" >\n        <app-member-messages [username]=\"member.username\"></app-member-messages>\n      </tab>\n    </tabset>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "u2he":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_member_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./member-edit.component.html */ "SFMN");
/* harmony import */ var _member_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-edit.component.css */ "U0OR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/account.service */ "5ZPe");
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/members.service */ "YMan");









var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(accountService, memberService, toastr) {
        var _this = this;
        this.accountService = accountService;
        this.memberService = memberService;
        this.toastr = toastr;
        // current user is observable, need to access obj inside
        this.accountService.currentUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (user) { return _this.user = user; });
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        this.loadMember();
    };
    MemberEditComponent.prototype.loadMember = function () {
        var _this = this;
        this.memberService.getMember(this.user.username).subscribe(function (member) {
            _this.member = member;
        });
    };
    MemberEditComponent.prototype.updateMember = function () {
        var _this = this;
        this.memberService.updateMember(this.member).subscribe(function () {
            _this.toastr.success("Profile updated successfully");
            _this.editForm.reset(_this.member);
        });
    };
    MemberEditComponent.ctorParameters = function () { return [
        { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
        { type: src_app_services_members_service__WEBPACK_IMPORTED_MODULE_8__["MembersService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    MemberEditComponent.propDecorators = {
        editForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['editForm',] }],
        unloadNotification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:beforeunload", ["$event"],] }]
    };
    MemberEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-member-edit',
            template: _raw_loader_member_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_member_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"], src_app_services_members_service__WEBPACK_IMPORTED_MODULE_8__["MembersService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "uFUS":
/*!***********************************************!*\
  !*** ./src/app/_services/paginationHelper.ts ***!
  \***********************************************/
/*! exports provided: getPaginatedResult, getPaginationHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginatedResult", function() { return getPaginatedResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaginationHeaders", function() { return getPaginationHeaders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/pagination */ "Au4E");



function getPaginatedResult(url, params, http) {
    var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginatedResult"]();
    return http.get(url, { observe: "response", params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
        paginatedResult.result = response.body;
        if (response.headers.get("Pagination") !== null) {
            paginatedResult.pagination = JSON.parse(response.headers.get("Pagination"));
        }
        ;
        return paginatedResult;
    }));
}
function getPaginationHeaders(pageNumber, pageSize) {
    var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    params = params.append("pageNumber", pageNumber.toString());
    params = params.append("pageSize", pageSize.toString());
    return params;
}


/***/ }),

/***/ "v9I1":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChangesGuard", function() { return PreventUnsavedChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/confirm.service */ "xuvy");



var PreventUnsavedChangesGuard = /** @class */ (function () {
    function PreventUnsavedChangesGuard(confirmService) {
        this.confirmService = confirmService;
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return this.confirmService.confirm(); // observable, auto subscribe
        }
        return true;
    };
    PreventUnsavedChangesGuard.ctorParameters = function () { return [
        { type: _services_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmService"] }
    ]; };
    PreventUnsavedChangesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmService"]])
    ], PreventUnsavedChangesGuard);
    return PreventUnsavedChangesGuard;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "qPLm");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "4rg4");
/* harmony import */ var _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors/server-error/server-error.component */ "81j5");
/* harmony import */ var _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors/test-errors/test-errors.component */ "/Lly");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lists/lists.component */ "hnRM");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "PL33");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "u2he");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "Rv1c");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_guards/admin.guard */ "NWYD");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_guards/auth.guard */ "PSoG");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "v9I1");
/* harmony import */ var _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_resolvers/member-detailed.resolver */ "a8qC");

















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
        children: [
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_11__["MemberListComponent"] },
            { path: 'members/:username', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_9__["MemberDetailComponent"], resolve: { member: _resolvers_member_detailed_resolver__WEBPACK_IMPORTED_MODULE_16__["MemberDetailedResolver"] } },
            { path: 'member/edit', component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_10__["MemberEditComponent"], canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_15__["PreventUnsavedChangesGuard"]] },
            { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__["ListsComponent"] },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"] },
            { path: 'admin', component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_3__["AdminPanelComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]] },
        ]
    },
    { path: 'errors', component: _errors_test_errors_test_errors_component__WEBPACK_IMPORTED_MODULE_6__["TestErrorsComponent"] },
    { path: 'not-found', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: 'server-error', component: _errors_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_5__["ServerErrorComponent"] },
    { path: '**', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "xuvy":
/*!**********************************************!*\
  !*** ./src/app/_services/confirm.service.ts ***!
  \**********************************************/
/*! exports provided: ConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _modals_confirm_dialogue_confirm_dialogue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/confirm-dialogue/confirm-dialogue.component */ "gLcp");





var ConfirmService = /** @class */ (function () {
    function ConfirmService(modalService) {
        this.modalService = modalService;
    }
    ConfirmService.prototype.confirm = function (title, message, btnOkText, btnCancelText) {
        if (title === void 0) { title = "Confirmation"; }
        if (message === void 0) { message = "Are you sure you want to do this?"; }
        if (btnOkText === void 0) { btnOkText = "Ok"; }
        if (btnCancelText === void 0) { btnCancelText = "Cancel"; }
        var config = {
            initialState: {
                title: title,
                message: message,
                btnOkText: btnOkText,
                btnCancelText: btnCancelText
            }
        };
        this.bsModelRef = this.modalService.show(_modals_confirm_dialogue_confirm_dialogue_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogueComponent"], config);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](this.getResult());
    };
    ConfirmService.prototype.getResult = function () {
        var _this = this;
        return function (observer) {
            var subscription = _this.bsModelRef.onHidden.subscribe(function () {
                observer.next(_this.bsModelRef.content.result);
                observer.complete();
            });
            return {
                unsubscribe: function () {
                    subscription.unsubscribe();
                }
            };
        };
    };
    ConfirmService.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    ConfirmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], ConfirmService);
    return ConfirmService;
}());



/***/ }),

/***/ "yNbP":
/*!*************************************************************!*\
  !*** ./src/app/modals/roles-modal/roles-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: RolesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModalComponent", function() { return RolesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roles_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roles-modal.component.html */ "Cegr");
/* harmony import */ var _roles_modal_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles-modal.component.css */ "gTRF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





var RolesModalComponent = /** @class */ (function () {
    function RolesModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    RolesModalComponent.prototype.ngOnInit = function () {
    };
    RolesModalComponent.prototype.updateRoles = function () {
        this.updateSelectedRoles.emit(this.roles);
        this.bsModalRef.hide();
    };
    RolesModalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
    ]; };
    RolesModalComponent.propDecorators = {
        updateSelectedRoles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    RolesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-roles-modal',
            template: _raw_loader_roles_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_roles_modal_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], RolesModalComponent);
    return RolesModalComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zqoj":
/*!*******************************************!*\
  !*** ./src/app/lists/lists.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpc3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map