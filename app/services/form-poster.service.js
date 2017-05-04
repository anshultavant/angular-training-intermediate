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
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/do'
// import 'rxjs/add/operator/catch'
var FormPosterService = (function () {
    function FormPosterService(_http) {
        this._http = _http;
        this.httpUrl = 'http://localhost:3100/';
    }
    FormPosterService.prototype.handleError = function (error) {
        console.log('Handle Error Post error: ', error);
        return Rx_1.Observable.throw(error.statusText);
    };
    FormPosterService.prototype.postEmployeeForm = function (employee) {
        console.log("posting employee: " + employee);
        var body = JSON.stringify(employee);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.httpUrl, body, options).
            map(this.extractData).
            catch(this.handleError);
    };
    FormPosterService.prototype.getLanguages = function () {
        console.log("Getting languages");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.httpUrl)
            .map(this.extractLanguages)
            .catch(this.handleError);
    };
    FormPosterService.prototype.extractLanguages = function (res) {
        var body = res.json();
        return body.data || {};
    };
    FormPosterService.prototype.extractData = function (res) {
        var body = res.json();
        return body.fields || {};
    };
    return FormPosterService;
}());
FormPosterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FormPosterService);
exports.FormPosterService = FormPosterService;
//# sourceMappingURL=form-poster.service.js.map