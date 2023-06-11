import { Component } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {OpportunityApplicationService} from "../services/opportunity-application";

@Component({
  selector: 'app-apply-opportunity',
  templateUrl: './apply-opportunity.component.html',
  styleUrls: ['./apply-opportunity.component.css']
})
export class ApplyOpportunityComponent {
  public applyForm!: FormGroup

  public id: number = 0

  constructor(private router: Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private route: ActivatedRoute, private opportunityApplicationService: OpportunityApplicationService) {
  }

  ngOnInit(): void {
    this.applyForm = this.formBuilder.group({
      'coverLetter': ['', [Validators.required, Validators.min(100), Validators.max(10000)]],
    });
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.id = +id;
  }

  public submit(): void {
    if (!this.applyForm.valid) {
      this._snackBar.open("Please insert your cover letter", '', {
        duration: 1000
      })
      return;
    }

    this.opportunityApplicationService.createApplication(this.applyForm.value.coverLetter, this.id).subscribe((data: any) => {
      console.log(data)
      //TODO: Save this data to use across app
      this._snackBar.open("Successfully Applied", '', {
        duration: 1000
      })
      this.router.navigate(["/home"])
    }, error => {
      this._snackBar.open("Error while applying", '', {
        duration: 1000
      })
    })
  }
}
