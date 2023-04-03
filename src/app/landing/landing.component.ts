import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router:Router, private activatedRoute: ActivatedRoute ) {
  }

  navigateToLogin(): void {
    const path = "login"
    this.router.navigate([path])
}

  navigateToRegister(): void {
    const path = "register"
    this.router.navigate([path])
  }
}
