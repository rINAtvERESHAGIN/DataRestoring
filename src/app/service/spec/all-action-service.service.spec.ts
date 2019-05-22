import { TestBed } from '@angular/core/testing';

import { AllActionServiceService } from '../dashboard/all-action-service.service';

describe('AllActionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllActionServiceService = TestBed.get(AllActionServiceService);
    expect(service).toBeTruthy();
  });
});
