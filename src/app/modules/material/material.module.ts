import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialRootComponent } from './components/material-root/material-root.component';
import { MdButtonModule, MdCheckboxModule, MdDialogModule, MdRadioModule } from '@angular/material';
import { DATA_INJECTION_TOKEN, DialogContentComponent } from './components/dialog-content/dialog-content.component';

@NgModule({
  imports: [
    CommonModule,
    MdCheckboxModule,
    MdRadioModule,
    MdButtonModule,
    MdDialogModule,
  ],
  entryComponents: [
    DialogContentComponent
  ],
  providers: [
    {
      provide: DATA_INJECTION_TOKEN,
      useValue: {
        text: 'Something Hardcoded'
      }
    }
    // BrowserAnimationsModule,
  ],
  declarations: [MaterialRootComponent, DialogContentComponent]
})
export class MaterialModule {
}
