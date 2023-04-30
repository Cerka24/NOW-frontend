import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm!: FormGroup
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.min(6), Validators.max(16)]],
      'fullName': ['', [Validators.required]],
      'phoneNumber': ['', [Validators.required]],
    });
  }

  public submit(): void {
    if (!this.registerForm.valid) {
      this._snackBar.open("Input is not valid", '', {
        duration: 1000
      })
      return;
    }

    this.authService.register(this.registerForm.value).subscribe((data: any) => {
      console.log(data)
      //TODO: Save this data to use across app
      this._snackBar.open("Account created, please log in", '', {
        duration: 1000
      })
      this.router.navigate(["/login"])

    }, error => {
      this._snackBar.open("Unable to register account", '', {
        duration: 1000
      })
    })
  }



}
