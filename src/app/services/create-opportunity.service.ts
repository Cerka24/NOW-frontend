import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {createOpportunity} from "../models/create-opportunity.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateOpportunityService {

  CreateOpportunity: Array<createOpportunity> = [
    {
      title: 'Project Manger',
      date: '02/20/2023',
      description: 'Oversee the development and implementation of various projects and initiatives related to the student volunteering app.',
      requirements: 'Good communicator and able to manage multiple tasks'
    },
    {
      title: 'User Experience (UX) Designer',
      date: '10/05/2023',
      description: 'Conduct user research and design the app\'s user interface to ensure a seamless and enjoyable user experience.',
      requirements: 'Good communicator and able to manage multiple tasks'
    }
    ]

  constructor(httpClient: HttpClient) { }

  createOpportunity(createOpportunityData: createOpportunity): Observable<any>{
    return of(createOpportunityData);
  }
}
