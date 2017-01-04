import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

import { AllEnums, minValueValidator, maxValueValidator } from '../../models/webapi/index';
import { IPet, Pet, IVeterinarian, Veterinarian, IAddress, Address, ITag, Tag } from '../../models/webapi/index';
import { PetService } from '../shared/pet.service';

// TODO make this readly template driven!
@Component({
    selector: 'app-template-driven',
    templateUrl: './template-driven.component.html',
})

export class TemplateDrivenComponent implements OnInit {
    constructor(
        private petService: PetService) {
    }

    //form: FormGroup;
    showErrors = false;
    pet: IPet;
    
    types = ['cat', 'dog', 'bird', 'whale'];
    
    ngOnInit() {
        this.pet = this.petService.createPet();
    }

    validateForm(form: FormGroup) {
        this.showErrors = !form.valid;
        console.log('pet', this.pet);
        if (!form.valid) {
            return false;
        }
        return true;
    }
}
