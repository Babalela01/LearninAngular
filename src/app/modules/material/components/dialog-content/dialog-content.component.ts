import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

export const DATA_INJECTION_TOKEN = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  //constructor(@Inject(DATA_INJECTION_TOKEN) public data: any) {
  }

  ngOnInit() {
  }

}
