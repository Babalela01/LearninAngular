import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-material-root',
  templateUrl: './material-root.component.html',
  styleUrls: ['./material-root.component.css']
})
export class MaterialRootComponent {

  constructor(private dialog: MdDialog) {

  }

  openDialog() {
    this.dialog.open(DialogContentComponent, {data: {text: "Yay!"}})
      .afterClosed()
      .subscribe((result) => console.log(result));
  }

}
