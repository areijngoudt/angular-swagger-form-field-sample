import { FormGroup } from '@angular/forms';

export const areEqualValidator = (propertyName1: string, propertyName2: string) => {
    return (group: FormGroup): { [key: string]: any } => {
        let property1 = group.controls[propertyName1];
        let property2 = group.controls[propertyName2];

        //console.log('prop1=', property1.value, 'prop2=', property2.value)
        if (property1.value !== property2.value) {
            return {
                areEqualMismatched: true
            };
        }
        return null;
    };
};
