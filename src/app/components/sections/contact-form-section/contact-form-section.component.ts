import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-section',
  templateUrl: './contact-form-section.component.html',
  styles: [],
})
export class ContactFormSectionComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  constructor() {}

  onSubmit(event: SubmitEvent) {
    if (this.contactForm.status === 'INVALID') {
      this.contactForm.markAllAsTouched();
      event.preventDefault();
    } else {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }

  isNameEmpty(): boolean {
    const name = this.contactForm.get('name');
    return (
      name?.invalid &&
      (name?.dirty || name?.touched) &&
      name?.errors?.['required']
    );
  }

  isEmailInvalid() {
    const email = this.contactForm.get('email');
    return (
      email?.invalid &&
      (email?.dirty || email?.touched) &&
      email?.errors?.['email']
    );
  }

  isEmailEmpty() {
    const email = this.contactForm.get('email');
    return (
      email?.invalid &&
      (email?.dirty || email?.touched) &&
      email?.errors?.['required']
    );
  }

  isMessageEmpty(): boolean {
    const name = this.contactForm.get('message');
    return (
      name?.invalid &&
      (name?.dirty || name?.touched) &&
      name?.errors?.['required']
    );
  }

  ngOnInit(): void {}
}
