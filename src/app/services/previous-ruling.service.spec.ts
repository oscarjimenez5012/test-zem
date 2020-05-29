import { TestBed } from '@angular/core/testing';

import { PreviousRulingService } from './previous-ruling.service';

describe('PreviousRulingService', () => {
  let service: PreviousRulingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousRulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
