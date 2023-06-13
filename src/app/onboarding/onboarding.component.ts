import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Onboarding} from "../models/onboarding.model";
import {OnboardingService} from "../services/onboarding.service";
import {Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
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
              private onboardingService: OnboardingService,  private _snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.onboardingForm = this.formBuilder.group({
      'universityYear': ['', [Validators.required]],
      'universityName': ['', [Validators.required]],
      'shortBio': ['', [Validators.required]],
      'certificates': ['', [Validators.required]],
      'linkedinUrl': ['', [Validators.required]],
      'gpa': ['', [Validators.required]],
      'profileImage': ['', [Validators.required]]
    });

    this.unsubscribe.push(
      this.onboardingService.getYearAndOrg().subscribe((metadata) => {
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
        this._snackBar.open(`Onboarding completed`, '', {
          duration: 1000,
        })
        this.router.navigate(["/home"]);

      },  error => {
        if(error.status == 401){
          this._snackBar.open(`Failed to update`, '', {
            duration: 1000,
          })
        } else {
          this._snackBar.open(`Failed to update - ${error.message}`, '', {
            duration: 1000
          })
        }
      })
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
