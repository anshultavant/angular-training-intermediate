
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
    selector: 'reactive-form',
    templateUrl: 'app/home/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup
    customer: Customer = new Customer();

    constructor(private fb: FormBuilder){

    }

    ngOnInit(): void{
        
        // this.customerForm = new FormGroup({
        //     firstName: new FormControl(),
        //     lastName: new FormControl(),
        //     email: new FormControl(),
        //     sendCatalog: new FormControl(true)
        // })
        // console.log('Inside OnInit of customer')

        this.customerForm = this.fb.group({
            firstName: ['',[Validators.required, Validators.minLength(3)]],
            lastName: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(3)]],
            email: ['',[Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9]+")]],
            phone: '',
            notification: '',
            sendCatalog: true
        })
    }

    save(){
        console.log(this.customerForm)
        console.log('Saved: '+ JSON.stringify(this.customerForm.value))
    }

    populateTestData(){        
        this.customerForm.setValue({
            firstName: 'Anshul',
            lastName: 'Khare',
            email: 'anshul.khare@tavant.com',
            phone: '1234567890',
            notification: 'email',
            sendCatalog: false
        })

        return false;
    }

    setNotification(notifyVia: string){
        const phoneControl = this.customerForm.get('phone')
        if(notifyVia === 'text'){
            phoneControl.setValidators(Validators.required)
        } else {
            phoneControl.clearValidators()
        }
        phoneControl.updateValueAndValidity();
    }
}