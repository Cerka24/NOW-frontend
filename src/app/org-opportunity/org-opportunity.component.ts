import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Opportunity} from "../models/opportunity.model";
import {Subscription} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {OpportunityService} from "../services/opportunity.service";

@Component({
  selector: 'app-org-opportunity',
  templateUrl: './org-opportunity.component.html',
  styleUrls: ['./org-opportunity.component.css']
})
export class OrgOpportunityComponent implements OnInit, OnDestroy{

  private unsubscribe: Subscription[] = [];
  public opportunities: Array<Opportunity> = []
  public opportunityId!: number;
  public imagePath: SafeUrl | undefined;
  public opportunity: Opportunity | undefined;
  public isOrg: boolean = false;
  public isOwner: boolean = false;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute, public sanitize: DomSanitizer, private opportunityService: OpportunityService) {
  }

  ngOnInit(): void {

    console.log(localStorage.getItem("isOrg"))
    this.isOrg = localStorage.getItem("isOrg") === "true"
    const currentId: number = parseInt(localStorage.getItem("currentId") as string)

    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.opportunityId = data['orgOpportunity'];
      this.opportunities = data['orgOpportunity'];
      console.log("DATA :: ", data)
      console.log(this.opportunities)

      const creatorId = data["opportunity"].opportunityDto.organizationId

      if(currentId === creatorId){
        this.isOwner = true;
        this.isOrg = true;
      }
    }));
  }

  public displayImage(id: number): void {
    this.opportunityService.getOpportunity(id).subscribe(opportunity => {
      this.opportunity = opportunity;
      this.imagePath = this.sanitize.bypassSecurityTrustUrl(opportunity.coverImage);
    })
  }
  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  navigateToCreateOpportunity() {
    this.router.navigate([
      'orgOpportunity/createOpportunity'
    ]);
  }
  navigateToStudentList() {
    this.router.navigate([
      'orgOpportunity/studentList'
    ])
  }
  navigateToOpportunity(id: number){
    this.router.navigate([
      'opportunity/' + id
    ])
  }

  navigateToLandingPage() {
    this.router.navigate([
      'register'
    ])
  }
}
