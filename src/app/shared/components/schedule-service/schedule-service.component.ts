import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailPattern, phonePattern, validationMessages} from "../../validation/validation-helper-model";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-schedule-service',
  templateUrl: './schedule-service.component.html'
})
export class ScheduleServiceComponent implements OnInit {
  public isFormValid?: boolean;
  public isFormValidFade?: boolean;
  public isSubmitSuccess = false;

  public validationMessages = validationMessages;
  public form: FormGroup = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.pattern(emailPattern)]),
    phone_number: new FormControl('', [Validators.required, Validators.pattern(phonePattern)]),
    address: new FormControl('', [Validators.required, Validators.minLength(4)]),
    city: new FormControl(''),
    zip: new FormControl(''),
    date: new FormControl(new Date(), Validators.required),
    time: new FormControl(null),
    appliance: new FormControl(''),
    brand: new FormControl(''),
    problem: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private firestore: AngularFirestore
    ) {
  }

  ngOnInit() {
  }

  public submitForm(): void {
    if (this.form.valid) {
      this.makeRequest(this.form.value);
    } else {
      this.validateForm();
      return;
    }
  }

  public makeRequest(formData: FormData): void {
    this.isFormValid = true;
    this.isFormValidFade = true;
    this.isSubmitSuccess = true;

    this.firestore.collection('mail').add({
      to: 'fmxglobalacc@gmail.com',
      // to: this.form.value.email,
      // bcc: 'fmxglobalacc@gmail.com',
      message: {
        subject: 'schedule service appliance-repair-sacramento',
        html: `
          <h1>from http://appliance-repair-sacramento.com/</h1>
          <ul>
            <li>
                <strong>Name: </strong>
                <i>${this.form.value.user_name}</i>
            </li>
            <li>
                <strong>Email: </strong>
                <i>${this.form.value.email}</i>
            </li>
            <li>
                <strong>Phone Number: </strong>
                <i>${this.form.value.phone_number}</i>
            </li>
            <li>
                <strong>Address: </strong>
                <i>${this.form.value.address}</i>
            </li>
            <li>
                <strong>City: </strong>
                <i>${this.form.value.city}</i>
            </li>
            <li>
                <strong>Zip: </strong>
                <i>${this.form.value.zip}</i>
            </li>
            <li>
                <strong>Date: </strong>
                <i>${this.form.value.date}</i>
            </li>
            <li>
                <strong>Time: </strong>
                <i>${this.form.value.time}</i>
            </li>
            <li>
                <strong>Appliance: </strong>
                <i>${this.form.value.appliance}</i>
            </li>
            <li>
                <strong>Brand: </strong>
                <i>${this.form.value.brand}</i>
            </li>
            <li>
                <strong>Problem: </strong>
                <i>${this.form.value.problem}</i>
            </li>
            <li>
                <strong>Message: </strong>
                <i>${this.form.value.message}</i>
            </li>
        </ul>`,
      }
    }).then(res => {
      this.isSubmitSuccess = true;
      this.form.reset();
    })
    .catch(e => {
      setTimeout(() => {
        this.isFormValidFade = false;
      }, 2400);
      setTimeout(() => {
        this.isFormValid = false;
        this.isSubmitSuccess = false;
      }, 3000);
    });
  }

  public scheduleAgain(): void {
    this.isFormValidFade = false;
    setTimeout(() => {
      this.isFormValid = false;
    }, 1000);
  }

  public validateForm() {
    const controls = this.form.controls;
    Object.keys(controls)
      .forEach(controlName => {
        controls[controlName].markAsTouched();
        controls[controlName].markAsDirty();
      });
    return;
  }
}
