import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Opportunity} from "../models/opportunity.model";

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  OPPORTUNITIES: Array<Opportunity> = [
    {
      id: 1,
      title: "Volontiranje 1",
      description: "Volontiranje 1",
      coverImage: "https://book.hr/wp-content/uploads/2020/04/shutterstock_747632842-990x600.jpg",
    },
    {
      id: 2,
      title: "Volontiranje 2",
      description: "Volontiranje 2",
      coverImage: "https://www.haber.ba/wp-content/uploads/2019/03/kopanje-graha.jpg",
    },
    {
      id: 3,
      title: "Volontiranje 3",
      description: "Volontiranje 3",
      coverImage: "https://www.in4s.net/wp-content/uploads/2020/06/kopanje-rupe-rukama.jpg",
    }
  ]

  constructor(private http: HttpClient) { }


  getAll(): Observable<Array<Opportunity>> {
    return of(this.OPPORTUNITIES)
  }


  getById(id: number): Observable<Opportunity>{
    return of(this.OPPORTUNITIES[id-1])
  }
}

