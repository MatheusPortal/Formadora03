import { TestBed } from '@angular/core/testing';

import { ServiceAlunos } from './service.alunos';

describe('ServiceAlunos', () => {
  let service: ServiceAlunos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAlunos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
