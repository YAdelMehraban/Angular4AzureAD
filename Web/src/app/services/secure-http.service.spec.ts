import { TestBed, inject } from '@angular/core/testing';

import { SecureHttpService } from './secure-http.service';

describe('SecureHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureHttpService]
    });
  });

  it('should be created', inject([SecureHttpService], (service: SecureHttpService) => {
    expect(service).toBeTruthy();
  }));
});
