import {Component} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my-validators";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(5), MyValidators.cannotContainSpace], [MyValidators.mustBeUnique]),
      password: new FormControl("", Validators.minLength(8))
    }),
    interests : new FormArray([])
  });

  get username() {
    return this.form.get('account.username')
  }

  get password() {
    return this.form.get('account.password')
  }

  get interests() {
    return this.form.get('interests') as FormArray
  }

  register() {
    this.form.setErrors({'failed': true});
  }

  //Alternate approach use a template id and sent the input element directly
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
