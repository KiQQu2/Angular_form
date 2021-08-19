import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(FormGroup);
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'regCountry': new FormControl(null, Validators.required),
      'nip': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'name': new FormControl(null, Validators.required),
      'region': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required),
      'streetNumber': new FormControl(null, Validators.required),
      'flatNumber': new FormControl(null, Validators.maxLength(5)),
      'zipCode': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null),
    })
  }

  submitData(){
    console.log(this.myForm.value)
  };


}
