import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { NgForm } from '@angular/forms'
import { FormPosterService } from '../services/form-poster.service'

@Component({
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {

    constructor(private formService: FormPosterService){
        this.formService.getLanguages().subscribe(
                    data => this.languages = data.languages,
                    err => console.log('Error in getting languages : ', err)
                );
    }

    public pageTitle: string = 'Home';
    employee: Employee = new Employee('', '', true, 'other','default');

    languages: string[] = ['Java', 'C++'];
    
    hasPrimaryLanguageError: boolean;

    firstNameToUpperCase(value: string){
        if(value.length>0)
            this.employee.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        else
            this.employee.firstName = value;
    }

    validatePrimaryLanguage(value: string){
        this.hasPrimaryLanguageError =
            (this.languages.indexOf(value)!=-1)? false : true;        
    }

    submitForm(form: NgForm){
        console.log('Form to be submitted :'+ form.value);
        this.formService.postEmployeeForm(form.value).
                subscribe(
                    data => console.log('Subscribe call Back success: ',data),
                    err => console.log('Subscribe call Back error', err)
                )
        return false;
    }
}
