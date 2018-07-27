import { TestBed, inject } from '@angular/core/testing';

import { DatatransferServiceService } from './datatransfer-service.service';

describe('DatatransferServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatransferServiceService]
    });
  });

  it('should be created', inject([DatatransferServiceService], (service: DatatransferServiceService) => {
    expect(service).toBeTruthy();
  }));
});
