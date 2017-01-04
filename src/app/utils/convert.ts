import {Injectable} from '@angular/core';

import * as moment from 'moment';

/**
 * Convert helper. 
 * Uses moment from global scope
 */
export class Convert {
    /**
     * Convert all ISO dates in given object inplace to js Dates. 
     * Works on deep object aswell
     * @param {any} object
     */
    static convertObjectIsoDatesToDates(object: any): void {
        // Ignore things that aren't objects.
        if (typeof object !== "object") { return; };

        for (let key in object) {
            if (!object.hasOwnProperty(key)) { continue; };

            let value = object[key];
            if (moment(value, moment.ISO_8601).isValid()) {
                object[key] = new Date(value);
            } else if (typeof value === "object") {
                // Recurse into object
                this.convertObjectIsoDatesToDates(value);
            }
        }
    }
}
