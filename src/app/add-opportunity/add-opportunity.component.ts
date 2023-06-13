import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Opportunity} from "../models/opportunity.model";
import {Subscription} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {OpportunityService} from "../services/opportunity.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.css']
})
export class AddOpportunityComponent implements OnInit, OnDestroy{


  public addOpportunityForm!: FormGroup;

  public opportunityId!: number;
  private unsubscribe: Subscription[] = [];

  public opportunities: Opportunity[] = [];
  public opportunity: Opportunity | undefined;

  public imagePath: SafeUrl | undefined;
  private url?: string | ArrayBuffer | null;
  public existingOpportunity: Opportunity | undefined;


  constructor(private formBuilder: FormBuilder,
              private opportunityService: OpportunityService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.addOpportunityForm = this.formBuilder.group({
      'title': ["", Validators.required],
      'description': ["", Validators.required],
      'requirements': ["", Validators.required],
      'coverImage': ["", Validators.required],
    });

    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      if(data){
        this.existingOpportunity = data["opportunity"]?.opportunityDto
        this.addOpportunityForm = this.formBuilder.group({
          'id': [this.existingOpportunity?.id, []],
          'title': [this.existingOpportunity?.title, Validators.required],
          'description': [this.existingOpportunity?.description, Validators.required],
          'requirements': [this.existingOpportunity?.requirements, Validators.required],
          'coverImage': [this.existingOpportunity?.coverImage, Validators.required],
        });
      }
    }));
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  public submitForm(): void {
    if (!this.addOpportunityForm.valid) {
      this._snackBar.open("Input is not valid", '', {
        duration: 1000
      })
      return;
    }

    this.opportunityService.createOpportunity(this.addOpportunityForm.value).subscribe((data: any) => {
      this._snackBar.open("Opportunity created", '', {
        duration: 1000
      })
      this.router.navigate(["/home"])

    }, error => {
      this._snackBar.open("Unable to create opportunity", '', {
        duration: 1000
      })
    })
  }

}
