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
  public years: Array<Onboarding> = [];
  public organizations: Array<Onboarding> = [];
  public onboardingForm!: FormGroup
  constructor(private onboardingService: OnboardingService, private formBuilder: FormBuilder, private router: Router) {}

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
      
    this.onboardingService.getAll().subscribe((data) => this.years = data);
    this.onboardingService.getAll().subscribe((data) => this.organizations = data);
    console.log(this.onboardingForm.value);
  }
  submitForm() {
    console.log(this.onboardingForm.value);
  }
  navigateToHomepage(): void {
    const path = ""
    this.router.navigate([path])
  }

}
