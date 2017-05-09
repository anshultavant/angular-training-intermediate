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
var DynaFormComponent = (function () {
    function DynaFormComponent(fb) {
        this.fb = fb;
    }
    DynaFormComponent.prototype.ngOnInit = function () {
        this.dynamicForm = this.fb.group({
            addresses: this.fb.array([this.buildAddress])
        });
    };
    DynaFormComponent.prototype.save = function () {
        console.log('Saving Dynamic Form');
    };
    DynaFormComponent.prototype.buildAddress = function () {
        return this.fb.group({
            addressType: '',
            street1: '',
            street2: ''
        });
    };
    DynaFormComponent.prototype.getAddresses = function () {
        return this.dynamicForm.get('addresses');
    };
    DynaFormComponent.prototype.addAddress = function () {
        console.log('Adding address...');
        this.getAddresses().push(this.buildAddress());
        console.log('Addresses Array size: ' + this.getAddresses().length);
    };
    return DynaFormComponent;
}());
DynaFormComponent = __decorate([
    core_1.Component({
        selector: 'dyna-form',
        templateUrl: 'app/home/dynaform.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], DynaFormComponent);
exports.DynaFormComponent = DynaFormComponent;
//# sourceMappingURL=dynaform.component.js.map