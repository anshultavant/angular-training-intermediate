"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var welcome_component_1 = require("./home/welcome.component");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var form_poster_service_1 = require("./services/form-poster.service");
var customer_component_1 = require("./home/customer.component");
var forms_2 = require("@angular/forms");
var dynaform_component_1 = require("./home/dynaform.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'forms', component: home_component_1.HomeComponent },
                { path: 'reactiveforms', component: customer_component_1.CustomerComponent },
                { path: 'dynamicforms', component: dynaform_component_1.DynaFormComponent }
            ])
        ],
        declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, home_component_1.HomeComponent, customer_component_1.CustomerComponent, dynaform_component_1.DynaFormComponent],
        providers: [form_poster_service_1.FormPosterService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map