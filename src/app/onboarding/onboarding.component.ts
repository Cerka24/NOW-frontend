import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Onboarding} from "../models/onboarding.model";
import {OnboardingService} from "../services/onboarding.service";
import {Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserModel} from "../models/user.model";
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
  public existingData: Onboarding = {
    id: 0,
    universityName: '',
    universityYear: 0,
    shortBio: '',
    certificates: '',
    linkedinUrl: '',
    profileImage: '',
    gpa: 0,
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private onboardingService: OnboardingService,  private _snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      console.log("MY PROFILE :: ", data["onboarding"].onboarding)
      this.existingData = data["onboarding"].onboarding
    })

    if(this.existingData) {

      this.onboardingForm = this.formBuilder.group({
        'universityYear': [this.existingData.universityYear, [Validators.required]],
        'universityName': [this.existingData.universityName, [Validators.required]],
        'shortBio': [this.existingData.shortBio, [Validators.required]],
        'certificates': [this.existingData.certificates, [Validators.required]],
        'linkedinUrl': [this.existingData.linkedinUrl, [Validators.required]],
        'gpa': [this.existingData.gpa, [Validators.required]],
        'profileImage': [this.existingData.profileImage, [Validators.required]]
      });
    } else {

      this.onboardingForm = this.formBuilder.group({
        'universityYear': ['', [Validators.required]],
        'universityName': ['', [Validators.required]],
        'shortBio': ['', [Validators.required]],
        'certificates': ['', [Validators.required]],
        'linkedinUrl': ['', [Validators.required]],
        'gpa': ['', [Validators.required]],
        'profileImage': ['', [Validators.required]]
      });
    }


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
