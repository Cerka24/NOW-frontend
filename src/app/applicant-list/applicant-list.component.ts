import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MyWork} from "../models/my-work.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent {

  //public applicants!: Applicants[];
  public displayedColumns: string[] = [];
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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

}
