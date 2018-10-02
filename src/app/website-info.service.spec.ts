import { TestBed, inject } from '@angular/core/testing';

import { WebsiteInfoService } from './website-info.service';

describe('WebsiteInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsiteInfoService]
    });
  });

  it('should be created', inject([WebsiteInfoService], (service: WebsiteInfoService) => {
    expect(service).toBeTruthy();
  }));
});
