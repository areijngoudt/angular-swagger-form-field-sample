import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//import { Component, NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { SwaggerFormFieldModule } from 'angular-swagger-form-field/components';

//import 'moment';
//import 'moment-nl';

import { AppConfig } from './app.config';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import { GeneratedModelDrivenComponent } from './components/generated-model-driven/generated-model-driven.component';
import { SharedModule } from './shared';

import { PetService } from './components/shared/pet.service';

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: Http) {
//   return new TranslateHttpLoader(http);
// }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    routing,
    SwaggerFormFieldModule,
    SharedModule,
  ],
  providers: [
    FormBuilder,
    HttpClient,
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
