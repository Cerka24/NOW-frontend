import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Opportunity} from "../models/opportunity.model";
import {Subscription} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {OpportunityService} from "../services/opportunity.service";

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit, OnDestroy{

  @Output()
  saveOpportunity: EventEmitter<Opportunity> = new EventEmitter<Opportunity>();

  @Input()
  newOpportunity: Opportunity | undefined;
  private image!: Blob;

  public createOpportunityForm!: FormGroup;

  public opportunityId!: number;
  private unsubscribe: Subscription[] = [];

  public opportunities: Opportunity[] = [];
  public opportunity: Opportunity | undefined;

  public imagePath: SafeUrl | undefined;
  private url?: string | ArrayBuffer | null;

  constructor(private formBuilder: FormBuilder,
              private opportunityService: OpportunityService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public sanitize: DomSanitizer) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.opportunityId = data['orgOpportunity'];
    }));

    this.createOpportunityForm = this.formBuilder.group({
      'id': [this.newOpportunity?.id],
      'title': [this.newOpportunity?.title, Validators.required],
      'description': [this.newOpportunity?.description, Validators.required],
      'requirements': [this.newOpportunity?.requirements, Validators.required],
      'startDate': [this.newOpportunity?.startDate, Validators.required],
      'endDate': [this.newOpportunity?.endDate, Validators.required],
      'coverImage': [this.newOpportunity?.coverImage, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach(obs => obs.unsubscribe());
  }

  public submit(): void {
    if (!this.createOpportunityForm.valid) {
      return;
    }
    this.saveOpportunity.emit(this.createOpportunityForm.value);
  }
  onImagesSelected(event: any) {
    const file = event.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          this.imagePath = this.sanitize.bypassSecurityTrustUrl(reader.result)
        }
        console.log(reader.result)
      };
    }
  }
  // public showImage(id:number):void {
  //   this.opportunityService.getOpportunity(id).subscribe(opportunity => {
  //     this.imagePath = this.sanitize.bypassSecurityTrustUrl(opportunity.coverImage);
  //   });
  // }

  // public fileSelected(event: any): void {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     const fileName = file.name;
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       console.log(reader.result);
  //
  //       // const opportunity: Opportunity = {
  //       //   title: fileName,
  //       //   coverImage: reader.result as string,
  //       // }
  //       this.opportunityService.getOpportunities().subscribe(() => {
  //         console.log('screenshot uploaded');
  //       });
  //     };
  //   }
  // }
}
