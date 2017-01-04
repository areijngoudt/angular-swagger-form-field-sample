import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import { GeneratedModelDrivenComponent } from './components/generated-model-driven/generated-model-driven.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'template-driven', component: TemplateDrivenComponent },
    { path: 'model-driven', component: ModelDrivenComponent },
    { path: 'generated-model-driven', component: GeneratedModelDrivenComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);
