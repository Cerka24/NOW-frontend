import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
/**
 * @title Inputs in a form
 */

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  public onboardingForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.onboardingForm = this.formBuilder.group({
      'universityYear': ['', [Validators.required, Validators.email]],
      'organization': ['', [Validators.required]],
      'shortBio': ['', [Validators.required]],
      'certificates': ['', [Validators.required]],
      'linkedinUrl': ['', [Validators.required]],
      'gpa': ['', [Validators.required]],
      'uploadImage': ['', [Validators.required]]
    });
  }

  submitForm() {
    console.log(this.onboardingForm.value);
   /* this.router.navigate([
      ''
    ])*/

  }
  navigateToHomepage(): void {
    const path = ""
    this.router.navigate([path])
  }

}
