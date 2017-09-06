import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

import { ValidationMessages } from 'angular-swagger-form-field/components';

import { AppConfig } from './app.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private appConfig: AppConfig) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

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
