import { TestBed, inject } from '@angular/core/testing';

import { EsraaService } from './esraa.service';

describe('EsraaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsraaService]
    });
  });

  it('should be created', inject([EsraaService], (service: EsraaService) => {
    expect(service).toBeTruthy();
  }));
});
