import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { ValidationMessages } from '../../lib/angular2-swagger-form-field/components';

import { AppConfig } from './app.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private appConfig: AppConfig) {
        translate.setDefaultLang('nl');
        translate.use('nl');

        // overrule the required validation message (just to show it't possible)
        ValidationMessages.setValidationErrorMessage('required', 'This field is mandatory');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        //var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        //userLang = /(nl|en)/gi.test(userLang) ? userLang : 'en';
        //translate.use(userLang);
    }

    ngOnInit() {
        moment.locale('nl');
    }
}
