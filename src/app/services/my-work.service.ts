import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MyWork} from "../models/my-work.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyWorkService {
  private readonly baseUrl: string = `${environment.backendUrl}/`;
  constructor(private http: HttpClient) {}

  getWork(): Observable<MyWork[]> {
    return this.http.get<MyWork[]>(`${this.baseUrl}`);
  }

}
