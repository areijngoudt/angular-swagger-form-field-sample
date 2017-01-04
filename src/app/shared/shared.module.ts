import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgForm } from '@angular/forms';

import { IsoToDatePipe } from './pipes/iso-to-date.pipe';
import { IsoToFromNowPipe } from './pipes/iso-to-from-now.pipe';

import { MaxValueValidatorDirective } from './validation/max-value-validator.directive';
import { MinValueValidatorDirective } from './validation/min-value-validator.directive';

import { AutoFocusDirective } from './widgets/autofocus.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        // pipes
        IsoToDatePipe,
        IsoToFromNowPipe,
        // validation
        MaxValueValidatorDirective,
        MinValueValidatorDirective,
        // widgets
        AutoFocusDirective,
    ],
    declarations: [
        // pipes
        IsoToDatePipe,
        IsoToFromNowPipe,
        // validation
        MaxValueValidatorDirective,
        MinValueValidatorDirective,
        // widgets
        AutoFocusDirective,
    ],
    providers: [
        FormBuilder,
        NgForm,
    ],
    schemas: [
        NO_ERRORS_SCHEMA, // for ng-content select='tag'
    ],
})
export class SharedModule {
}
