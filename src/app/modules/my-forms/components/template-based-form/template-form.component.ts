import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateBasedFormComponent {

  log(element) {
    console.log(element)
  }

  submit(form) {
    console.log(form.value)
    //Submit form.value to server.
  }
}
