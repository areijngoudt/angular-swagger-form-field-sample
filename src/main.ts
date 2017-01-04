import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
//import { AppModuleNgFactory } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowser().bootstrapModuleFactory<{}>(AppModuleNgFactory);
