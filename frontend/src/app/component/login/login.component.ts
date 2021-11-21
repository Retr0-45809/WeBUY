import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { RestApiService } from 'src/app/service/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  btnDisabled = false;
  constructor(
    private router: Router,
    private rest: RestApiService,
    private data: DataService,
  ) { }

  ngOnInit(): void {
  }
 
  validate() {
    if (this.email) {
      if (this.password) {
        return true;
      } else {
        this.data.error('Password is not entered');
      }
    } else {
      this.data.error('Email is not entered.');
    }
  }

  async login() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/login',
          {
            email: this.email,
            password: this.password,
          },
        );
        if ('success') {
          localStorage.setItem('token', 'token');
          this.router.navigate(['/']);
        } else {
          this.data.error('message');
        }
      }
    } catch (error) {
      this.data.error('message');
    }
    this.btnDisabled = false;
  }
}
