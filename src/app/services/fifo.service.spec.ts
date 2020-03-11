import { TestBed } from '@angular/core/testing';

import { FifoService } from './fifo.service';

describe('FifoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FifoService = TestBed.get(FifoService);
    expect(service).toBeTruthy();
  });
});
