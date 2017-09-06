import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { PetViewModel } from '../../models/pet.viewmodel';
import { IPet, Pet, ITag, Tag, type, gender, NullableOrEmpty } from '../../models/webapi/index';

export interface IPetService {
    createPet(): PetViewModel;
}

@Injectable()
export class PetService implements IPetService {

    constructor() {
    }

    createPet(): PetViewModel {
        // fake the result of a webapi call
        let age = 4;
        let response = {
            data: {
                name: 'Grissom',
                age: age,
                dob: moment().startOf('year').add(-age, 'years').toDate(),
                type: type.cat,
                gender: gender.male,
                address: {
                    city: 'Almere',
                    state: 'L',
                    street: 'Sint Janlaan 19',
                    zipcode: 9999,
                    zipcode2: 9999
                },
                vet: {
                    name: 'Heleen Mees',
                    address: {
                        city: 'Roermond',
                        state: 'NB',
                        street: 'Roerkade 20',
                        zipcode: 9650,
                        zipcode2: 9650
                    }
                },
                tags: [
                    {
                        id: 19,
                        name: 'Britse korthaar',
                    },
                    {
                        id: 40,
                        name: 'Blauw wit',
                    }
                ],
                isFavorate: true,
                testDate: new NullableOrEmpty<Date>(),
                primitiveArray: ['een', 'twee'],
            }
        };
        // assign webapi response to a new PetViewModel
        // this way all ViewModels members come available for the client
        let pet = new PetViewModel(response.data);
        //console.log('PetService.createPet()', pet);
        return pet;
    }
}
