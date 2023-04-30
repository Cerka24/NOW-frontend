import { Injectable } from '@angular/core';
import {Onboarding} from "../models/onboarding.model";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  ONBOARDING: Array<Onboarding> = [
    {
      id: 1,
      universityYear: 1,
      organization: "SSST",
      shortBio: "1 Highly skilled in software development.",
      certificates: "none",
      linkedinUrl: "https://ba.linkedin.com/in/adela-joldi%C4%87-a3655122a?original_referer=https%3A%2F%2Fwww.google.com%2F",
      gpa: 3.8,
      uploadImage: "https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?w=1060&t=st=1680367901~exp=1680368501~hmac=f52ac161f50201811f589776791e02c575033cf22f3ab5af0947436921bd0d47",
    },
    {
      id: 2,
      universityYear: 2,
      organization: "IUS",
      shortBio: "2 Highly skilled in software development.",
      certificates: "none",
      linkedinUrl: "https://ba.linkedin.com/in/amna-mandzo-aba1811b7",
      gpa: 3.8,
      uploadImage: "https://img.freepik.com/free-vector/designer-concept-set_1284-7167.jpg?w=740&t=st=1680367933~exp=1680368533~hmac=f2710d44d44cba992e4d601127d508e58cc3abd0c730e3a3a8b74342d23403e2",
    },
    {
      id: 3,
      universityYear: 3,
      organization: "IBU",
      shortBio: "3 Highly skilled in software development.",
      certificates: "none",
      linkedinUrl: "https://ba.linkedin.com/in/lejla-omerovic",
      gpa: 3.8,
      uploadImage: "https://img.freepik.com/free-photo/design-software-resize-icon-concept_53876-132194.jpg?w=900&t=st=1680367952~exp=1680368552~hmac=bbc4946d4dab620e7796af70cc782004a400f9ca9427eb98bba56b22939be353",
    },
    {
      id: 4,
      universityYear: 4,
      organization: "MOP",
      shortBio: "4 Highly skilled in software development.",
      certificates: "none",
      linkedinUrl: "https://ba.linkedin.com/in/faruk-ceri%C4%87-7b4526202",
      gpa: 3.8,
      uploadImage: "https://img.freepik.com/free-photo/design-software-resize-icon-concept_53876-132194.jpg?w=900&t=st=1680367952~exp=1680368552~hmac=bbc4946d4dab620e7796af70cc782004a400f9ca9427eb98bba56b22939be353",

    }
  ]

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Onboarding>> {
    return of(this.ONBOARDING)
  }

  getById(id: number): Observable<Onboarding>{
    return of(this.ONBOARDING[id-1])
  }
}
