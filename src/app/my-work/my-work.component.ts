import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MyWork} from "../models/my-work.model";


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit, OnDestroy {

  public works!: MyWork[];
  public displayedColumns: string[] = [];
  private unsubscribe: Subscription | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.displayedColumns = ['opportunity', 'organization', 'date_created', 'pts', 'status'];
    this.unsubscribe = this.activatedRoute.data.subscribe(data => {
      this.works = data['works'];
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe!.unsubscribe()
  }
  goBack(): void {
    this.router.navigate([
      '',
    ]);
  }
}
