import { TestBed } from '@angular/core/testing';

import { DetailCountryService } from './detail-country.service';

describe('DetailCountryService', () => {
  let service: DetailCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
