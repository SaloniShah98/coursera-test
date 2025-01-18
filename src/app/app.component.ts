import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

  bloodGroup: string = '';
  bloodGroupList: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  registrationForm: FormGroup;

  


  constructor(
  ) {
    this.registrationForm =  new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl('', Validators.required),
      bloodGroup:  new FormControl(this.bloodGroup, Validators.required),
  });
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.registrationForm.value);
    alert('Your order has been submitted');
  }

}
