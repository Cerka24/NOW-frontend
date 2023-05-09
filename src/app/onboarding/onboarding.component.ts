import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Onboarding} from "../models/onboarding.model";
import {OnboardingService} from "../services/onboarding.service";
import {Subscription} from "rxjs";
/**
 * @title Inputs in a form
 */

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit, OnDestroy {
  public onboardingForm!: FormGroup
  public years: number[] = [];
  public organizations: string[] = [];
  private unsubscribe: Subscription[] = [];
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private onboardingService: OnboardingService,) {}

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

    this.unsubscribe.push(
      this.onboardingService.getAll().subscribe((metadata) => {
        console.log(metadata);
        this.years = metadata.universityYears.sort((a, b) => a - b);
        this.organizations = metadata.organizations.sort();
      })
    );
  }

  submitForm() {
    if (this.onboardingForm.valid) {
      console.log('Form Submitted', this.onboardingForm.value);
      this.onboardingService.onboarding(this.onboardingForm.value).subscribe(() => {
        this.router.navigate([""]);
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  navigateToHomepage(): void {
    const path = ""
    this.router.navigate([path])
  }

}
