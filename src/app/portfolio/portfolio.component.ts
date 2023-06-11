import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OpportunityApplicationService} from "../services/opportunity-application";
import {OpportunityService} from "../services/opportunity.service";
import {UserService} from "../services/user-service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  public fullName: string = ''
  public email: string = ''
  public profileImage: string = ''
  public shortBio: string = ''
  public universityName: string = ''
  public universityYear: number = 0
  public gpa: number = 0
  public linkedinUrl: string = ''
  public certificates: string = ''


  constructor(private router: Router, private _snackBar: MatSnackBar, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data: any) => {
      console.log(data)
      this.fullName = data.user.fullName
      this.email = data.user.email
      this.profileImage = data.onboarding.profileImage
      this.shortBio = data.onboarding.shortBio
      this.universityName = data.onboarding.universityName
      this.universityYear = data.onboarding.universityYear
      this.gpa = data.onboarding.gpa
      this.linkedinUrl = data.onboarding.linkedinUrl
      this.certificates = data.onboarding.certificates
    }, error => {
      this._snackBar.open("Failed to fetch profile", '', {
        duration: 1000
      })
    })
  }

  public openLinkedin(url: string){
    window.open(url)
  }


}
