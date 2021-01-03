import { TestBed } from '@angular/core/testing';

import { BroodjeszaakService } from './broodjeszaak.service';

describe('BroodjeszaakService', () => {
  let service: BroodjeszaakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroodjeszaakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
