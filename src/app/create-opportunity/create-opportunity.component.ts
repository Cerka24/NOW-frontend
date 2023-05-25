import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class CreateOpportunityComponent implements OnInit{

  @Output()
  saveOpportunity: EventEmitter<Opportunity> = new EventEmitter<Opportunity>();

  @Input()
  milestone: Opportunity | undefined;
  private image!: Blob;

  public createOpportunityForm!: FormGroup;

  private opportunityId!: number;
  private unsubscribe: Subscription[] = [];
  private imageUrl!: SafeUrl

  constructor(private formBuilder: FormBuilder,
              private opportunityService: OpportunityService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sanitize: DomSanitizer) {
  }

  ngOnInit(): void {
    this.unsubscribe.push(this.activatedRoute.data.subscribe(data => {
      this.opportunityId = data['orgOpportunity'];
    }));

    this.createOpportunityForm = this.formBuilder.group({
      'id': [this.milestone?.id],
      'title': [this.milestone?.title, Validators.required],
      'description': [this.milestone?.description, Validators.required],
      'coverImage': [this.milestone?.coverImage, Validators.required],
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
    this.image = event.target.files[0].imageURL;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // reader.onload = () => {
    //   const formData = new FormData();
    //   formData.append('image', this.image)
    //   console.log(reader.result)
    //   this.imageUrl = this.sanitize.bypassSecurityTrustUrl(URL.createObjectURL(this.image));
    // };
  }
}
