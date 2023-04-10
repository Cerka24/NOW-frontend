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
      title: "App Developer",
      description: "Design and develop the student volunteering app to make it user-friendly and easy to navigate.",
      coverImage: "https://buildfire.com/wp-content/uploads/2017/10/become-mobile-app-developer.jpg",
    },
    {
      id: 2,
      title: "Content Creator",
      description: "Create engaging and informative content for the app, including blog posts, news articles, and social media updates.",
      coverImage: "https://www.weidert.com/hubfs/content-creator-tips-feature-image.webp",
    },
    {
      id: 3,
      title: "Marketing Specialist",
      description: "Develop marketing campaigns to promote the app to the student community, such as through social media, email marketing, and event sponsorships.",
      coverImage: "https://img.freepik.com/premium-vector/marketing-specialist-typographic-header-advertising-marketing-concept-business-strategy-communucation-with-customer-isolated-flat-vector-illustration_613284-2135.jpg?w=2000",
    },
    {
      id: 4,
      title: "Outreach Coordinator",
      description: "Build relationships with student organizations, schools, and community groups to promote the app and encourage volunteer sign-ups.",
      coverImage: "https://jobsoidstorage.blob.core.windows.net/job-images/JobDescription/Image/645-outreach-coordinator-20201124125119742.png",
    },
    {
      id: 5,
      title: "Volunteer Coordinator",
      description: "Manage and oversee the volunteer program, including recruiting, training, and assigning volunteers to various projects and events.",
      coverImage: "http://cdn.www.volunteerhub.com/uploads/2014/11/volunteer-coordinator-2.jpg",
    },
    {
      id: 6,
      title: "Graphic Designer",
      description: "Create eye-catching graphics and designs for the app, such as logos, icons, and infographics.",
      coverImage: "https://www.zilliondesigns.com/blog/wp-content/uploads/creative-graphic-designer-1280x720.png",
    },
    {
      id: 7,
      title: "Project Manager",
      description: "Oversee the development and implementation of various projects and initiatives related to the student volunteering app.",
      coverImage: "https://www.feedough.com/wp-content/uploads/2021/09/project-manager.png",
    },
    {
      id: 8,
      title: "User Experience (UX) Designer",
      description: "Conduct user research and design the app's user interface to ensure a seamless and enjoyable user experience.",
      coverImage: "https://www.keenesystems.com/hs-fs/hubfs/blog-images/ux-design.jpg?width=900&name=ux-design.jpg",
    },
  ]

  constructor(private http: HttpClient) { }


  getAll(): Observable<Array<Opportunity>> {
    return of(this.OPPORTUNITIES)
  }


  getById(id: number): Observable<Opportunity>{
    return of(this.OPPORTUNITIES[id-1])
  }
}

