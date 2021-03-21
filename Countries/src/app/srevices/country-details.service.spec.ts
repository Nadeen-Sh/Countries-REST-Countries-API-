import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CountryDetailsService } from './country-details.service';

describe('CountryDetailsService', () => {
  let service: CountryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(CountryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
