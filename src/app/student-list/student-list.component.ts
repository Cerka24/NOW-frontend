import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {StudentListModel} from "../models/studentList.model";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy{

  public studentList!: StudentListModel[];
  public displayedColumns: string[] = [];
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['id', 'student', 'joined_on', 'email', 'rate', 'completed', 'points'];
    this.unsubscribe = this.activatedRoute.data.subscribe(data => {
      this.studentList = data['studentLists'];
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
