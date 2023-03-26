import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: HttpClient) { }
}

