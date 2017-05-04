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
var employee_1 = require("../models/employee");
var form_poster_service_1 = require("../services/form-poster.service");
var HomeComponent = (function () {
    function HomeComponent(formService) {
        var _this = this;
        this.formService = formService;
        this.pageTitle = 'Home';
        this.employee = new employee_1.Employee('', '', true, 'other', 'default');
        this.languages = ['Java', 'C++'];
        this.formService.getLanguages().subscribe(function (data) { return _this.languages = data.languages; }, function (err) { return console.log('Error in getting languages : ', err); });
    }
    HomeComponent.prototype.firstNameToUpperCase = function (value) {
        if (value.length > 0)
            this.employee.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        else
            this.employee.firstName = value;
    };
    HomeComponent.prototype.validatePrimaryLanguage = function (value) {
        this.hasPrimaryLanguageError =
            (this.languages.indexOf(value) != -1) ? false : true;
    };
    HomeComponent.prototype.submitForm = function (form) {
        console.log('Form to be submitted :' + form.value);
        this.formService.postEmployeeForm(form.value).
            subscribe(function (data) { return console.log('Subscribe call Back success: ', data); }, function (err) { return console.log('Subscribe call Back error', err); });
        return false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/home.component.html'
    }),
    __metadata("design:paramtypes", [form_poster_service_1.FormPosterService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map