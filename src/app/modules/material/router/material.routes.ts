import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MaterialRootComponent } from '../components/material-root/material-root.component';


const MATERIAL_ROUTES: Routes = [{
  path: 'material',
  component: MaterialRootComponent,
  children: []
}];

export const MaterialRouter: ModuleWithProviders = RouterModule.forChild(MATERIAL_ROUTES);

