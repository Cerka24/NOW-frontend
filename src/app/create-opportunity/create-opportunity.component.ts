import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {Subscription} from "rxjs";
import {CreateOpportunityService} from "../services/create-opportunity.service";
import {createOpportunity} from "../models/create-opportunity.model";
import {FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

class AuthService {
}

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit{

  private unsubscribe: Subscription | undefined;
  private title: string = '';
  private description: string = '';
  private date: string = '';
  private requirements: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  registerForm: any;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'title': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'requirements': ['', [Validators.required]],
    });
  }

  public create() {
    return this.router.navigate([
      'org-opportunityId'
    ])
  }
}
