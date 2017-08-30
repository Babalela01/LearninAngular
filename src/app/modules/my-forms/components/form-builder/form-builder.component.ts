import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  form : FormGroup;

  //This is cleaner than declaring everything with constructors
  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: ['Me', Validators.required],
      account : builder.group(
        {
          username: ["", [Validators.required, Validators.minLength(5)]],
          password: ["", Validators.minLength(8)]
        }
      ),
      interests : builder.array([])
    })
  }

  get name() {
    return this.form.get('name')
  }

  get username() {
    return this.form.get('account.username')
  }

  get password() {
    return this.form.get('account.password')
  }

  get interests() {
    return this.form.get('interests') as FormArray
  }

  addInterest($event: KeyboardEvent) {
    let htmlInputElement = $event.target as HTMLInputElement;
    let topic = htmlInputElement.value;
    this.interests.push(new FormControl(topic));

    htmlInputElement.value = '';
  }

  removeInterest(index: number) {
    this.interests.removeAt(index)
  }

}
