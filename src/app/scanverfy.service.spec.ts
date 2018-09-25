import { TestBed, inject } from '@angular/core/testing';

import { ScanverfyService } from './scanverfy.service';

describe('ScanverfyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScanverfyService]
    });
  });

  it('should be created', inject([ScanverfyService], (service: ScanverfyService) => {
    expect(service).toBeTruthy();
  }));
});
