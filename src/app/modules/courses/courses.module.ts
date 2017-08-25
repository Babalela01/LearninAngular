import {LOCALE_ID, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CoursesComponent} from "./components/courses/courses.component";
import {CoursesHttpService} from "./services/courses-http.service";
import {TestComponent} from "./components/test/test.component";
import {PipesComponent} from "./components/pipes/pipes.component";
import {SummaryPipe} from "./pipes/summary/summary.pipe";
import {FavoriteComponent} from "./components/favorite/favorite.component";
import {MyPanelComponent} from "./components/my-panel/my-panel.component";
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CoursesComponent,
    TestComponent,
    PipesComponent,
    SummaryPipe,
    FavoriteComponent,
    MyPanelComponent,
    DirectivesComponent
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CoursesHttpService,
    { provide: LOCALE_ID, useValue: 'en-ZA' }, /** Necessary to get currency working properly */
  ]
})
export class CoursesModule {
}
