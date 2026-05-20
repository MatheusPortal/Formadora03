import { TestBed } from '@angular/core/testing';

import { ServiceFakestore } from './service.fakestore';

describe('ServiceFakestore', () => {
  let service: ServiceFakestore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFakestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
