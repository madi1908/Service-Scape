import { TestBed } from '@angular/core/testing';

import { NewAdService } from './new-ad.service';

describe('NewAdService', () => {
  let service: NewAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
