import { TestBed, inject } from '@angular/core/testing';

import { Authguard } from './authguard.service';

describe('Authguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Authguard]
    });
  });

  it('should be created', inject([Authguard], (service: Authguard) => {
    expect(service).toBeTruthy();
  }));
});
