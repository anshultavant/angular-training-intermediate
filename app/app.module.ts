import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './home/welcome.component'
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FormPosterService } from './services/form-poster.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: 'welcome', component: WelcomeComponent},     
      {path: 'forms', component: HomeComponent}
    ])
  ],
  declarations: [ AppComponent, WelcomeComponent, HomeComponent ],
  providers: [FormPosterService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
