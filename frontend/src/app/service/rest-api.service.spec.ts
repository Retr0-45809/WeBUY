import { inject, TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
  let service: RestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiService);
  });

  it('should be created', inject([RestApiService], (service: RestApiService) => {
    expect(service).toBeTruthy();
  }));
});
