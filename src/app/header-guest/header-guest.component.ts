import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-guest',
  templateUrl: './header-guest.component.html',
  styleUrls: ['./header-guest.component.css']
})
export class HeaderGuestComponent {

  constructor(private router:Router) {
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
