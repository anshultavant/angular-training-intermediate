
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
    selector: 'reactive-form',
    templateUrl: 'app/home/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup
    customer: Customer = new Customer();

    ngOnInit(): void{
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(true)
        })
        console.log('Inside OnInit of customer')
    }
}