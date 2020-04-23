import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name1 = '';
  dob1: any;
  email1 = '';
  num1: number;
  today = new Date();
  minAge = 18;
  show = false;

  constructor() {}
  submit() {
    this.show = true;

  }
}
