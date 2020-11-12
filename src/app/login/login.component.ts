import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {User} from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  
  
  loginForm: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['',  Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
public submitForm() {
  if (this.loginForm.valid) {
    
    console.log(this.loginForm.getRawValue());
    this.isSubmitted = true;
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
} else {
    console.log('There is a problem with the form');
}
  
}

// validatorPassword(fc: FormControl) {
//   const value = fc.value as string;
//   const isInvalid = 'password' === value.trim().toLowerCase();
//   return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
// }
}
