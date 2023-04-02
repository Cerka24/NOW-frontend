import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Onboarding} from "../../models/onboarding.model";
/**
 * @title Inputs in a form
 */

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit, OnDestroy{

  public universityYear?: number | any
  public organization: string = ''
  public shortBio: string = ''
  public certificates: string = ''
  public linkedinUrl: string = ''
  public gpa?: number | any
  public uploadImage: string = ''

  private onboarding: Onboarding | undefined;

  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  submitForm() {
    this.router.navigate([
      ''
    ])
    console.log('Form submitted');
  }
  navigateToHomepage(): void {
    const path = ""
    this.router.navigate([path])
  }
  ngOnInit(): void {
    this.unsubscribe = this.activatedRoute.data.subscribe((data) => {
      console.log("DATA :: ", data)
      this.onboarding = data['onboarding'];
      this.universityYear = data['onboarding']/*.universityYear*/
      this.organization = data['onboarding']/*.organization*/
      this.shortBio = data['onboarding']/*.shortBio*/
      this.certificates = data['onboarding']/*.certificates*/
      this.linkedinUrl = data['onboarding']/*.linkedinUrl*/
      this.gpa = data['onboarding']/*.gpa*/
      this.uploadImage = data['onboarding']/*.uploadImage*/
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }

}
