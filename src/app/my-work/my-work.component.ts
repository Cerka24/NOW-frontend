import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MyWork} from "../models/my-work.model";
import {formatDate} from "@angular/common";


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit, OnDestroy {

  public works!: Array<MyWork>;
  public displayedColumns: string[] = [];
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.displayedColumns = ['opportunity', 'organization', 'date_created', 'status'];
    this.unsubscribe = this.activatedRoute.data.subscribe(data => {
      this.works = data["works"]
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }


  public openOpportunity(opportunityId: number){
    this.router.navigate(["/opportunity", opportunityId])
  }


  protected readonly formatDate = formatDate;
}
