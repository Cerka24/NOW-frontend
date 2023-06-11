import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MyWork} from "../models/my-work.model";
import {Subscription} from "rxjs";
import {OpportunityApplicationService} from "../services/opportunity-application";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OpportunityService} from "../services/opportunity.service";

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent {

  @Input()  applications: Array<any> = []
  @Input()  opportunityId: number = 0

  //public applicants!: Applicants[];
  public displayedColumns: string[] = [];
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar, private opportunityApplicationService: OpportunityApplicationService, private opportunityService: OpportunityService) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['fullName', 'email', 'phone', 'coverLetter', 'action'];
    this.unsubscribe = this.activatedRoute.data.subscribe(data => {
      //this.applicants = data['applicants'];
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }

  public isPending(status: string){
    return status === "Pending";
  }

  private loadApplicants() {
    this.opportunityService.getOpportunity(this.opportunityId).subscribe((data: any) => {
      console.log(data)
      this.applications = data["applications"]
    }, error => {
      this._snackBar.open("Failed to fetch options", '', {
        duration: 1000
      })
    })
  }

  public acceptApplication(applicationId: number) {
    this.opportunityApplicationService.acceptApplication(applicationId).subscribe((data: any) => {
      this._snackBar.open("Accepted", '', {
        duration: 1000
      })
      this.loadApplicants()
    }, error => {
      this._snackBar.open("Error while accepting", '', {
        duration: 1000
      })
    })
  }

  public rejectApplication(applicationId: number) {
    this.opportunityApplicationService.denyApplication(applicationId).subscribe((data: any) => {
      this._snackBar.open("Rejected", '', {
        duration: 1000
      })
      this.loadApplicants()
    }, error => {
      this._snackBar.open("Error while rejecting", '', {
        duration: 1000
      })
    })
  }
}
