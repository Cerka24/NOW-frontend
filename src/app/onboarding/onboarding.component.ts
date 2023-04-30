import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Onboarding} from "../models/onboarding.model";
import {OnboardingService} from "../services/onboarding.service";
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
  public years: Array<Onboarding> = [];
  public organizations: Array<Onboarding> = [];
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private onboardingService: OnboardingService) {}

  ngOnInit(): void {
      this.onboardingForm = this.formBuilder.group({
      'universityYear': ['', [Validators.required]],
      'organization': ['', [Validators.required]],
      'shortBio': ['', [Validators.required]],
      'certificates': ['', [Validators.required]],
      'linkedinUrl': ['', [Validators.required]],
      'gpa': ['', [Validators.required]],
      'uploadImage': ['', [Validators.required]]
    });

    this.onboardingService.getAll().subscribe((data) => this.years = data);
    this.onboardingService.getAll().subscribe((data) => this.organizations = data);
  }
  submitForm() {
    console.log('Form Submitted', this.onboardingForm.value)
    const path = ""
    this.router.navigate([path])
  }

  navigateToHomepage(): void {
    const path = ""
    this.router.navigate([path])
  }

}
