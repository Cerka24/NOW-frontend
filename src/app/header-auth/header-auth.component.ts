import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.css']
})
export class HeaderAuthComponent {
  constructor(private router: Router) {}

  navigateToRegister() {
    this.router.navigate([
      'register'
    ]);
  }
}
