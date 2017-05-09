"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var customer_1 = require("../models/customer");
var CustomerComponent = (function () {
    function CustomerComponent(fb) {
        this.fb = fb;
        this.customer = new customer_1.Customer();
        this.emailMessage = '';
        this.emailConfirmMessage = '';
        this.emailValidationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Email format is incorrect.'
        };
        this.confirmEmailValidationMessages = {
            required: 'Please confirm your email address.',
            mismatch: 'Email does not match.'
        };
    }
    CustomerComponent.prototype.ngOnInit = function () {
        // this.customerForm = new FormGroup({
        //     firstName: new FormControl(),
        //     lastName: new FormControl(),
        //     email: new FormControl(),
        //     sendCatalog: new FormControl(true)
        // })
        // console.log('Inside OnInit of customer')
        var _this = this;
        this.customerForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(5), forms_1.Validators.minLength(3)]],
            emailGroup: this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9]+")]],
                confirmEmail: ['', forms_1.Validators.required]
            }, { validator: emailMatcher }),
            phone: '',
            notification: '',
            sendCatalog: true,
            rating: ['', [ratingRangeParam(1, 6)]] //customer validator
        });
        this.customerForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotification(value); });
        var emailCtrl = this.customerForm.get('emailGroup');
        emailCtrl.valueChanges.subscribe(function (value) { return _this.setMessage(emailCtrl); });
    };
    CustomerComponent.prototype.setMessage = function (absCtrl) {
        var _this = this;
        var emailCtrl = absCtrl.get('email');
        var emailConfirmCtrl = absCtrl.get('confirmEmail');
        if ((absCtrl.touched || absCtrl.dirty) && absCtrl.errors) {
            this.emailConfirmMessage = Object.keys(absCtrl.errors).map(function (key) { return _this.confirmEmailValidationMessages[key]; }).join('');
        }
        if ((emailCtrl.touched || emailCtrl.dirty) && emailCtrl.errors) {
            this.emailMessage = Object.keys(emailCtrl.errors).map(function (key) { return _this.emailValidationMessages[key]; }).join('');
        }
        if ((emailConfirmCtrl.touched || emailConfirmCtrl.dirty) && emailConfirmCtrl.errors) {
            this.emailConfirmMessage = Object.keys(emailConfirmCtrl.errors).map(function (key) { return _this.confirmEmailValidationMessages[key]; }).join('');
        }
    };
    CustomerComponent.prototype.save = function () {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    };
    CustomerComponent.prototype.populateTestData = function (flag) {
        (flag === 'set') ?
            this.customerForm.setValue({
                firstName: 'Anshul',
                lastName: 'Khare',
                emailGroup: {
                    email: 'anshul.khare@tavant.com',
                    confirmEmail: ''
                },
                phone: '1234567890',
                notification: 'email',
                sendCatalog: false,
                rating: 0
            })
            :
                this.customerForm.patchValue({
                    phone: '6666667890',
                    notification: 'text',
                    sendCatalog: true
                });
    };
    CustomerComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
            // phoneControl.markAsDirty;
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: 'reactive-form',
        templateUrl: 'app/home/customer.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//Custom validator.
function ratingRange(absCtrl) {
    if (absCtrl.value != undefined && (isNaN(absCtrl.value) || absCtrl.value < 1 || absCtrl.value > 5)) {
        return { range: true };
    }
    return null;
}
//Custom validator - parameterizd
function ratingRangeParam(min, max) {
    return function (absCtrl) {
        if (absCtrl.value != undefined && (isNaN(absCtrl.value) || absCtrl.value < min || absCtrl.value > max)) {
            return { range: true };
        }
        return null;
    };
}
function emailMatcher(absCtrl) {
    var emailCtrl = absCtrl.get('email');
    var confirmEmailCtrl = absCtrl.get('confirmEmail');
    if (emailCtrl.pristine || confirmEmailCtrl.pristine)
        return null;
    if (emailCtrl.value === confirmEmailCtrl.value)
        return null;
    return { 'mismatch': true };
}
//# sourceMappingURL=customer.component.js.map