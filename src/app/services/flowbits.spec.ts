import { TestBed } from '@angular/core/testing';

import { Flowbits } from './flowbits';

describe('Flowbits', () => {
  let service: Flowbits;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flowbits);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
