import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

import { areEqualValidator } from '../../shared/validation/are-equal-validator';

import { AllEnums, minValueValidator, maxValueValidator } from '../../models/webapi';
import { IPet, Pet, IVeterinarian, Veterinarian, IAddress, Address, ITag, Tag } from '../../models/webapi';
import { PetViewModel } from '../../models/pet.viewmodel';
import { PetService } from '../shared/pet.service';

@Component({
    selector: 'app-generated-model-driven',
    templateUrl: './generated-model-driven.component.html',
})

export class GeneratedModelDrivenComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private petService: PetService) {
    }

    form: FormGroup;
    showErrors = false;
    matchingZipcodes: FormGroup; // custom cross field validation example
    allEnums: AllEnums;
    pet: Pet;

    ngOnInit() {
        this.allEnums = AllEnums.instance;
        this.pet = this.petService.createPet();

        // custom cross field validation example
        this.matchingZipcodes = this.formBuilder.group({
            zipcodeCrossField1: this.pet.address.$formGroup.controls["zipcode"],
            zipcodeCrossField2: this.pet.address.$formGroup.controls["zipcode2"],
        }, { validator: areEqualValidator('zipcodeCrossField1', 'zipcodeCrossField2') });

        this.form = this.formBuilder.group({
            pet: this.pet.$formGroup,
            matchingZipcodes: this.matchingZipcodes, // custom cross field validation example
        });
        //console.log('form', this.form);
    }

    validateForm(form: FormGroup) {
        this.showErrors = !this.form.valid;
        console.log('from', this.form);
        console.log('from.value.pet', this.form.value.pet);
        if (!form.valid) {
            return false;
        }
        // push form values back to the model
        this.pet.setValues(this.form.value.pet);
        console.log('pet', this.pet);
        console.log('pet after stringify', JSON.parse(JSON.stringify(this.pet)));
        return true;
    }
}
