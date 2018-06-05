import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app-validation',
    templateUrl: './guitar.component.html',
    styleUrls: ['./guitar.component.scss']
})
export class GuitarComponent implements OnInit {

    valForm: FormGroup;
    blackList = ['bad@email.com', 'some@mail.com', 'wrong@email.co'];

    constructor(fb: FormBuilder) {

        // Model Driven validation
        this.valForm = fb.group({
            'brand_name': [null, Validators.required],
            'model_name': [null, Validators.required],
            'string_number': [null, Validators.compose([Validators.required, CustomValidators.range([3, 26])])],
            'price': [null, Validators.compose([Validators.required, CustomValidators.number])],
            'type': [null, Validators.required],
            'purchase_date': [null, CustomValidators.date]
        });
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
        }
        console.log(value);
    }

    minWords(checkValue): ValidatorFn {
        return <ValidatorFn>((control: FormControl) => {
            return (control.value || '').split(' ').length >= checkValue ? null : { 'minWords': control.value };
        });
    }

    maxWords(checkValue): ValidatorFn {
        return <ValidatorFn>((control: FormControl) => {
            return (control.value || '').split(' ').length <= checkValue ? null : { 'maxWords': control.value };
        });
    }

    checkBlackList(list: Array<string>): ValidatorFn {
        return <ValidatorFn>((control: FormControl) => {
            return list.indexOf(control.value) < 0 ? null : { 'blacklist': control.value };
        });
    }

    ngOnInit() {
    }

}
