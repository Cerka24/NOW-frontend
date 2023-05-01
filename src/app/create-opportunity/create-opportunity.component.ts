import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Opportunity} from "../models/opportunity.model";
import {CreateOpportunityService} from "../services/create-opportunity.service";

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit{


  constructor(private router: Router, private formBuilder: FormBuilder, private createOpportunityService: CreateOpportunityService) {}

  registerForm: any;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'requirements': ['', [Validators.required]],
    });
  }

  createOpportunity(opportunity: Opportunity): void {
    this.createOpportunityService.createOpportunity(opportunity).subscribe(() => {
      this.create();
    })
  }

  public create() {
    return this.router.navigate([
      'orgOpportunity'
    ])
  }
}
