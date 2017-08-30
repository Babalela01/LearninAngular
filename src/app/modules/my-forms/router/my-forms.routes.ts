import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormBuilderComponent } from '../components/form-builder/form-builder.component';
import { FormsRootComponent } from '../components/forms-root/forms-root.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { TemplateBasedFormComponent } from '../components/template-based-form/template-form.component';

const MY_FORMS_ROUTES: Routes = [{
  path: 'forms',
  component: FormsRootComponent,
  children: [
    {
      path: 'builder',
      component: FormBuilderComponent
    },
    {
      path: 'reactive',
      component: ReactiveFormComponent
    },
    {
      path: 'template'
      , component: TemplateBasedFormComponent
    }
  ]
}];

export const MyFormsRouter: ModuleWithProviders = RouterModule.forChild(MY_FORMS_ROUTES);
