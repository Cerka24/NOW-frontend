import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MyWork} from "../models/my-work.model";
import {Opportunity} from "../models/opportunity.model";

@Injectable({
  providedIn: 'root'
})
export class MyWorkService {

 /* WORKS: Array<MyWork> = [
    {
      opportunity: 'Design',
      organization: 'SSST',
      date_created: '02.04.2023',
      pts: 50,
      status: 'APPROVED'
    },
    {
      opportunity: 'Design2',
      organization: 'SSST',
      date_created: '01.04.2023',
      pts: 20,
      status: 'REJECTED'
    }

    ]*/
  constructor() {}

  getWork(id: number): Observable<MyWork[]> {
    return of([
      {
        opportunity: 'Angular Developer (Vision)',
        organization: 'NSoft',
        date_created: '02.04.2023',
        pts: 80,
        status: 'WAITING'
      },
      {
        opportunity: 'Java Developer',
        organization: 'Ministry of Programming',
        date_created: '01.04.2023',
        pts: 100,
        status: 'WAITING'
      },
      {
        opportunity: 'DevSecOps Engineer',
        organization: 'SQA Consulting',
        date_created: '26.03.2023',
        pts: 70,
        status: 'APPROVED'
      },
      {
        opportunity: 'Python Developer',
        organization: 'walter code',
        date_created: '18.03.2023',
        pts: 90,
        status: 'APPROVED'
      },
      {
        opportunity: 'QA Manual Tester (Junior)',
        organization: 'QSD',
        date_created: '15.03.2023',
        pts: 60,
        status: 'REJECTED'
      },
      {
        opportunity: 'Product Specialist / Manager (Games)',
        organization: 'NSoft',
        date_created: '11.03.2023',
        pts: 50,
        status: 'APPROVED'
      },
      {
        opportunity: 'C++ Developer',
        organization: 'Bicom Systems',
        date_created: '02.03.2023',
        pts: 70,
        status: 'REJECTED'
      },
      {
        opportunity: 'Flutter developer',
        organization: 'SQA Consulting',
        date_created: '01.03.2023',
        pts: 50,
        status: 'APPROVED'
      }
    ]);
  }

  createWork(work: MyWork): Observable<MyWork> {
    console.log('Reached workService with intention to create work:', work);
    return of({
      opportunity: 'Design5',
      organization: 'SSST',
      date_created: '2023',
      pts: 58,
      status: 'APPROVED NOT'
    });
  }


 /* getById(id: number): Observable<MyWork>{
    return of(this.WORKS[id-1])
  }*/
}
