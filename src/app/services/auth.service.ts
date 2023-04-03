import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {LoginModel} from "../models/login.model";
import {RegisterModel} from "../models/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: LoginModel): Observable<any>{
    return of(loginData)
  }

  register(registerData: RegisterModel): Observable<any>{
    return of(registerData)
  }
}
