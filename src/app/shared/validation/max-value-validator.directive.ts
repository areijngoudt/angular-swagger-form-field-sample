import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

import { maxValueValidator } from '../../models/webapi/validators';

@Directive({
    selector: '[maxValueValidator][ngModel],[maxValueValidator][formControl],[maxValueValidator][formControlName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxValueValidatorDirective), multi: true }
    ]
})

export class MaxValueValidatorDirective implements Validator {
    @Input('maxValueValidator') set maxValue(value: number) {
        this.validator = maxValueValidator(value);
    }

    defaultMaxValue = Number.MAX_SAFE_INTEGER;
    constructor() {
        this.validator = maxValueValidator(this.defaultMaxValue);
    }

    validator: Function;

    validate(control: FormControl) {
        return this.validator(control);
    }
}