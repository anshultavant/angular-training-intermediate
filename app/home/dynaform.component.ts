import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'dyna-form',
    templateUrl: 'app/home/dynaform.component.html'
})
export class DynaFormComponent implements OnInit{
    dynamicForm: FormGroup

    constructor(private fb: FormBuilder){

    }

    ngOnInit(): void{
        this.dynamicForm = this.fb.group({
            addresses: this.fb.array([this.buildAddress])
        })
    }

    save(){
        console.log('Saving Dynamic Form')
    }

    buildAddress(): FormGroup{
        return this.fb.group({
            addressType: '',
            street1: '',
            street2: ''
        })
    }

    getAddresses(): FormArray{
        return <FormArray> this.dynamicForm.get('addresses')
    }

    addAddress(){
        console.log('Adding address...')
        this.getAddresses().push(this.buildAddress())
        console.log('Addresses Array size: '+ this.getAddresses().length)
    }
}