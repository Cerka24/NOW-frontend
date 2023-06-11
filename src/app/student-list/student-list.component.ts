import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {StudentListModel} from "../models/studentList.model";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy{

  public studentList!: UserModel[];
  public displayedColumns: string[] = [];
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.displayedColumns = ['id', 'student', 'joined_on', 'email', 'rate', 'completed', 'points'];
    this.displayedColumns = ['id', 'fullName', 'phoneNumber', 'email', 'universityName', 'universityYear', 'shortBio', 'linkedinUrl', 'profileImageUrl'];
    this.unsubscribe = this.activatedRoute.data.subscribe(data => {
      this.studentList = data['studentLists'];
      console.log(data)
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }

  navigateToOpportunities() {
    this.router.navigate([
      'orgOpportunity'
    ]);
  }
}
