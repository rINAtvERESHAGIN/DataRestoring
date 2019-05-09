import { TestBed } from '@angular/core/testing';

import { TableListService } from './table-list.service';

describe('TableListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableListService = TestBed.get(TableListService);
    expect(service).toBeTruthy();
  });
});
