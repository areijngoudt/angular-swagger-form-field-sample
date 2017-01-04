import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

import { areEqualValidator } from '../../shared/validation/are-equal-validator';

import { AllEnums, minValueValidator, maxValueValidator } from '../../models/webapi/index';
import { IPet, Pet, IVeterinarian, Veterinarian, IAddress, Address, ITag, Tag } from '../../models/webapi/index';
import { PetService } from '../shared/pet.service';

@Component({
    selector: 'app-model-driven',
    templateUrl: './model-driven.component.html',
})

export class ModelDrivenComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private petService: PetService) {
    }

    form: FormGroup;
    showErrors = false;
    matchingZipcodes: FormGroup; // custom cross field validation example
    allEnums: AllEnums;
    pet: IPet;

    ngOnInit() {
        this.allEnums = AllEnums.instance;
        this.pet = this.petService.createPet();
        let addressFormGroup = new FormGroup({
            street: new FormControl(this.pet.address.street, [Validators.minLength(2),]),
            city: new FormControl(this.pet.address.city, [Validators.minLength(2),]),
            state: new FormControl(this.pet.address.state, [Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^[A-Z]+$'),]),
            zipcode: new FormControl(this.pet.address.zipcode, [minValueValidator(1000), maxValueValidator(9999),]),
            zipcode2: new FormControl(this.pet.address.zipcode2, [minValueValidator(1000), maxValueValidator(9999),]),
        });
        let veterinarianAddressFormGroup = new FormGroup({
            street: new FormControl(this.pet.vet.address.street, [Validators.minLength(2),]),
            city: new FormControl(this.pet.vet.address.city, [Validators.minLength(2),]),
            state: new FormControl(this.pet.vet.address.state, [Validators.minLength(1), Validators.maxLength(2), Validators.pattern('^[A-Z]+$'),]),
            zipcode: new FormControl(this.pet.vet.address.zipcode, [minValueValidator(1000), maxValueValidator(9999),]),
        });
        let veterinarianFormGroup: FormGroup = new FormGroup({
            name: new FormControl(this.pet.vet.name, [Validators.required, Validators.minLength(1),]),
            address: veterinarianAddressFormGroup
        });
        let petFormGroup = new FormGroup({
            name: new FormControl(this.pet.name, [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9- ]+$')]),
            age: new FormControl(this.pet.age),
            dob: new FormControl(this.pet.dob),
            type: new FormControl(this.pet.type, [Validators.required,]),
            gender: new FormControl(this.pet.gender),
            address: addressFormGroup,
            vet: veterinarianFormGroup,
            isFavorate: new FormControl(this.pet.isFavorate),
            tags: new FormArray([]),
        });
        // the tags is an Array who's FormGroups we need to add ourselfs
        // add a unique controlGroup per tag 
        // TODO move to generated code!!
        if (this.pet.tags.length > 0) {
            let tagsFormArray = <FormArray>petFormGroup.controls['tags'];
            this.pet.tags.forEach((tag) => {
                let tagFormGroup: FormGroup = new FormGroup({
                    id: new FormControl(tag.id, [Validators.required,]),
                    name: new FormControl(tag.name),
                });
                tagsFormArray.push(tagFormGroup);
            });
        }

        // custom cross field validation example
        this.matchingZipcodes = this.formBuilder.group({
            zipcodeCrossField1: petFormGroup.controls["address"]["controls"]["zipcode"],
            zipcodeCrossField2: petFormGroup.controls["address"]["controls"]["zipcode2"],
        }, { validator: areEqualValidator('zipcodeCrossField1', 'zipcodeCrossField2') });

        this.form = this.formBuilder.group({
            pet: petFormGroup,
            matchingZipcodes: this.matchingZipcodes, // custom cross field validation example
        });
    }

    validateForm(form: FormGroup) {
        this.showErrors = !form.valid;
        console.log('from', this.form);
        console.log('from.value.pet', this.form.value.pet);
        if (!form.valid) {
            return false;
        }
        // push form values back to the model
        this.pet = this.form.value.pet;
        console.log('pet', this.pet);
        return true;
    }
}
