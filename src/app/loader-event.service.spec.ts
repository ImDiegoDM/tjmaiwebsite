import { TestBed, inject } from '@angular/core/testing';

import { LoaderEventService } from './loader-event.service';

describe('LoaderEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderEventService]
    });
  });

  it('should be created', inject([LoaderEventService], (service: LoaderEventService) => {
    expect(service).toBeTruthy();
  }));
});
