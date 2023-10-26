import { TestBed } from '@angular/core/testing';

import { CoreserviceService } from './coreservice.service';

describe('CoreserviceService', () => {
  let service: CoreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
