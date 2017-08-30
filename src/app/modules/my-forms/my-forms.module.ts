import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateBasedFormComponent} from './components/template-based-form/template-form.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';
import {FormBuilderComponent} from './components/form-builder/form-builder.component';
import {FormsRootComponent} from './components/forms-root/forms-root.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  declarations: [
    TemplateBasedFormComponent,
    ReactiveFormComponent,
    FormBuilderComponent,
    FormsRootComponent,
  ],
  exports: [
    FormsRootComponent
  ]
})
export class MyFormsModule {
}
