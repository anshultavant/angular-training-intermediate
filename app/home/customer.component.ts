
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
    selector: 'reactive-form',
    templateUrl: 'app/home/customer.component.html'
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup
    customer: Customer = new Customer();
    emailMessage: string = ''
    emailConfirmMessage: string = ''
    
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
            emailGroup: this.fb.group({
                email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9]+")]],
                confirmEmail:['',Validators.required]
            }, {validator: emailMatcher}),
            phone: '',
            notification: '',
            sendCatalog: true,
            rating: ['',[ratingRangeParam(1,6)]] //customer validator
        })

        this.customerForm.get('notification').valueChanges.subscribe(value => this.setNotification(value))
        const emailCtrl = this.customerForm.get('emailGroup');
        emailCtrl.valueChanges.subscribe(value => this.setMessage(emailCtrl))
    }

    setMessage(absCtrl: AbstractControl): void{
        const emailCtrl = absCtrl.get('email');
        const emailConfirmCtrl = absCtrl.get('confirmEmail');
        if((absCtrl.touched || absCtrl.dirty) && absCtrl.errors){
            this.emailConfirmMessage = Object.keys(absCtrl.errors).map(key => this.confirmEmailValidationMessages[key]).join('') 
        }
        if((emailCtrl.touched || emailCtrl.dirty) && emailCtrl.errors){
            this.emailMessage = Object.keys(emailCtrl.errors).map(key => this.emailValidationMessages[key]).join('')
        }
        if((emailConfirmCtrl.touched || emailConfirmCtrl.dirty) && emailConfirmCtrl.errors){
            this.emailConfirmMessage = Object.keys(emailConfirmCtrl.errors).map(key => this.confirmEmailValidationMessages[key]).join('')
        }
    }
    
    emailValidationMessages = {
        required: 'Please enter your email address.', 
        pattern: 'Email format is incorrect.'
    }

    confirmEmailValidationMessages = {
        required: 'Please confirm your email address.', 
        mismatch: 'Email does not match.'
    }

    save(){
        console.log(this.customerForm)
        console.log('Saved: '+ JSON.stringify(this.customerForm.value))
    }

    populateTestData(flag: string){
        (flag === 'set') ?         
            this.customerForm.setValue({
                firstName: 'Anshul',
                lastName: 'Khare',
                emailGroup: {
                    email: 'anshul.khare@tavant.com',
                    confirmEmail: ''
                },
                phone: '1234567890',
                notification: 'email',
                sendCatalog: false,
                rating: 0
            })
       :
            this.customerForm.patchValue({ 
                phone: '6666667890',      
                notification: 'text',         
                sendCatalog: true
            })
    }

    setNotification(notifyVia: string){
        const phoneControl = this.customerForm.get('phone')
        if(notifyVia === 'text'){
            phoneControl.setValidators(Validators.required);
            // phoneControl.markAsDirty;
        } else {
            phoneControl.clearValidators()
        }
        phoneControl.updateValueAndValidity();
    }
}

//Custom validator.
function ratingRange(absCtrl: AbstractControl): {[key: string]:boolean}{
    if(absCtrl.value != undefined && (isNaN(absCtrl.value) || absCtrl.value <1 || absCtrl.value > 5)){ 
        return {range: true};   
    }
    return null;
}

//Custom validator - parameterizd
function ratingRangeParam(min: number, max: number): ValidatorFn{
    return (absCtrl: AbstractControl): {[key: string]:boolean} =>{
        if(absCtrl.value != undefined && (isNaN(absCtrl.value) || absCtrl.value < min || absCtrl.value > max)){ 
            return {range: true};   
        }
        return null;
    }
}

function emailMatcher(absCtrl: AbstractControl){
    let emailCtrl = absCtrl.get('email');
    let confirmEmailCtrl = absCtrl.get('confirmEmail');
    if(emailCtrl.pristine || confirmEmailCtrl.pristine) return null;
    if(emailCtrl.value === confirmEmailCtrl.value) return null;
    return {'mismatch' : true}
}