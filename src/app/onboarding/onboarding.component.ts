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
  public years: Array<Onboarding> = [];
  public organizations: Array<Onboarding> = [];
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
      this.onboardingService.getAll().subscribe((data) => {
        console.log(data);
        this.years = data;
        this.organizations = data;
      })
    );
  }

  submitForm() {
    if (!this.onboardingForm.valid) {
      console.log('Form Submitted', this.onboardingForm.value)
      this.router.navigate([""])
      return;
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
