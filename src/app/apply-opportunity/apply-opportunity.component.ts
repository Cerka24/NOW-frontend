import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-apply-opportunity',
  templateUrl: './apply-opportunity.component.html',
  styleUrls: ['./apply-opportunity.component.css']
})
export class ApplyOpportunityComponent {
  public applyForm!: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.applyForm = this.formBuilder.group({
      'text': ['', [Validators.required, Validators.min(100), Validators.max(10000)]],
    });
  }

  public submit(): void {
    if (!this.applyForm.valid) {
      this._snackBar.open("Please insert your cover letter", '', {
        duration: 1000
      })
      return;
    }
  }
}
