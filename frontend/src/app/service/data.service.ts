import { Injectable } from '@angular/core';

import { NavigationStart, Router } from '@angular/router';

import { RestApiService } from './rest-api.service';

@Injectable()
export class DataService {
  message = '';
  messageType = 'danger';

  user: any;

  constructor(private router: Router, private rest: RestApiService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
  }

  error(message: string) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message: string) {
    this.messageType = 'success';
    this.message = message;
  }

  warning(message: string) {
    this.messageType = 'warning';
    this.message = message;
  }
}
