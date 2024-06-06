import { TestBed } from '@angular/core/testing';

import { StaticproductsService } from './staticproducts.service';

describe('StaticproductsService', () => {
  let service: StaticproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
