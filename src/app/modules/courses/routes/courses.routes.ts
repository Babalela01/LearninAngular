import { BasicsComponent } from '../components/basics/basics.component';
import { DirectivesComponent } from '../components/directives/directives.component';
import { PipesComponent } from '../components/pipes/pipes.component';
import { TestComponent } from '../components/test/test.component';

export const COURSES_ROUTES = [
  {path: 'basics', component: BasicsComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'test', component: TestComponent},
  {path: 'directives', component: DirectivesComponent}
];
