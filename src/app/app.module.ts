import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormComponent } from './components/form/form.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBottomComponent } from './components/header-bottom/header-bottom.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    HeaderBottomComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  myForm: FormGroup
  constructor(library: FaIconLibrary, private fb:FormBuilder) {
    library.addIconPacks(fas, far)
    this.myForm = this.fb.group({
      name:'',
      surname:''
    })
    this.myForm.valueChanges.subscribe(console.log)
  }
}
