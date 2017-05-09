import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './home/welcome.component'
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FormPosterService } from './services/form-poster.service';
import { CustomerComponent } from './home/customer.component'
import { ReactiveFormsModule } from '@angular/forms'
import { DynaFormComponent } from './home/dynaform.component'

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},     
      {path: 'forms', component: HomeComponent},
      {path: 'reactiveforms', component: CustomerComponent},
      {path: 'dynamicforms', component: DynaFormComponent}             
    ])
  ],
  declarations: [ AppComponent, WelcomeComponent, HomeComponent, CustomerComponent, DynaFormComponent ],
  providers: [FormPosterService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
