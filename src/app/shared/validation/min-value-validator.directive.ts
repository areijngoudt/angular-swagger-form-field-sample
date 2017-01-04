import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

import { minValueValidator } from '../../models/webapi/validators';

@Directive({
    selector: '[minValueValidator][ngModel],[minValueValidator][formControl],[minValueValidator][formControlName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => MinValueValidatorDirective), multi: true }
    ]
})

export class MinValueValidatorDirective implements Validator {
    @Input('minValueValidator') set minValue(value: number) {
        this.validator = minValueValidator(value);
    }
    
    defaultMinValue = 0;
    constructor() {
        this.validator = minValueValidator(this.defaultMinValue);
    }

    validator: Function;

    validate(control: FormControl) {
        return this.validator(control);
    }
}