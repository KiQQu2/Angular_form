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

    //   regCountry:'',
    //   nip:'',
    //   name:'',
    //   region:'',
    //   city:'',
    //   street:'',
    //   streetNumber:'',
    //   flatNumber:'',
    //   zipCode:'',
    //   email:'',
    //   phone:'',
    // })
    // this.myForm.valueChanges.subscribe(console.log)

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
      'phone': new FormControl(null, Validators.required),
    })
  }

  // this.myForm = this.fb.group({
  //   country:['',[
  //     Validators.maxLength(256)
  //   ]],
  //   nip:['',[
  //     Validators.required,
  //     Validators.minLength(11),
  //     Validators.maxLength(11)
  //   ]],
  //   name:['',[
  //     Validators.required,
  //   ]],
  //   region:['',[
  //     Validators.required,
  //   ]],
  //   city:['',[
  //     Validators.required,
  //   ]],
  //   street:['',[
  //     Validators.required,
  //   ]],
  //   streetNumber:['',[
  //     Validators.required,
  //   ]],
  //   flatNumber:['',[
  //     typeof Number,
  //   ]],
  //   zipCode:['',[
  //     Validators.required,
  //   ]],
  //   email:['',[
  //     Validators.required,
  //   ]],
  //   phone:['',[
  //     Validators.required,
  //   ]],
  //
  // });
  // }

  submitData(){

    console.log(this.myForm.value)
    // this.myForm.reset();
  };

  get country(){
    return this.myForm.get('country')
  };
  get nip(){
    return this.myForm.get('nip')
  };
  get name(){
    return this.myForm.get('name')
  };
  get region(){
    return this.myForm.get('region')
  };
  get city(){
    return this.myForm.get('city')
  };
  get street(){
    return this.myForm.get('street')
  };
  get streetNumber(){
    return this.myForm.get('streetNumber')
  };
  get flatNumber(){
    return this.myForm.get('flatNumber')
  };
  get zipCode(){
    return this.myForm.get('zipCode')
  };  get email(){
    return this.myForm.get('email')
  };
  get phone(){
    return this.myForm.get('phone')
  };

}
