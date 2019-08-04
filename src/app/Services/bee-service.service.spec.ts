import { TestBed } from '@angular/core/testing';

import { BeeServiceService } from './bee-service.service';

describe('BeeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeeServiceService = TestBed.get(BeeServiceService);
    expect(service).toBeTruthy();
  });
});
