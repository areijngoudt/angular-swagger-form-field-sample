import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//import { Component, NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NotificationsService, SimpleNotificationsModule } from 'angular2-notifications/components';
import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { SwaggerFormFieldModule } from '../../lib/angular2-swagger-form-field/components';

//import 'moment';
//import 'moment-nl';
//import 'lodash';

import { AppConfig } from './app.config';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import { GeneratedModelDrivenComponent } from './components/generated-model-driven/generated-model-driven.component';
import { SharedModule } from './shared';

import { PetService } from './components/shared/pet.service';

export function createTranslateStaticLoader(http: Http): TranslateLoader {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    GeneratedModelDrivenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SimpleNotificationsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateStaticLoader,
      deps: [Http]
    }),
    routing,
    SwaggerFormFieldModule,
    SharedModule,
  ],
  providers: [
    FormBuilder,
    NotificationsService,
    TranslateService,
    AppConfig,
    PetService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA, // for ng-content select='tag'
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
