import {LOCALE_ID, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoursesComponent} from "./components/courses/courses.component";
import {CoursesHttpService} from "./services/courses-http.service";
import {TestComponent} from "./components/test/test.component";
import {PipesComponent} from "./components/pipes/pipes.component";
import {SummaryPipe} from "./pipes/summary/summary.pipe";
import {FavoriteComponent} from "./components/favorite/favorite.component";
import {MyPanelComponent} from "./components/my-panel/my-panel.component";
import {DirectivesComponent} from "./components/directives/directives.component";
import {InputFormatDirective} from "./directives/input-format.directive";
import {CollapseComponent} from "./components/collapse/collapse.component";
import {TemplateBasedFormComponent} from "./components/template-based-form/template-form.component";
import {ReactiveFormComponent} from "./components/reactive-form/reactive-form.component";
import {FormBuilderComponent} from "./components/form-builder/form-builder.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CoursesComponent,
    TestComponent,
    PipesComponent,
    SummaryPipe,
    FavoriteComponent,
    MyPanelComponent,
    DirectivesComponent,
    InputFormatDirective,
    CollapseComponent,
    TemplateBasedFormComponent,
    ReactiveFormComponent,
    FormBuilderComponent
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CoursesHttpService,
    {provide: LOCALE_ID, useValue: 'en-ZA'}, /** Necessary to get currency working properly */
  ]
})
export class CoursesModule {
}
